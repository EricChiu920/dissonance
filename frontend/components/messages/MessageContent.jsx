import React from 'react';

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
    const { channel: { ownerId }, userId } = this.props;
    const deleteButton = ownerId !== userId ? null : (
      <button onClick={this.channelFormModal} type="button" className="channel-edit-button">Edit</button>
    );

    return (
      <>
        {deleteButton}
      </>
    );
  }
}

export default MessageContent;
