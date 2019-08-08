import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import MainSplashPage from './MainSplashPage';
import SplashMessageContainer from './SplashMessageContainer';

const Splash = () => (
  <div className="splash-background">
    <header className="header-nav">
      {/* <Route exact path="/" component={Navbar} /> */}
      <Navbar />
    </header>
    <div className="splash-main">
      <SplashMessageContainer />
      <MainSplashPage />
    </div>
  </div>
);

export default Splash;
