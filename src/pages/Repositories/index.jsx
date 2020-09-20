import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'

import StarIcon from '@material-ui/icons/StarBorderOutlined'
import VisibilityIcon from '@material-ui/icons/VisibilityOutlined'
import CallSplitIcon from '@material-ui/icons/CallSplit'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

import Schemas from '../../schemas'

import useStyles from './styles'

export default function Repositories(props) {
    const classes = useStyles()

    const { loading, error, data } = useQuery(Schemas.REPOSITORIES_USER, {
        variables: {
            login: props.userName
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error error={error.message} />
    }

    if (data) {
        const { repositories } = data.user
        return (
            <Grid container direction="column" alignItems="center">
                {
                    repositories.nodes.map((repository, index) => (
                        <Card key={index} className={classes.card}>
                            <CardContent className={classes.row}>
                                <Box className={classes.bigBox}>
                                    <Typography variant="h6">{repository.name}</Typography>
                                    <Typography color="textSecondary" className={classes.textSmall}>{repository.description || ''}</Typography>
                                    <Box className={classes.row}>
                                        {
                                            repository.languages.nodes.map((language, index) => (
                                                <Box key={index} className={classes.row}>
                                                    <div className={classes.circle} style={{ backgroundColor: language.color }} />
                                                    <Typography className={classes.textLanguages}>{language.name}</Typography>
                                                </Box>

                                            ))
                                        }
                                        <Typography color="textSecondary" className={classes.textSmall}>Updated {moment(repository.updatedAt).fromNow()}</Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography className={classes.textIcon}><StarIcon className={classes.icon} /> {repository.stargazers.totalCount}</Typography>
                                    <Typography className={classes.textIcon}><VisibilityIcon className={classes.icon} /> {repository.watchers.totalCount}</Typography>
                                    <Typography className={classes.textIcon}><CallSplitIcon className={classes.icon} /> {repository.forkCount}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    ))
                }
            </Grid>
        )
    }
}