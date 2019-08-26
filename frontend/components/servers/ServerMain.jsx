import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavContainer from './sideNav/SideNavContainer';
import ServerMainContent from './ServerMainContent';
import ServerUserHome from './ServerUserHome';

const ServerMain = () => (
  <div className="server-main">
    <SideNavContainer />
    <Switch>
      <Route path="/channels/@me" component={ServerUserHome} />
      <Route exact path="/channels/:serverId/:channelId" component={ServerMainContent} />
      <Route exact path="/channels/:serverId" component={ServerMainContent} />
    </Switch>
  </div>
);

export default ServerMain;
