import { connect } from 'react-redux';
import ServerIndex from './ServerIndex';
import { deleteServer } from '../../actions/serverActions';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteServer: server => dispatch(deleteServer(server)),
  };
};

export default connect(null, mapDispatchToProps)(ServerIndex);
