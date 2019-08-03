import React from 'react';

const SideNavServerIcon = ({ server }) => (
  <li className="server-icon">
    <p>{server[0].toUpperCase()}</p>
  </li>
);

export default SideNavServerIcon;
