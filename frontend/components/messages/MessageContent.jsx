import React from 'react';

class MessageContent extends React.Component {
  componentDidMount() {
    const { fetchChannel, channelId } = this.props;

    fetchChannel(channelId);
  }

  render() {
    return (
      <div>messages</div>
    );
  }
}

export default MessageContent;
