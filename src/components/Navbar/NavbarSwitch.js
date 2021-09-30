import React from 'react'; // useState, useEffect, useContext
// import { AuthContext } from '../../context/authContext';
// import Navbar from './Navbar';
import NavbarLoggedOut from './NavbarLoggedOut';
// import AuthService from '../../Services/auth-service';

function NavbarSwitch() {
  // const [authState, setAuthState] = useContext(AuthContext);

  // const handleLogout = () => {
  // AuthService.logout();
  // setAuthState({});
  // };

  // if (authState.first_name) {
  //   return <Navbar handleLogout={handleLogout} />;
  // } else {
  return (
    <>
      <NavbarLoggedOut />
      <div
        style={{ height: '48px', backgroundColor: 'rgba(0, 180, 249, 0.872)' }}
      ></div>
    </>
  );
  // }
}

export default NavbarSwitch;
