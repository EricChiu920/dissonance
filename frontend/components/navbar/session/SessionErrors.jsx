import React from 'react';

const SessionErrors = ({ errors }) => {
  const errorList = errors.map(err => <li key={err}>{err}</li>);

  return (
    errors.length === 0 ? null : (
      <ul className="session-errors">
        {errorList}
      </ul>
    )
  );
};

export default SessionErrors;
