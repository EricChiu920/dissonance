/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';
import CreateServerContainer from ''

class Modal extends React.component {
  constructor(props) {
    super(props);

    this.escCloseModal = this.escCloseModal.bind(this);
    this.displayComponent = this.displayComponent.bind(this);
  }

  escCloseModal(e) {
    if (e.keyCode === 27) {
      const { closeModal } = this.props;

      closeModal();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  displayComponent(modal) {
    if (!modal) {
      return null;
    }

    switch (modal) {
      case 'createServer': {
        return <CreateServerContainer />;
      }
      default:
        return null;
    }
  }

  render() {
    const { modal } = this.props;
    const component = this.displayComponent(modal);

    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
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
