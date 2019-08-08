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
    const { channelId, receiveMessage } = this.props;

    // Chatroom and MessageForm code based on code from https://medium.com/@benpong89/action-cable-and-react-9a00be5e391b
    App.chatRoom = App.cable.subscriptions.create(
      { channel: 'ChatChannel' },
      {
        received: (data) => {
          const { message: { channelId: messageChannelId }, message } = data;

          if (Number(channelId) === messageChannelId) {
            receiveMessage(message);
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
          <div ref={this.bottom} />
        </ul>
        <MessageFormContainer />
      </div>
    );
  }
}

export default withRouter(ChatRoom);
