import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/NavbarContainer';
import LoginFormContainer from './navbar/session/LoginFormContainer';
import SignupFormContainer from './navbar/session/SignupFormContainer';

const App = () => (
  <>
    <header>
      <h1>Hello from the App component... dissonance!!!</h1>
      <NavbarContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </>
);

export default App;
