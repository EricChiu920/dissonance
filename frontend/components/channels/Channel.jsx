import React from 'react';
import { NavLink } from 'react-router-dom';

class Channel extends React.Component {
  componentDidMount() {
  }

  render() {
    const { channel: { name, id }, serverId } = this.props;

    return (
      <li>
        <NavLink to={`/channels/${serverId}/${id}`} className="channel-item" activeClassName="active-channel">
          <i className="fas fa-hashtag fa-lg" />
          {name}
        </NavLink>
      </li>
    );
  }
}

export default Channel;
