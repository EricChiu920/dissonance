import React from 'react';
import { Link } from 'react-router-dom';

const SplashMessage = ({ login }) => (
  <div className="splash-message">
    <h3>It&apos;s time to ditch Skype and TeamSpeak.</h3>
    <p>
      All-in-one voice and text chat for gamers that&apos;s free, secure, and
      works on both your desktop and phone.
    </p>
    <p>
      Stop paying for TeamSpeak servers and hassling with Skype.
      Simplify your life.
    </p>
    <span>
      <Link to="/signup">Sign Up</Link>
      <button onClick={login} type="button">Sign in as guest</button>
    </span>
  </div>
);

export default SplashMessage;
