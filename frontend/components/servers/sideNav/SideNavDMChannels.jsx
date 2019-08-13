import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modalActions';

class SideNavDMChannels extends React.Component {
  constructor(props) {
    super(props);

    this.findUser = this.findUser.bind(this);
  }

  findUser() {
    const { openDMServerModal } = this.props;

    return openDMServerModal('DMServer');
  }

  render() {
    return (
      <div className="side-nav-dm-channels">
        <div>
          <input onClick={this.findUser} className="dm-input" type="text" placeholder="Find or start a conversation" />
        </div>
        <ul>
          <p>DIRECT MESSAGES</p>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openDMServerModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(null, mapDispatchToProps)(SideNavDMChannels);
