import React from 'react';

const SideNavMainContent = ({ server: { id, name }, deleteServer, createdServers }) => {
  const deleteButton = createdServers.includes(id) ? <button onClick={deleteServer} type="button">Delete Server</button> : null;

  return (
    <div className="side-main-content">
      <p>{name}</p>
      {deleteButton}
    </div>
  );
};

export default SideNavMainContent;
