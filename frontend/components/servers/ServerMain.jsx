import React from 'react';
import { Route } from 'react-router-dom';
import ServerSideNavContainer from './sideNav/SideNavContainer';
import ServerIndex from './ServerIndex';

const ServerMain = () => (
  <div className="server-main">
    <ServerSideNavContainer />
    {/* <Route path="/channels/all" component={ServerIndex} /> */}
    <ServerIndex />
  </div>
);

export default ServerMain;
