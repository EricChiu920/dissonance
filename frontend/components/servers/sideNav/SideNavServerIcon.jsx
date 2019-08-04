import React from 'react';

const SideNavServerIcon = ({ server, changeServer }) => (
  <li onClick={changeServer} className="server-icon">
    <p>{server[0].toUpperCase()}</p>
  </li>
);

export default SideNavServerIcon;
