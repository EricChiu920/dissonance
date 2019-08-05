import React from 'react';

const SideNavMainContent = ({ server: { id, name }, deleteServer, createdServers }) => {
  const serverActionButtons = createdServers.includes(id) ? (
    <div className="side-nav-server-action-buttons">
      {/* add edit server button when doing modal for servers */}
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
