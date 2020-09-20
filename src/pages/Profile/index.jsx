import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'
import { Grid, Card, CardContent, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Schemas from '../../schemas'

export default function Profile() {

    const [userName, setUserName] = useState('beatrizsantiago')

    const classes = useStyles()
    const { userparam } = useParams()

    useEffect(() => {
        setUserName(userparam)
    }, [userparam])

    const { loading, error, data } = useQuery(Schemas.USER, {
        variables: {
            login: userName,
        }
    })

    if (loading) {
        return (
            <Grid container alignItems="center" justify="center">
                <Typography variant="h5">Carregando</Typography>
            </Grid>
        )
    }

    if (error) {
        return <p>Error! {error.message}</p>
    }

    if (data) {
        const { avatarUrl, name, login, bio, followers, following, pinnedItems } = data.user
        return (
            <Grid container>
                <Grid container direction="column" alignItems="center" justify="center" item xs={4}>
                    <Avatar alt="profile" src={avatarUrl} className={classes.avatar} />
                    <Typography variant="h5">{name}</Typography>
                    <Typography color="textSecondary">{login}</Typography>
                    <Typography className={classes.textSmall}>{bio || ''}</Typography>
                    <Typography className={classes.textSmall}>{followers.totalCount} followers</Typography>
                    <Typography className={classes.textSmall}>{following.totalCount} following</Typography>
                </Grid>

                <Grid container direction="row" justify="center" wrap="wrap" item xs={8}>
                    {
                        pinnedItems.nodes.length > 0 ?
                            pinnedItems.nodes.map((repository, index) => (
                                <Card key={index} className={classes.card}>
                                    <CardContent className={classes.spaceCard}>
                                        <Typography variant="h6">{repository.name}</Typography>
                                        <Typography color="textSecondary" className={classes.textSmall}>{repository.description || ''}</Typography>
                                        <Grid container direction="row" justify="flex-start">
                                            {
                                                repository.languages.nodes.map((language, index) => (
                                                    <Grid key={index} className={classes.row}>
                                                        <div className={classes.circle} style={{ backgroundColor: language.color }} />
                                                        <Typography className={classes.textLanguages}>{language.name}</Typography>
                                                    </Grid>

                                                ))
                                            }
                                        </Grid>
                                    </CardContent>
                                </Card>
                            ))
                            : null
                    }
                </Grid>
            </Grid>
        )
    }
}

const useStyles = makeStyles({
    avatar: {
        width: 200,
        height: 200
    },
    textSmall: {
        fontSize: 15,
    },
    card: {
        width: '48%',
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
})
