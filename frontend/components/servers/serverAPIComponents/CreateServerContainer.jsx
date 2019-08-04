import { connect } from 'react-redux';
import { createServer } from '../../../actions/serverActions';
import { closeModal } from '../../../actions/modalActions';
import CreateServer from './CreateServer';

const mapDispatchToState = (dispatch) => {
  return {
    createServer: server => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToState)(CreateServer);
