import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    formControl: {
        margin: '20px', 
        minWidth: 220, 
        marginBottom: '30px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    loading: {
        height: '600px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    container: {
        padding: '10px',
    },
    marginBottom: {
        marginBottom: '30px',
    },
    list: {
        height: '75vh', 
        overflow: 'auto',
    },
}));