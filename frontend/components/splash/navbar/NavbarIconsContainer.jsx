import { connect } from 'react-redux';
import NavbarIcons from './NavbarIcons';

const mapStateToProps = (state) => {
  const { session: { id }, entities: { users } } = state;
  const currentUser = users[id];
  return {
    currentUser,
  };
};

export default connect(mapStateToProps)(NavbarIcons);
