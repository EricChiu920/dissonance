import { connect } from 'react-redux';
import { logout } from '../../../actions/sessionActions';
import Navbar from './Navbar';

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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
