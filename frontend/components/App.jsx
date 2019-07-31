import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavbarContainer from './navbar/NavbarContainer';
import LoginFormContainer from './navbar/session/LoginFormContainer';
import SignupFormContainer from './navbar/session/SignupFormContainer';

const App = () => (
  <>
    <header>
      <nav className="navbar">
        <Route exact path="/" component={NavbarContainer} />
      </nav>
    </header>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </>
);

export default App;
