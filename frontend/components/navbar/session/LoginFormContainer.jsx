import { connect } from 'react-redux';
import { login } from '../../../actions/sessionActions';
import SessionForm from './SessionForm';

const mapStateToProps = (state) => {
  const { errors } = state.errors;

  return {
    errors,
    formType: 'Login',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
