import React from 'react';
import ChatRoomContainer from './ChatRoomContainer';
import ChannelTitleContainer from '../channels/ChannelTitleContainer';

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
    const { channelId } = this.props;

    return (
      <div className="message-content-container">
        <ChannelTitleContainer />
        <ChatRoomContainer key={channelId} channelId={channelId} />
      </div>
    );
  }
}

export default MessageContent;
