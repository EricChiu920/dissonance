import { connect } from 'react-redux';
import { createServer } from '../../../actions/serverActions';
import CreateServer from './CreateServer';

const mapDispatchToState = (dispatch) => {
  return {
    createServer: server => dispatch(createServer(server)),
  };
};

export default connect(null, mapDispatchToState)(CreateServer);
