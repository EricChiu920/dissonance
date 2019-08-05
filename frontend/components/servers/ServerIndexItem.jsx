import React from 'react';

const ServerIndexItem = ({
  server: { name, id, userCount },
  server,
  joinedServers,
  joinServer,
  leaveServer,
}) => {
  let buttonText;
  let buttonAction;
  let serverButtonClasses;

  if (joinedServers.includes(id)) {
    buttonText = 'Leave Server';
    buttonAction = () => leaveServer(server);
    serverButtonClasses = 'leave-server-button';
  } else {
    buttonText = 'Join Server';
    buttonAction = () => joinServer(server);
    serverButtonClasses = 'join-server-button';
  }

  return (
    <li className="server-index-list-item">
      <img src="https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" alt="discord logo in white" />
      <p>{name}</p>
      <div className="server-item-info">
        <p>{`${userCount} Users`}</p>
        <button onClick={buttonAction} className={serverButtonClasses} type="button">{buttonText}</button>
      </div>
    </li>
  );
};

export default ServerIndexItem;
