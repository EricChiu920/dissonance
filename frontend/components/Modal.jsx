/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import { createServer } from '../actions/serverActions';
import CreateServerContainer from './servers/serverAPIComponents/CreateServerContainer';

class Modal extends React.Component {
  static displayComponent(modal) {
    switch (modal) {
      case 'createServer': {
        return <CreateServerContainer closeModal={closeModal} />;
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
    createServer: server => dispatch(createServer(server)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
