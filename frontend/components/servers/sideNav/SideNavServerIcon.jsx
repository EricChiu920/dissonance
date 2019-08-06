import React from 'react';

const SideNavServerIcon = ({ server, changeServer }) => (
  <li onClick={changeServer}>
    <p>{server[0].toUpperCase()}</p>
  </li>
);

export default SideNavServerIcon;
