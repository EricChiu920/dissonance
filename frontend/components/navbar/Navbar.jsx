import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout }) => (
  currentUser ? <button onClick={logout} type="button">Logout</button> : <Link to="/login">Login</Link>
);

export default Navbar;
