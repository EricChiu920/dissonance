import React from 'react';

// } = ({ server = {}, deleteServer, createdServers }) => {
class SideNavMainContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteServer = this.handleDeleteServer.bind(this);
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

  render() {
    const { createdServers, server = {} } = this.props;
    const { id, name } = server;

    const serverActionButtons = createdServers.includes(id) ? (
      <div className="side-nav-server-action-buttons">
        {/* add edit server button when doing modal for */}
        {/* <button onClick={deleteServer} type="button">Edit Server</button> */}
        <button onClick={this.handleDeleteServer(server)} type="button">Delete Server</button>
      </div>
    ) : null;

    return (
      <div className="server-side-main-container">
        <div className="side-main-content">
          <div className="channel-list-index">
            <p>{name}</p>
            <p>TEXT CHANNELS</p>
            <ul className="channel-list-container">
              
            </ul>
          </div>
          {serverActionButtons}
        </div>
      </div>
    );
  }
}

export default SideNavMainContent;
