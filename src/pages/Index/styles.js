import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        height: '100vh'
    },
    field: {
        width: '40%',
    },
    link: {
        textDecoration: 'none',
        backgroundColor: '#1c1c1c',
        color: '#fff',
        padding: 20,
        borderRadius: 4,
        marginLeft: 5
    },
    box: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    icon: {
        fontSize: 35
    }
})

export default useStyles