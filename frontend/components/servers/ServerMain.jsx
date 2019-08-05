import React from 'react';
import { Route } from 'react-router-dom';
import SideNavContainer from './sideNav/SideNavContainer';
import ServerIndexContainer from './ServerIndexContainer';

const ServerMain = () => (
  <div className="server-main">
    <SideNavContainer />
    <div className="server-index">
      <Route path="/channels/all" component={ServerIndexContainer} />
      <Route path="/channels/:serverId/:channelId" />
    </div>
  </div>
);

export default ServerMain;
