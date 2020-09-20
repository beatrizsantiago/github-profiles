import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Profile from './pages/Profile'

export default function MainRoutes() {
    return (
        <Switch>
            <Route path="/:userparam" exact component={Profile} />
        </Switch>
    )
}
