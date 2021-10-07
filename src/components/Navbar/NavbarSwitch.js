import React from 'react';
import NavbarLoggedOut from './NavbarLoggedOut';

function NavbarSwitch() {
  return (
    <nav>
      <NavbarLoggedOut />
      <div
        style={{ height: '48px', backgroundColor: 'rgba(0, 180, 249, 0.872)' }}
      ></div>
    </nav>
  );
}

export default NavbarSwitch;
