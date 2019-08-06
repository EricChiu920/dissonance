import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav';
import { userServerNamesSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal } from '../../../actions/modalActions';
import { logout } from '../../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  const serverNames = userServerNamesSelector(state);
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
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
