import React from 'react';
import SideNavServerIcon from './SideNavServerIcon';
import SideNavMainContent from './SideNavMainContent'

const ServerSideNav = () => (
  <div className="server-side-nav">
    <ul className="server-icon-container">
      <SideNavServerIcon />
    </ul>
    <ul className="server-side-main-container">
      <SideNavMainContent />
    </ul>
  </div>
);

export default ServerSideNav;
