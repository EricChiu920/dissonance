import React from 'react';
import Channel from '../../channels/Channel';

class SideNavMainContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteServer = this.handleDeleteServer.bind(this);
    this.createChannelModal = this.createChannelModal.bind(this);
    this.updateServerModal = this.updateServerModal.bind(this);
    this.changeServer = this.changeServer.bind(this);
  }

  componentDidMount() {
    this.changeServer();
  }

  componentDidUpdate(prevState) {
    const { serverId: oldServerId } = prevState;
    const { serverId } = this.props;

    if (oldServerId !== serverId) {
      this.changeServer();
    }
  }

  changeServer() {
    const {
      fetchServer,
      serverId,
      history,
    } = this.props;

    fetchServer(serverId)
      .then((res) => {
        const { payload: { channels } } = res;
        const channelIds = Object.keys(channels);
        const firstChannelId = Math.min(...channelIds);
        history.push(`/channels/${serverId}/${firstChannelId}`);
      });
  }

  updateServerModal() {
    const { openModal } = this.props;

    return openModal('updateServer');
  }

  handleDeleteServer(server) {
    const { deleteServer, history } = this.props;

    return () => {
      deleteServer(server).then(() => history.push('/channels/@me'));
    };
  }

  createChannelModal() {
    const { openModal } = this.props;

    return openModal('createChannel');
  }

  render() {
    const {
      createdServers,
      channels,
      server = {},
      userId,
    } = this.props;
    const { id, name, ownerId } = server;

    const channelList = channels.map(channel => (
      <Channel key={channel.id} updateChannelModal={this.updateChannelModal} channel={channel} serverId={id} />
    ));

    const newServerButton = ownerId !== userId ? null : (
      <button onClick={this.createChannelModal} className="add-channel-button" type="button">+</button>
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
            <div className="server-name">{name}</div>
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
