import React from 'react';

const SessionFormMessage = ({ formType }) => (
  formType !== 'Signup' ? (
    <>
      <p className="main-session-message">Welcome back!</p>
      <p className="secondary-session-message">We&apos;re so excited to see you again!</p>
    </>
  ) : <p className="main-session-message">Create an account</p>
);

export default SessionFormMessage;
