import React from 'react';
import { Link } from 'react-router-dom';

const OtherFormMessage = ({ formType }) => (
  formType !== 'Signup' ? (
    <p className="other-form-message">
      Need an account?
      <Link className="other-signup-form-link" to="/signup">
        Register
      </Link>
    </p>
  ) : <Link className="other-login-form-link" to="/login">Already have an account?</Link>
);

export default OtherFormMessage;
