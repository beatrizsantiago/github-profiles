import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    bar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        marginBottom: 15,
        height: 60
    },
    tab: {
        height: 60
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 4,
        marginBottom: 4,
        marginRight: 7,
        padding: 5
    },
    link: {
        textDecoration: 'none',
        padding: 10,
        borderRadius: 4,
        fontWeight: 'bold',
        fontSize: 14,
        color: '#1c1c1c',
    }
})

export default useStyles