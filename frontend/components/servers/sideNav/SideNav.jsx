import React from 'react';
import { Link } from 'react-router-dom';
import SideNavServerIcon from './SideNavServerIcon';
import SideNavMainContent from './SideNavMainContent';

class SideNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleServer: 0,
    };

    this.createServerModal = this.createServerModal.bind(this);
    this.changeServer = this.changeServer.bind(this);
    this.deleteServer = this.deleteServer.bind(this);
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

  deleteServer(server) {
    const { deleteServer, history } = this.props;

    return () => {
      history.push('/channels/all');
      deleteServer(server);
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
      createdServers,
      path,
    } = this.props;
    const { visibleServer } = this.state;

    const mainServer = serverNames[visibleServer];
    const serverIconList = serverNames.map((server, i) => (
      <Link key={server.id} to={`/channels/${server.id}`}>
        <SideNavServerIcon
          changeServer={this.changeServer(i)}
          server={server.name}
          selected={i === visibleServer}
        />
      </Link>
    ));
    const sideMain = path === 'all' ? null : (
      <div className="server-side-main-container">
        <SideNavMainContent deleteServer={this.deleteServer(mainServer)} createdServers={createdServers} server={mainServer} />
      </div>
    );


    return (
      <div className="server-side-nav">
        <ul className="server-icon-container">
          <Link to="/channels/all" className="server-icon">
            <img
              className="server-index-button"
              src="https://icon-library.net/images/discord-transparent-server-icon/discord-transparent-server-icon-10.jpg"
              alt="discord brand icon"
            />
          </Link>
          {serverIconList}
          <button onClick={this.createServerModal} className="add-server-button" type="button">+</button>
          <button onClick={this.logout} className="side-nav-logout-button" type="button"><i className="fas fa-sign-out-alt fa-2x" /></button>
        </ul>
        {sideMain}
      </div>
    );
  }
}

export default SideNav;
