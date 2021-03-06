import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import styles from '../Navbar/NavStyles';
import { withStyles } from '@material-ui/styles';

const UserButton = styled(Button)({
  color: 'rgba(0, 180, 249, 0.872)',
  borderColor: 'rgba(0, 180, 249, 0.872)',
  backgroundColor: 'none',
});

function ServiceMenu(props) {
  const { user } = useContext(AuthContext);
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = user;
  const [anchorEl, setAnchorEl] = useState(null);
  const [width, setWidth] = React.useState(window.innerWidth);

  const open = Boolean(anchorEl);

  const { classes } = props;

  const breakpoint = 650;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResizeWindow);
    return () => {
      window.removeEventListener('resize', handleResizeWindow);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title='Account settings'>
          {width > breakpoint ? (
            <>
              <UserButton variant='outlined' onClick={handleClick}>
                Services
              </UserButton>
            </>
          ) : (
            <IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Link className={classes.navLinkItem} to='/invoice-scan'>
            <ListItemIcon>
              <ReceiptIcon fontSize='small' />
            </ListItemIcon>
            Scan an Invoice
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.navLinkItem} to='/intelly-upload'>
            <ListItemIcon>
              <BarChartIcon fontSize='small' />
            </ListItemIcon>
            Upload WFM Sales Data
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className={classes.navLinkItem} to='/venue-upload'>
            <ListItemIcon>
              <StorefrontIcon fontSize='small' />
            </ListItemIcon>
            Upload Event Venues
          </Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}

export default withStyles(styles)(ServiceMenu);
