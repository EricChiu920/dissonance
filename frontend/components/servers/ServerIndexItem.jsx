import React from 'react';
import { Link } from 'react-router-dom';

const ServerIndexItem = ({
  server = {},
  joinedServers,
  joinServer,
  leaveServer,
}) => {
  let buttonText;
  let buttonAction;
  let serverButtonClasses;
  const { name, id, userCount } = server;

  if (!joinedServers) {
    return null;
  }

  if (joinedServers.includes(id)) {
    buttonText = 'Leave Server';
    buttonAction = (e) => {
      e.preventDefault();
      leaveServer(server);
    };
    serverButtonClasses = 'leave-server-button';
  } else {
    buttonText = 'Join Server';
    buttonAction = (e) => {
      e.preventDefault();
      joinServer(server);
    };
    serverButtonClasses = 'join-server-button';
  }

  return (
    <Link to={`/channels/${id}`} className="server-index-list-item-link">
      <li className="server-index-list-item">
        <img src="https://discordapp.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg" alt="discord logo in white" />
        <p>{name}</p>
        <div className="server-item-info">
          <p>{`${userCount} Users`}</p>
          <button onClick={buttonAction} className={serverButtonClasses} type="button">{buttonText}</button>
        </div>
      </li>   
    </Link>
  );
};

export default ServerIndexItem;
