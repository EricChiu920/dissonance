import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageFormContainer from './MessageFormContainer';
import MessageItem from './MessageItem';

/* global App */
// App defined from rails in cable.js

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.bottom = React.createRef();
  }

  componentDidMount() {
    const { channelId } = this.props;

    App.chatRoom = App.cable.subscriptions.create(
      { channel: 'ChatChannel' },
      {
        received: (data) => {
          const { messages } = this.state;
          const { message: { channelId: messageChannelId }, message } = data;

          if (Number(channelId) === messageChannelId) {
            this.setState({ messages: messages.concat(message) });
          }
        },
        speak(data) {
          return this.perform('speak', data);
        },
      },
    );
  }

  componentDidUpdate() {
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  componentWillUnmount() {
    if (App.chatRoom) {
      App.chatRoom.unsubscribe();
    }
  }

  render() {
    const { messageHistory } = this.props;

    const messageList = messageHistory.map(message => (
      <MessageItem key={message.id} message={message} />
    ));

    return (
      <div className="chatroom-container">
        <div>ChatRoom</div>
        <ul className="message-list">
          {messageList}
        </ul>
        <MessageFormContainer />
      </div>
    );
  }
}

export default withRouter(ChatRoom);
