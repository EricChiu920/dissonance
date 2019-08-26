import React from 'react';
import { NavLink } from 'react-router-dom';

class Channel extends React.Component {
  componentDidMount() {
  }

  render() {
    const { channel: { name, id }, serverId, DMServer } = this.props;
    const icon = DMServer ? null : <i className="fas fa-hashtag fa-lg" />;

    return (
      <li>
        <NavLink to={`/channels/${serverId}/${id}`} className="channel-item" activeClassName="active-channel">
          {icon}
          {name}
        </NavLink>
      </li>
    );
  }
}

export default Channel;
