import React from 'react';
import SideNavMainContentContainer from './sideNav/SideNavMainContentContainer';
import MessageContentContainer from '../messages/MessageContentContainer';

const ServerMainContent = ({ match: { params: { channelId } } }) => {
  const messages = channelId ? (
    <MessageContentContainer channelId={channelId} />
  ) : null;

  return (
    <>
      <SideNavMainContentContainer />
      {messages}
    </>
  );
};

export default ServerMainContent;
