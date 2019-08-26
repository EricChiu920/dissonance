import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DMChannel = ({ dmName, serverId }) => {
  return (
    <li>
      <NavLink to={`/channels/${serverId}/${'id'}`} className="channel-item" activeClassName="active-channel">
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
  const channelId = 0;

  const dmName = user.username;
  return {
    dmName,
  };
};

export default connect(mapStateToProps)(DMChannel);
