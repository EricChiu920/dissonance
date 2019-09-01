import React from 'react';
import { Redirect } from 'react-router-dom';

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
    const { server } = this.props;

    if (!server) {
      return <Redirect to="/channels/@me" />;
    }
    const { channel = {}, userId } = this.props;
    const { ownerId } = server;


    const editButton = ownerId !== userId ? null : (
      <button onClick={this.channelFormModal} type="button" className="channel-edit-button">Edit</button>
    );
    const { name = '' } = channel;

    return (
      <div className="channel-title">
        <span className="channel-title-info">
          <i className="fas fa-hashtag fa-lg" />
          <p>{name}</p>
        </span>
        {/* {editButton} */}
      </div>
    );
  }
}

export default ChannelTitle;
