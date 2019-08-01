import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/NavbarContainer';
import MainSplashPage from './MainSplashPage';
import SplashMessage from './SplashMessage';

const Splash = () => (
  <div className="splash-background">
    <header>
      <Route exact path="/" component={NavbarContainer} />
    </header>
    <SplashMessage />
    <MainSplashPage />
  </div>
);

// const cssClasses = currentUser ?  "loggedInBackground" : "loggedoutBackground"

// div className={cssClasses}

export default Splash;
