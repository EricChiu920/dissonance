import React from 'react';
import SideNavMainContentContainer from './sideNav/SideNavMainContentContainer';
import MessageContent from '../messages/MessageContent';

const ServerMainContent = ({ match: { params: { channelId } } }) => {
  const messages = channelId ? (
    <MessageContent channelId={channelId} />
  ) : null;

  return (
    <>
      <SideNavMainContentContainer />
      {messages}
    </>
  );
};

export default ServerMainContent;
