import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNavServerIcon from './SideNavServerIcon';

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleServer: 0,
    };

    this.createServerModal = this.createServerModal.bind(this);
    this.changeServer = this.changeServer.bind(this);
    this.logout = this.logout.bind(this);
  }

  createServerModal() {
    const { openModal } = this.props;

    return openModal('createServer');
  }

  changeServer(i) {
    return () => {
      this.setState({
        visibleServer: i,
      });
    };
  }

  logout() {
    const { logout, history } = this.props;

    logout()
      .then(() => history.push('/'));
  }

  render() {
    const {
      serverNames,
    } = this.props;
    const { visibleServer } = this.state;

    const serverIconList = serverNames.map((server, i) => (
      <NavLink activeClassName="active-server-icon" className="server-icon" key={server.id} to={`/channels/${server.id}`}>
        <SideNavServerIcon
          changeServer={this.changeServer(i)}
          server={server.name}
          selected={i === visibleServer}
        />
      </NavLink>
    ));

    return (
      <div className="server-side-nav">
        <ul className="server-icon-container">
          <NavLink to="/channels/all" activeClassName="active-server-icon" className="server-icon">
            <img
              className="server-index-button"
              src="https://discordapp.com/assets/5ccabf62108d5a8074ddd95af2211727.png"
              alt="discord brand icon"
            />
          </NavLink>
          {serverIconList}
          <button onClick={this.createServerModal} className="add-server-button" type="button">+</button>
          <button onClick={this.logout} className="side-nav-logout-button" type="button"><i className="fas fa-sign-out-alt fa-2x" /></button>
        </ul>
      </div>
    );
  }
}

export default SideNav;
