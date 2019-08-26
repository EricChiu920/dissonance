import React from 'react';
import { Route } from 'react-router-dom';
import SideNavDMChannels from './sideNav/SideNavDMChannels';
import ServerIndexContainer from './ServerIndexContainer';
import MessageContentContainer from '../messages/MessageContentContainer';

const ServerUserHome = () => {
  return (
    <>
      <SideNavDMChannels />
      <Route path="/channels/@me/:dmId" component={MessageContentContainer} />
      <Route path="/channels/@me" component={ServerIndexContainer} />
    </>
  );
};

export default ServerUserHome;
