import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => {
  const formLink = currentUser ? <button className="session-form-link" onClick={logout} type="button">Logout</button> : <Link to="/login" className="session-form-link">Login</Link>;

  return (
    <nav className="navbar">
      {/* img from discordapp */}
      <img src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg" alt="discord logo in white" />
      {formLink}
    </nav>
  );
};

export default Navbar;
