import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Splash from './splash/Splash';
import LoginFormContainer from './splash/session/LoginFormContainer';
import SignupFormContainer from './splash/session/SignupFormContainer';
import ServerMain from './servers/ServerMain';

const App = () => (
  <>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route path="/channels" component={ServerMain} />
    <Route exact path="/" component={Splash} />
  </>
);

export default App;
