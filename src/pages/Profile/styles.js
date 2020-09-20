import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    boxProfile: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
    },
    avatar: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    textSmall: {
        fontSize: 15,
    },
    card: {
        width: '48.5%',
        height: 140,
        margin: 5
    },
    spaceCard: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textLanguages: {
        fontSize: 15,
        marginRight: 10
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 6,
        marginRight: 3,
    },
    button: {
        backgroundColor: '#1c1c1c',
        fontSize: 12,
        marginTop: 15
    }
})

export default useStyles