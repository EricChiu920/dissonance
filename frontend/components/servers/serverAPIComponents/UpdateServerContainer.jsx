import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateServer, deleteServer } from '../../../actions/serverActions';
import { closeModal } from '../../../actions/modalActions';
import ServerForm from './ServerForm';

const mapStateToProps = (state, ownProps) => {
  const { location: { pathname } } = ownProps;
  const { entities: { servers } } = state;
  const serverId = pathname.split('/')[2];

  const server = servers[serverId];

  return {
    server,
    formType: 'Update',
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    processForm: server => dispatch(updateServer(server)),
    closeModal: () => dispatch(closeModal()),
    deleteServer: server => dispatch(deleteServer(server)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToState)(ServerForm));
