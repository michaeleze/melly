import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    color: '#D90368',
    fontFamily: '"Montserrat", sans-serif',
  },

  icon: {
    boxSizing: 'border-box',
    color: 'rgba(0,0,0,0.77)',
    fontSize: '2rem',

    '&:hover': {
      color: '#D90368',
    },
  },

  socialMedia: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },

  socialMediaIcon: {
    display: 'inline-flex',
    padding: '.5em 1em',
  },
}));
