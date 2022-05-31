import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    title: {
        fontFamily: 'courier-new',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: 'auto' },
    },
    searchIcon: {
        color: 'yellow', 
        padding: theme.spacing(0, 2), 
        height: '100%', 
        alignItems: 'center', 
        pointerEvents: 'none', 
        display: 'flex', 
        justifyContent: 'center',
    },
    inputRoot: {
        fontFamily: 'courier-new',
        color: 'white',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0), 
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`, 
        transition: theme.transitions.create('width'), 
        width: '100%', [theme.breakpoints.up('md')]: { width: '20ch' },
    },
    toolbar: {
        fontFamily: 'courier-new',
        color: 'yellow',
        display: 'flex', 
        justifyContent: 'space-between',
    },
    }));    