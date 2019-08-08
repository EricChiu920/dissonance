import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      edited: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      // autoresize text area code from https://stackoverflow.com/questions/995168/textarea-to-resize-based-on-content-length
      e.target.style.height = 'inherit';
      e.target.style.height = `${e.target.scrollHeight}px`;
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { body, edited } = this.state;
    const { userId, channelId } = this.props;
    // App defined from rails in cable.js
    // eslint-disable-next-line no-undef
    App.cable.subscriptions.subscriptions[0].speak({
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
          {/* <input
            type="text"
            value={body}
            onChange={this.update('body')}
            placeholder="Message #"
            maxLength="255"
          /> */}
          <textarea
            id="message-form-textarea"
            placeholder="Message #"
            onChange={this.update('body')}
            maxLength="500"
            rows="1"
            value={body}
          />
        </form>
      </div>
    );
  }
}

export default MessageForm;
