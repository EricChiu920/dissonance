import React from 'react';

const SideNavMainContent = ({ server = {}, deleteServer, createdServers }) => {
  const { id, name } = server;
  const serverActionButtons = createdServers.includes(id) ? (
    <div className="side-nav-server-action-buttons">
      {/* add edit server button when doing modal for */}
      {/* <button onClick={deleteServer} type="button">Edit Server</button> */}
      <button onClick={deleteServer} type="button">Delete Server</button>
    </div>
  ) : null;

  return (
    <div className="side-main-content">
      <p>{name}</p>
      {serverActionButtons}
    </div>
  );
};

export default SideNavMainContent;
