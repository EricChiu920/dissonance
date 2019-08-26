import React from 'react';
import ServerIndexItem from './ServerIndexItem';

class ServerIndex extends React.Component {
  componentDidMount() {
    const { fetchAllServers } = this.props;

    fetchAllServers();
  }

  render() {
    const {
      servers,
      joinedServers,
      joinServer,
      leaveServer,
    } = this.props;

    const serverList = servers.map(server => (
      <ServerIndexItem
        key={server.id}
        server={server}
        joinedServers={joinedServers}
        joinServer={joinServer}
        leaveServer={leaveServer}
      />
    ));

    return (
      <>
        <div className="server-index">
          <h1>Find new communities on Discord</h1>
          <p>Popular servers and communities</p>
          <ul className="server-index-list-container">
            {serverList}
          </ul>
        </div>
      </>
    );
  }
}

export default ServerIndex;
