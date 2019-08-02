import React from 'react';
import { Route } from 'react-router-dom';
import ServerSideNavContainer from './ServerSideNavContainer';
import ServerIndex from './ServerIndex';

const ServerMain = () => (
  <div>
    <ServerSideNavContainer />
    <Route path="/channels/all" component={ServerIndex} />
  </div>
);

export default ServerMain;
