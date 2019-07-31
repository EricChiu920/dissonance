import { connect } from 'react-redux';
import { signup, clearSessionErrors } from '../../../actions/sessionActions';
import SessionForm from './SessionForm';

const mapStateToProps = (state) => {
  const { errors: { session: sessionErrors } } = state;

  return {
    sessionErrors,
    formType: 'Signup',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
