/* eslint-disable quotes */
import React from 'react';
import { NavLink } from 'react-router-dom';

class Channel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconClasses: "",
    };

    this.displayModal = this.displayModal.bind(this);
    this.showIcon = this.showIcon.bind(this);
    this.hideIcon = this.hideIcon.bind(this);
  }

  displayModal(e) {
    e.preventDefault();

    const { openModal } = this.props;
    openModal('updateChannel');
  }

  render() {
    const { channel: { name, id }, serverId, DMServer } = this.props;
    const icon = DMServer ? null : <i className="fas fa-hashtag fa-lg" />;
    const { iconClasses } = this.state;

    

    return (
      <li>
        <NavLink to={`/channels/${serverId}/${id}`} className="channel-item" activeClassName="active-channel">
          <span>
            {icon}
            {name}
          </span>
          <i className={iconClasses} onClick={this.displayModal} />
        </NavLink>
      </li>
    );
  }
}

export default Channel;
