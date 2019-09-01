/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import CreateServerContainer from './servers/serverAPIComponents/CreateServerContainer';
import UpdateServerContainer from './servers/serverAPIComponents/UpdateServerContainer';
import CreateDMServer from './servers/serverAPIComponents/CreateDMServer';
import CreateChannelContainer from './channels/CreateChannelContainer';
import UpdateChannelContainer from './channels/UpdateChannelContainer';

class Modal extends React.Component {
  static displayComponent(modal) {
    switch (modal) {
      case 'DMServer': {
        return <CreateDMServer />;
      }
      case 'createServer': {
        return <CreateServerContainer />;
      }
      case 'updateServer': {
        return <UpdateServerContainer update />;
      }
      case 'createChannel': {
        return <CreateChannelContainer />;
      }
      case 'updateChannel': {
        return <UpdateChannelContainer />;
      }
      default:
        return null;
    }
  }

  constructor(props) {
    super(props);

    this.escCloseModal = this.escCloseModal.bind(this);
  }

  escCloseModal(e) {
    if (e.keyCode === 27) {
      const { closeModal } = this.props;

      closeModal();
    }
  }

  render() {
    const { modal, closeModal } = this.props;
    const component = modal ? (
      <div className="modal-background" onKeyDown={e => this.escCloseModal(e)} onMouseDown={closeModal} role="button" tabIndex={0}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className="modal-child" onKeyDown={this.escCloseModal} onMouseDown={e => e.stopPropagation()}>
          {Modal.displayComponent(modal)}
        </div>
      </div>
    ) : null;

    return (
      <>
        {component}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { modal } = state.ui;
  return {
    modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
