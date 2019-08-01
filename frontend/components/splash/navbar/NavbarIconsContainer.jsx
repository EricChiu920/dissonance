import { connect } from 'react-redux';
import { logout } from '../../../actions/sessionActions';
import NavbarIcons from './NavbarIcons';

const mapStateToProps = (state) => {
  const { session: { id }, entities: { users } } = state;
  const currentUser = users[id];
  return {
    currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarIcons);
