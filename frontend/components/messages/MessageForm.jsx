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
      this.setState({ [field]: e.currentTarget.value })
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={body}
            onChange={this.update('body')}
            placeholder="Message #"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default MessageForm;
