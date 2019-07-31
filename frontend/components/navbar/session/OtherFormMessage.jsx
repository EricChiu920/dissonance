import React from 'react';
import { Link } from 'react-router-dom';

const OtherFormMessage = ({ formType }) => (
  formType !== 'Signup' ? (
    <Link className="other-form-link" to="/signup">
      <p className="other-form-message">
        Need an account?
      </p>
      Register
    </Link>
  ) : <Link className="other-form-link" to="/login">Already have an account?</Link>
);

export default OtherFormMessage;
