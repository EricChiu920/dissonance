import React from 'react';
import { Link } from 'react-router-dom';

const NavbarIcons = ({ currentUser, selected }) => {
  const formLink = currentUser ? <Link className="session-form-link" to="/channels/@me">Open</Link> : <Link to="/login" className="session-form-link">Login</Link>;
  const classes = selected ? 'navbar-icons selected-side-nav-icon' : 'navbar-icons';

  return (
    <ul className={classes}>
      <li>{formLink}</li>
      <span className="line" />
      <li><a href="https://github.com/IrieY56/dissonance"><i className="fab fa-github fa-lg" /></a></li>
    </ul>
  );
};

export default NavbarIcons;
