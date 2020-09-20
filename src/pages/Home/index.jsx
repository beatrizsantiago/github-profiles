import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'

import Profile from '../Profile'
import Repositories from '../Repositories'

import useStyles from './styles'

export default function Home() {

    const [value, setValue] = useState(0)
    const [searchUser, setSearchUser] = useState('')

    const { userparam } = useParams()

    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container direction="column">
            <AppBar position="static" className={classes.bar}>
                <Tabs value={value} onChange={handleChange} centered >
                    <Tab label="Overview" className={classes.tab} />
                    <Tab label="Repositories" className={classes.tab} />
                </Tabs>
                <Box className={classes.box}>
                    <TextField variant="outlined" size="small" value={searchUser} onChange={text => setSearchUser(text.target.value)} />
                    <Link to={`/${searchUser}`} className={classes.link}>Buscar</Link>
                </Box>
            </AppBar>
            {
                value === 0 ?
                    <Profile userName={userparam} next={() => setValue(1)} />
                    :
                    <Repositories userName={userparam} />
            }
        </Grid>
    )
}