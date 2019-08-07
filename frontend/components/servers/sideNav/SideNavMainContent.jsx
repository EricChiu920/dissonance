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

  updateServerModal() {
    const { openModal } = this.props;

    return openModal('updateServer');
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

  render() {
    const { createdServers, channels, server = {}, userId } = this.props;
    const { id, name, ownerId } = server;

    const channelList = channels.map(channel => (
      <Channel key={channel.id} updateChannelModal={this.updateChannelModal} channel={channel} serverId={id} />
    ));

    const newServerButton = ownerId !== userId ? null : (
      <button onClick={this.createChannelModal} type="button">+</button>
    );

    const serverActionButtons = createdServers.includes(id) ? (
      <div className="side-nav-server-action-buttons">
        <button onClick={this.updateServerModal} type="button">Edit Server</button>
        <button onClick={this.handleDeleteServer(server)} type="button">Delete Server</button>
      </div>
    ) : null;

    return (
      <div className="server-side-main-container">
        <div className="side-main-content">
          <div className="channel-list-index">
            <p className="server-name">{name}</p>
            <div className="channel-info">
              <p>TEXT CHANNELS</p>
              {newServerButton}
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
