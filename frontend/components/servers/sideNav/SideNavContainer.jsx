import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav';
import { userServerNamesSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal, closeModal } from '../../../actions/modalActions';
import { logout, fetchUser } from '../../../actions/sessionActions';
import { receiveServerErrors, clearServerErrors, createServer } from '../../../actions/serverActions';

const mapStateToProps = (state, ownProps) => {
  const serverNames = userServerNamesSelector(state, false);
  const { location: { pathname } } = ownProps;
  const path = pathname.split('/')[2].toLowerCase();

  return {
    serverNames,
    path,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout()),
    createServer: server => dispatch(createServer(server)),
    receiveServerErrors: errors => dispatch(receiveServerErrors(errors)),
    clearServerErrors: () => dispatch(clearServerErrors()),
    closeModal: () => dispatch(closeModal()),
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
