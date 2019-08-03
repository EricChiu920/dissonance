import React from 'react';
import SideNavServerIcon from './SideNavServerIcon';
import SideNavMainContent from './SideNavMainContent';

const SideNav = ({ serverNames }) => {
  const serverIconList = serverNames.map(server => (
    <SideNavServerIcon key={server.id} server={server.name} />
  ));

  return (
    <div className="server-side-nav">
      <ul className="server-icon-container">
        {serverIconList}
        <button className="add-server-button" type="button">+</button>
      </ul>
      <ul className="server-side-main-container">
        <SideNavMainContent />
      </ul>
    </div>
  );
};

export default SideNav;
