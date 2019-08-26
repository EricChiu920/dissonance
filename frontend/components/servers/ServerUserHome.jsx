import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideNavDMChannels from './sideNav/SideNavDMChannels';
import ServerIndexContainer from './ServerIndexContainer';
import MessageContentContainer from '../messages/MessageContentContainer';

const ServerUserHome = () => {
  return (
    <>
      <SideNavDMChannels />
      <Route exact path="/channels/@me/:dmId" component={MessageContentContainer} />
      <Route exact path="/channels/@me" component={ServerIndexContainer} />
    </>
  );
};

export default ServerUserHome;
