import React from 'react';
import { withRouter } from 'react-router-dom';
import MessageFormContainer from './MessageFormContainer';

/* global App */
// App defined from rails in cable.js

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.bottom = React.createRef();
  }

  componentDidMount() {
    const { channelId } = this.props;

    App.chatRoom = App.cable.subscriptions.create(
      { channel: 'ChatChannel', channelId: Number(channelId) },
      {
        received: (data) => {
          switch (data.type) {
            case 'message': {
              const { messages } = this.state;
              const { message: { channelId: messageChannelId }, message } = data;

              if (Number(channelId) === messageChannelId) {
                this.setState({ messages: messages.concat(message) });
              }
              break;
            }
            case 'messages': {
              this.setState({ messages: data.messages });
              break;
            }
            default:
              break;
          }
        },
        speak(data) {
          return this.perform('speak', data);
        },
        load() {
          return this.perform('load');
        },
      },
    );


    App.cable.subscriptions.subscriptions[0].load();
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
    const { messages } = this.state;

    const messageList = messages.map(message => (
      <li key={message.id}>
        {message.body}
        <div ref={this.bottom} />
      </li>
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
