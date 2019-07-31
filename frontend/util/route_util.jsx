/* eslint-disable react/jsx-first-prop-new-line */
/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({
  component: Component,
  path,
  loggedIn,
  exact,
}) => (
  <Route path={path} exact={exact} render={props => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}
  />
);

const mapStateToProps = (state) => {
  const { session: { id } } = state;

  return {
    loggedIn: !!id,
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
