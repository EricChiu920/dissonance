import React from 'react';
import NavbarIconsContainer from './NavbarIconsContainer';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* img from discordapp */}
      <div className="navbar-links">
        <img src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg" alt="discord logo in white" />
        {/* font generated by fontmeme */}
        {/* <img src="https://fontmeme.com/permalink/190801/902642eac20f7d3ebc1ebb1f7f07c5db.png" alt="discord-logo-font" /> */}
        <NavbarLinks />
      </div>
      <NavbarIconsContainer />
    </nav>
  );
};

export default Navbar;
