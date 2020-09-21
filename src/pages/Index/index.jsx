import React, { useState } from 'react'
import { Link } from "react-router-dom"

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'

import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded'

import useStyles from './styles'

export default function Home() {

    const [searchUser, setSearchUser] = useState('')

    const classes = useStyles()

    return (
        <Grid container direction="column" justify="center" alignItems="center" className={classes.container}>
            <Typography variant="h3">Welcome! <SentimentVerySatisfiedRoundedIcon className={classes.icon} /></Typography>
            <Typography variant="h5">Enter a github profile name</Typography>
            <Box className={classes.box}>
                <TextField variant="outlined" value={searchUser} onChange={text => setSearchUser(text.target.value)} className={classes.field} />
                <Link to={`/${searchUser}`} className={classes.link}>Buscar</Link>
            </Box>
        </Grid>
    )
}