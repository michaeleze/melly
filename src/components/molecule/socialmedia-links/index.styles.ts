import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: 'rgba(34,26,45,0.8)',
    fontSize: '2em',
    textDecoration: 'none',
    transition: 'all 1s ease',

    '&:hover': {
      color: '#FC173E',
    },
    '@media (max-width: 978px)': {
      fontSize: '2.2rem',
      margin: '0 .7em',
    },
  },

  socialMedia: {
    margin: 0,
    padding: 0,
    textAlign: 'left',
  },

  socialMediaIcon: {
    display: 'inline-block',
    padding: '.5em 1em',
  },
}));
