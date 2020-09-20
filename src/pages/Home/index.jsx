import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Profile from '../Profile'
import Repositories from '../Repositories'

import useStyles from './styles'

export default function Home() {

    const [value, setValue] = useState(0)

    const { userparam } = useParams()

    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Grid container direction="column">
            <AppBar position="static" className={classes.bar}>
                <Tabs value={value} onChange={handleChange} centered >
                    <Tab label="Overview" />
                    <Tab label="Repositories" />
                </Tabs>
            </AppBar>
            {
                value === 0 ?
                    <Profile userName={userparam} />
                    :
                    <Repositories userName={userparam} />
            }
        </Grid>
    )
}