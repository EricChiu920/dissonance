import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav';
import { userServerNamesSelector, userCreatedServersSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal } from '../../../actions/modalActions';
import { deleteServer } from '../../../actions/serverActions';

const mapStateToProps = (state) => {
  const serverNames = userServerNamesSelector(state);
  const createdServers = userCreatedServersSelector(state);

  return {
    serverNames,
    createdServers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    deleteServer: server => dispatch(deleteServer(server)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
