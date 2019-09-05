import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav';
import { userServerNamesSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal, closeModal } from '../../../actions/modalActions';
import { logout, fetchUser } from '../../../actions/sessionActions';
import {
  receiveServerErrors,
  clearServerErrors,
  receiveServer,
  clearServers,
} from '../../../actions/serverActions';

const mapStateToProps = (state, ownProps) => {
  const { session: { id } } = state;
  const { location: { pathname } } = ownProps;
  const serverNames = userServerNamesSelector(state, false);
  const path = pathname.split('/')[2].toLowerCase();

  return {
    serverNames,
    path,
    sessionId: id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    receiveServer: server => dispatch(receiveServer(server)),
    receiveServerErrors: errors => dispatch(receiveServerErrors(errors)),
    clearServerErrors: () => dispatch(clearServerErrors()),
    closeModal: () => dispatch(closeModal()),
    fetchUser: () => dispatch(fetchUser()),
    clearServers: () => dispatch(clearServers()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
