import { makeStyles } from '@material-ui/core/styles';
// import { StylesContext } from '@material-ui/styles';

const styles = makeStyles((theme)=> ({
    container: {
        padding: "1% 3%",
        width: "100%",
        margin: 0
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '45vh',
        padding: '10%',
        borderRadius: 10,
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    h5:{
        fontSize: '0.98rem'
    },
    h6: {
        fontSize: '0.9rem'
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
    }

}));
export default styles;