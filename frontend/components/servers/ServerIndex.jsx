import React from 'react';
import ServerIndexItem from './ServerIndexItem';

const ServerIndex = ({ servers, joinedServers }) => {
  const serverList = servers.map(server => <ServerIndexItem key={server.id} server={server} joinedServers={joinedServers} />);

  return (
    <>
      <h1>Find new communities on Discord</h1>
      <p>Popular servers and communities</p>
      <ul className="server-index-list-container">
        {serverList}
      </ul>
    </>
  );
};

export default ServerIndex;
