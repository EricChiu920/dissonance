import React from 'react';
import MessageFormContainer from './MessageFormContainer';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.bottom = React.createRef();
  }

  componentDidMount() {
    // App defined from rails in cable.js
    // eslint-disable-next-line no-undef
    App.cable.subscriptions.create(
      { channel: 'ChatChannel' },
      {
        received: (data) => {
          const { messages } = this.state;

          this.setState({ messages: messages.concat(data) });
        },
        speak(data) {
          return this.perform('speak', data);
        },
      },
    );
  }

  componentDidUpdate() {
    this.bottom.current.scrollIntoView();
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

export default ChatRoom;
