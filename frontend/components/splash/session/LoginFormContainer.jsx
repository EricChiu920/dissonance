import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../../actions/sessionActions';
import SessionForm from './SessionForm';

const mapStateToProps = (state) => {
  const { errors: { session: sessionErrors } } = state;

  return {
    sessionErrors,
    formType: 'Login',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
