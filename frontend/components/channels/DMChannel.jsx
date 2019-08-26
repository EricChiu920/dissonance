import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DMChannel = ({ dmName, channelId }) => {
  return (
    <li>
      <NavLink to={`/channels/@me/${channelId}`} className="channel-item" activeClassName="active-channel">
        {dmName}
      </NavLink>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { session: { id }, entities: { users, servers } } = state;
  const { name, ownerId, serverId } = ownProps;
  let user = {};
  if (ownerId === id) {
    user = users[name] || {};
  } else {
    user = users[ownerId] || {};
  }

  const server = servers[serverId];
  const { channelId } = server;

  const dmName = user.username;
  return {
    dmName,
    channelId,
  };
};

export default connect(mapStateToProps)(DMChannel);
