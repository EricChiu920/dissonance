import React from 'react';

/* global App */
// App defined from rails in cable.js

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      edited: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnterSubmit = this.handleEnterSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      // autoresize text area code from https://stackoverflow.com/questions/995168/textarea-to-resize-based-on-content-length
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight}px`;
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleEnterSubmit(e) {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { body, edited } = this.state;
    const { userId, channelId } = this.props;
    App.chatRoom.speak({
      message: body,
      edited,
      author_id: userId,
      channel_id: channelId,
    });

    this.setState({ body: '' });
  }

  render() {
    const { body } = this.state;

    return (
      <div className="message-form-container">
        <form className="message-form" onSubmit={this.handleSubmit}>
          <textarea
            id="message-form-textarea"
            placeholder="Message #"
            onChange={this.update('body')}
            maxLength="500"
            rows="1"
            onKeyDown={this.handleEnterSubmit}
            value={body}
          />
        </form>
      </div>
    );
  }
}

export default MessageForm;
