import React from 'react';
import Channel from '../../channels/Channel';

class SideNavMainContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteServer = this.handleDeleteServer.bind(this);
    this.createChannelModal = this.createChannelModal.bind(this);
    this.updateServerModal = this.updateServerModal.bind(this);
  }

  componentDidMount() {
    const { fetchServer, serverId } = this.props;

    fetchServer(serverId);
  }

  componentDidUpdate(prevState) {
    const { match: { params: { serverId: oldServerId } } } = prevState;
    const { fetchServer, serverId } = this.props;

    if (oldServerId !== serverId) {
      fetchServer(serverId);
    }
  }

  handleDeleteServer(server) {
    const { deleteServer, history } = this.props;

    return () => {
      deleteServer(server).then(() => history.push('/channels/all'));
    };
  }

  createChannelModal() {
    const { openModal } = this.props;

    return openModal('createChannel');
  }

  updateServerModal() {
    const { openModal } = this.props;

    return openModal('updateServer');
  }

  render() {
    const { createdServers, channels, server = {} } = this.props;
    const { id, name } = server;

    const channelList = channels.map(channel => <Channel key={channel.id} channel={channel} />);

    const serverActionButtons = createdServers.includes(id) ? (
      <div className="side-nav-server-action-buttons">
        {/* add edit server button when doing modal for */}
        <button onClick={this.updateServerModal} type="button">Edit Server</button>
        <button onClick={this.handleDeleteServer(server)} type="button">Delete Server</button>
      </div>
    ) : null;

    return (
      <div className="server-side-main-container">
        <div className="side-main-content">
          <div className="channel-list-index">
            <p>{name}</p>
            <div className="channel-info">
              <p>TEXT CHANNELS</p>
              <button onClick={this.createChannelModal} type="button">+</button>
            </div>
            <ul className="channel-list-container">
              {channelList}
            </ul>
          </div>
          {serverActionButtons}
        </div>
      </div>
    );
  }
}

export default SideNavMainContent;
