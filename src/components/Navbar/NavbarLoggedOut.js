import React from 'react';
// import { withStyles } from '@material-ui/styles';
// import styles from './NavStyles';
import { Link } from 'react-router-dom';
import image from '../../images/intelly_logo.png';

function NavbarLoggedOut(props) {
  // const { classes } = props;

  return (
    <nav
    // className={classes.nav}
    >
      <div
      // className={classes.navLinksRight}
      >
        <Link to='/'>
          <img
            // className={classes.logo}
            src={image}
            alt='Intelly'
          />
        </Link>
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
  );
}

export default NavbarLoggedOut;
