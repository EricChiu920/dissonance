import React from 'react';

class ChannelTitle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.channelFormModal = this.channelFormModal.bind(this);
  }

  channelFormModal() {
    const { openModal } = this.props;

    openModal('updateChannel');
  }

  render() {
    const { server: { name, ownerId }, userId } = this.props;
    const editButton = ownerId !== userId ? null : (
      <button onClick={this.channelFormModal} type="button" className="channel-edit-button">Edit</button>
    );

    return (
      <div className="channel-title">
        <p>{name}</p>
        {editButton}
      </div>
    );
  }
}

export default ChannelTitle;
