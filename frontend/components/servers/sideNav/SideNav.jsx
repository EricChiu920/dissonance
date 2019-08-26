import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SideNavServerIcon from './SideNavServerIcon';
import { receiveServerErrors, clearServerErrors, createServer } from '../../../actions/serverActions';
import { closeModal } from '../../../actions/modalActions';

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
    const { receiveServerErrors, clearServerErrors, closeModal } = this.props;

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

          const newServer = {
            id,
            name: Number(name),
            ownerId,
            channels: [channelId],
            privateServer,
          };

          createServer(newServer);
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
    const { logout, history } = this.props;

    logout();
    history.push('/');
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

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: server => dispatch(createServer(server)),
    receiveServerErrors: errors => dispatch(receiveServerErrors(errors)),
    clearServerErrors: () => dispatch(clearServerErrors()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToProps)(SideNav);
