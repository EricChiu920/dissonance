import React from 'react';
import { connect } from 'react-redux';
import DMChannel from '../../channels/DMChannel';
import { openModal } from '../../../actions/modalActions';
import { fetchAllUsers } from '../../../actions/sessionActions';

class SideNavDMChannels extends React.Component {
  constructor(props) {
    super(props);

    this.findUser = this.findUser.bind(this);
  }

  componentDidMount() {
    const { fetchAllUsers } = this.props;

    fetchAllUsers();
  }

  findUser() {
    const { openDMServerModal } = this.props;

    return openDMServerModal('DMServer');
  }

  render() {
    const { servers } = this.props;


    const dmList = servers.map(server => (
      <DMChannel key={server.id} serverId={server.id} name={server.name} ownerId={server.ownerId} server={server} />
    ));

    return (
      <div className="side-nav-dm-channels">
        <div>
          <input onClick={this.findUser} className="dm-input" type="text" placeholder="Find or start a conversation" />
        </div>
        <ul>
          <p>DIRECT MESSAGES</p>
          {dmList}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { entities: { servers } } = state;
  return {
    servers: Object.values(servers).filter(server => server.privateServer === true),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openDMServerModal: modal => dispatch(openModal(modal)),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNavDMChannels);
