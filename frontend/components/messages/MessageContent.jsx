import React from 'react';
import ChatRoom from './ChatRoom';
import ChannelTitle from '../channels/ChannelTitle';

class MessageContent extends React.Component {
  constructor(props) {
    super(props);

    this.channelFormModal = this.channelFormModal.bind(this);
  }

  componentDidMount() {
    const { fetchChannel, channelId } = this.props;

    fetchChannel(channelId);
  }

  componentDidUpdate(prevProps) {
    const { channelId, fetchChannel } = this.props;

    if (prevProps.channelId !== channelId) {
      fetchChannel(channelId);
    }
  }

  channelFormModal() {
    const { openModal } = this.props;

    openModal('updateChannel');
  }

  render() {
    const { channel: { ownerId }, userId, channelId } = this.props;
    const owner = ownerId === userId;

    return (
      <>
        <ChannelTitle />
        <div className="message-content-container">
          <ChatRoom key={channelId} owner={owner} channelFormModal={this.channelFormModal} />
        </div>
        <div className="user-list">
          Users
        </div>
      </>
    );
  }
}

export default MessageContent;
