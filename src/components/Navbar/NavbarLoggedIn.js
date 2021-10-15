import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

import image from '../../images/intelly_logo.png';

import Button from '@mui/material/Button';

const NavbarLoggedIn = (props) => {
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;

  const [query, setQuery] = useState({});

  const { handleLogout } = props;

  useEffect(() => {
    if (Object.keys(userData).length) {
      setQuery({
        email: userData.email,
        password: userData.password,
      });
    }
  }, [userData]);

  return (
    <>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a
          href={`https://gallant-wing-415919.netlify.app/?${query.email}&${query.password}`}
        >
          <img
            style={{ width: '10rem', margin: '.5rem 0 .5rem 0' }}
            src={image}
            alt='Intelly'
          />
        </a>
        <div>
          <Button
            variant='outlined'
            style={{ marginBottom: '10px' }}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </div>
        <div
        // className={classes.navLinksLeft}
        >
          <Link style={{ marginRight: '15px' }} to='/invoice-scan'>
            Invoice Scan
          </Link>
          <Link to='/intelly-upload'>Intelly Upload</Link>
        </div>
      </nav>
      <div
        style={{ height: '48px', backgroundColor: 'rgba(0, 180, 249, 0.872)' }}
      ></div>
    </>
  );
};

export default NavbarLoggedIn;
