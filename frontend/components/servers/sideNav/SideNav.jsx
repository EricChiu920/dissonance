import React from 'react';
import { NavLink } from 'react-router-dom';
import SideNavServerIcon from './SideNavServerIcon';

/* global App */
// App defined from rails in cable.js

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

  componentDidMount() {
    const {
      receiveServerErrors,
      clearServerErrors,
      closeModal,
      receiveServer,
      history,
      sessionId,
    } = this.props;


    App.DMServer = App.cable.subscriptions.create(
      { channel: 'DmServerChannel' },
      {
        received: (data) => {
          if ('errorMessage' in data) {
            receiveServerErrors(data.errorMessage);
            return;
          }

          clearServerErrors();
          closeModal();
          const {
            DMServer: {
              id,
              channelId,
              name,
              ownerId,
              privateServer,
            },
          } = data;

          const server = {
            id,
            name: Number(name),
            ownerId,
            channelId,
            privateServer,
          };

          if (sessionId === ownerId || sessionId === Number(name)) {
            // Reducer expects a payload containing server
            receiveServer({ server });
          }

          if (sessionId === ownerId) {
            const firstChannelId = server.channelId;
            history.push(`/channels/@me/${firstChannelId}`);
          }
        },
        createDMServer(data) {
          return this.perform('create_dm_server', data);
        },
      },
    );
  }

  componentWillUnmount() {
    if (App.DMServer) {
      App.DMServer.unsubscribe();
    }
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
    const { logout, history, clearServers } = this.props;

    history.push('/');
    logout();
    clearServers();
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
          <NavLink to="/channels/@me" activeClassName="active-server-icon" className="server-icon">
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
