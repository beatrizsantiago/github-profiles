import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Profile from './pages/Profile'

export default function MainRoutes() {
    return (
        <Switch>
            <Route path="/:user_name" exact component={Profile} />
        </Switch>
    )
}
