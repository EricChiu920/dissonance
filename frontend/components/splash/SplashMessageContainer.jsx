import { connect } from 'react-redux';
import SplashMessage from './SplashMessage';
import { login } from '../../actions/sessionActions';

const mapDispatchToProps = (dispatch) => {
  const guest = {
    email: 'guest@mail.com',
    password: 'hunter12',
  };

  return {
    login: () => dispatch(login(guest)),
  };
};

export default connect(null, mapDispatchToProps)(SplashMessage);
