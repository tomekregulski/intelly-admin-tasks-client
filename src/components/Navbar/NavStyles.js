// eslint-disable-next-line import/no-anonymous-default-export
export default {
  nav: {
    paddingTop: '1rem',
    marginBottom: '.2rem',
  },
  desktopNavContainer: {
    display: 'flex',
  },
  logo: {
    width: '130px',
    margin: '0 auto',
    display: 'block',
  },
  navLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  navLinkItem: {
    textDecoration: 'none',
    color: 'black',
    '&:visited': {
      color: 'black',
    },
    '&:hover': {
      color: 'white',
      textShadow: '0.2rem 0.2rem 10px black',
    },
  },
  '@media screen and (min-width: 360px)': {},
  '@media screen and (min-width: 411px)': {
    nav: {
      maxWidth: '750px',
      margin: '0 auto',
    },
    logo: {
      width: '10rem',
    },
  },
  '@media screen and (min-width: 768px)': {},
  '@media screen and (min-width: 1200px)': {
    nav: {
      maxWidth: 'none',
      padding: '20px',
    },
  },
  '@media screen and (min-width: 1550px)': {},
  '@media screen and (min-width: 1920px)': {},
};