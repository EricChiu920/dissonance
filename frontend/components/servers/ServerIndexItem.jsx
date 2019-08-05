import React from 'react';

const ServerIndexItem = ({
  server: { name, id },
  server,
  joinedServers,
  joinServer,
  leaveServer,
}) => {
  let buttonText;
  let buttonAction;

  if (joinedServers.includes(id)) {
    buttonText = 'Leave Server';
    buttonAction = () => leaveServer(server);
  } else {
    buttonText = 'Join Server';
    buttonAction = () => joinServer(server);
  }

  return (
    <li className="server-index-list-item">
      {name}
      <button onClick={buttonAction} type="button">{buttonText}</button>
    </li>
  );
};

export default ServerIndexItem;
