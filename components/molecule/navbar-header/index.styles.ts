import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'row',
    },

    container: {
        position: 'fixed',
        top: 0,
        padding: '1vw 0',
        width: '100%',
        zIndex: 3,

        [theme.breakpoints.down('sm')]: {
            backdropFilter: 'saturate(147%) blur(20px)',
            transition: 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
            transitionProperty: 'background-color, backdrop-filter',
            backgroundColor: 'rgba(0,0,0,.1)',

        },
    },

    button: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        padding: 0,
        transition: 'all 1s ease',
        outline: 'none',
    },

    hamburger: {
        padding: '15px',
        transition: 'all 1s ease',

        '&:hover': {
            borderRadius: '6px',
        },
    },

    lineOpen: {
        background: '#fff',
        borderRadius: '6px',
        width: '30px',
        height: '3px',
        transition: 'all 1s ease',

        '&:nth-child(even)': {
            margin: '10px 0 0 0',
        },


        [theme.breakpoints.down('sm')]: {
            background: '#fff',
        },
    },

    lineCross: {
        background: 'rgba(0,0,0,.6)',
        borderRadius: '6px',
        width: '30px',
        height: '3px',

        '&:nth-child(even)': {
            transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
            transform: 'rotate(-45deg)',
        },
        '&:nth-child(odd)': {
            position: 'relative',
            top: '3px',
            transition: 'all cubic-bezier(.2,.4,.9,.56) .4s',
            transform: 'rotate(45deg)',
        },
    },

    text: {
        textDecoration: 'none',
        borderRadius: '5px',
        padding: '.4rem',
        boxSizing: 'border-box',
        background: '#D90368',
        color: '#fff',

        '&:hover': {
            cursor: 'pointer',
        },

        [theme.breakpoints.down('sm')]: {
            color: '#fff',
        },
    },

    menu: {
        color: '#fff',
        padding: '13px  0',
        fontWeight: 400,
        fontSize: '1.3em',
        fontFamily: '"Montserrat", sans-serif',
        textTransform: 'uppercase',

        [theme.breakpoints.down('sm')]: {
            color: '#fff',
        },
    },

    title: {
        flexGrow: 1,
        padding: '15px',
        fontFamily: '"Montserrat", sans-serif',

        [theme.breakpoints.down('sm')]: {
            color: '#fff',
        },
    },

    whiteBackground: {
        transition: 'background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1)',
        transitionProperty: 'background-color',
        backgroundColor: 'white',
        borderBottom: '1px solid #E8E8E8'
    },
}));
