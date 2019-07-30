import { connect } from 'react-redux';
import { signup } from '../../../actions/sessionActions';
import SessionForm from './SessionForm';

const mapStateToProps = (state) => {
  const { errors } = state.errors;

  return {
    errors,
    formType: 'Signup',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: user => dispatch(signup(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
