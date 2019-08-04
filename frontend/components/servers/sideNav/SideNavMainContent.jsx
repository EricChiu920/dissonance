import React from 'react';

const SideNavMainContent = ({ server, deleteServer }) => {
  return (
    <div className="side-main-content">
      <p>{server.name}</p>
      <button onClick={deleteServer} type="button">Delete Server</button>
    </div>
  );
};

export default SideNavMainContent;
