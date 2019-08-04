import React from 'react';
import { Route } from 'react-router-dom';
import ServerSideNavContainer from './sideNav/SideNavContainer';
import ServerIndexContainer from './ServerIndexContainer';

const ServerMain = () => (
  <div className="server-main">
    <ServerSideNavContainer />
    {/* <Route path="/channels/all" component={ServerIndexContainer} /> */}
    <ServerIndexContainer />
  </div>
);

export default ServerMain;
