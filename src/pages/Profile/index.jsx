import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

import Schemas from '../../schemas'

import useStyles from './styles'

export default function Profile(props) {

    const classes = useStyles()

    const { loading, error, data } = useQuery(Schemas.USER, {
        variables: {
            login: props.userName,
        }
    })

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error error={error.message} />
    }

    if (data) {
        const { avatarUrl, name, login, bio, followers, following, pinnedItems } = data.user
        return (
            <Grid container>
                <Grid container item xs={4} >
                    <Paper className={classes.boxProfile}>
                        <Avatar alt="profile" src={avatarUrl} className={classes.avatar} />
                        <Typography variant="h5">{name}</Typography>
                        <Typography color="textSecondary">{login}</Typography>
                        <Typography className={classes.textSmall}>{bio || ''}</Typography>
                        <Typography className={classes.textSmall}>{followers.totalCount} followers | {following.totalCount} following</Typography>
                    </Paper>
                </Grid>

                <Grid container direction="row" justify="center" wrap="wrap" item xs={8}>
                    {
                        pinnedItems.nodes.length > 0 ?
                            pinnedItems.nodes.map((repository, index) => (
                                <Card key={index} className={classes.card}>
                                    <CardContent className={classes.spaceCard}>
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
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))
                            :
                            <Paper className={classes.boxProfile}>
                                <Typography variant="h5">Without Pinned Repositories</Typography>
                                <Button variant="contained" color="primary" onClick={() => props.next()} className={classes.button}>View all repositories</Button>
                            </Paper>
                    }
                </Grid>
            </Grid>
        )
    }
}
