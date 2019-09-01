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

  showIcon() {
    this.setState({ iconClasses: "fas fa-edit" });
  }

  hideIcon() {
    this.setState({ iconClasses: "" });
  }

  render() {
    const {
      channel: { name, id },
      serverId,
      DMServer,
      channelUrlId,
    } = this.props;

    const { iconClasses } = this.state;

    const icon = DMServer ? null : <i className="fas fa-hashtag fa-lg" />;
    const editButton = (!DMServer && Number(channelUrlId) === id) ? <i className={iconClasses} onClick={this.displayModal} /> : null;

    return (
      <li onMouseEnter={this.showIcon} onMouseLeave={this.hideIcon}>
        <NavLink to={`/channels/${serverId}/${id}`} className="channel-item" activeClassName="active-channel">
          <span>
            {icon}
            {name}
          </span>
          {editButton}
        </NavLink>
      </li>
    );
  }
}

export default Channel;
