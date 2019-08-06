import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavContainer from './sideNav/SideNavContainer';
import ServerIndexContainer from './ServerIndexContainer';
import SideNavMainContentContainer from './sideNav/SideNavMainContentContainer';

const ServerMain = () => (
  <div className="server-main">
    <SideNavContainer />
    <Switch>
      <Route path="/channels/all" component={ServerIndexContainer} />
      <Route exact path="/channels/:serverId/:channelId" component={SideNavMainContentContainer} />
      <Route exact path="/channels/:serverId" component={SideNavMainContentContainer} />
    </Switch>
  </div>
);

export default ServerMain;
