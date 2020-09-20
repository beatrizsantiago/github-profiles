import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    row: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textSmall: {
        fontSize: 15,
    },
    card: {
        width: '99%',
        height: 140,
        marginBottom: 10
    },
    bigBox: {
        flex: 1,
        height: 110,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
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
    icon: {
        fontSize: 16,
        marginRight: 5
    },
    textIcon: {
        fontSize: 16,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    }
})

export default useStyles