/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Channel from '../../channels/Channel';

class SideNavMainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iconClasses: '',
    };

    this.handleDeleteServer = this.handleDeleteServer.bind(this);
    this.createChannelModal = this.createChannelModal.bind(this);
    this.updateServerModal = this.updateServerModal.bind(this);
    this.changeServer = this.changeServer.bind(this);
    this.showIcon = this.showIcon.bind(this);
    this.hideIcon = this.hideIcon.bind(this);
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

  showIcon() {
    this.setState({ iconClasses: 'fas fa-edit edit-server-icon clickable' });
  }

  hideIcon() {
    this.setState({ iconClasses: '' });
  }

  render() {
    const {
      createdServers,
      channels,
      server = {},
      userId,
      openModal,
      channelId,
    } = this.props;

    const { iconClasses } = this.state;
    const { id, name, ownerId } = server;

    const channelList = channels.map(channel => (
      <Channel key={channel.id} openModal={openModal} channel={channel} serverId={id} channelUrlId={channelId} />
    ));

    const newChannelButton = ownerId !== userId ? null : (
      // <button onClick={this.createChannelModal} className="add-channel-button" type="button">+</button>
      <i onClick={this.createChannelModal} className="fas fa-plus clickable" />
    );

    const serverActionButtons = createdServers.includes(id) ? (
      // <div className="side-nav-server-action-buttons">
      //   <button onClick={this.updateServerModal} type="button">Edit Server</button>
      //   <button onClick={this.handleDeleteServer(server)} type="button">Delete Server</button>
      // </div>
      <i className={iconClasses} onClick={this.updateServerModal} />
    ) : null;

    return (
      <div className="server-side-main-container">
        <div className="side-main-content">
          <div className="channel-list-index">
            <div className="server-name">
              <p>{name}</p>
              {serverActionButtons}
            </div>
            <div className="channel-info">
              <p>TEXT CHANNELS</p>
              {newChannelButton}
            </div>
            <ul className="channel-list-container">
              {channelList}
            </ul>
          </div>
          {/* {serverActionButtons} */}
        </div>
      </div>
    );
  }
}

export default SideNavMainContent;
