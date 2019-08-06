import { connect } from 'react-redux';
import { createServer } from '../../../actions/serverActions';
import { closeModal } from '../../../actions/modalActions';
import ServerForm from './ServerForm';

const mapStateToProps = () => {
  const server = {
    name: '',
  };

  return {
    server,
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    processForm: server => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToState)(ServerForm);
