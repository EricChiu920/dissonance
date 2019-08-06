import React from 'react';
import { NavLink } from 'react-router-dom';

class Channel extends React.Component {
  componentDidMount() {
  }

  render() {
    const { channel: { name, id }, updateChannelModal, serverId } = this.props;

    return (
      <li>
        <NavLink to={`/channels/${serverId}/${id}`}>
          {name}
          <button onClick={updateChannelModal} type="button">Edit</button>
        </NavLink>
      </li>
    );
  }
}

export default Channel;
