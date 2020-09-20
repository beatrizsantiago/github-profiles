import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Index from './pages/Index'
import Home from './pages/Home'

export default function MainRoutes() {
    return (
        <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/:userparam" exact component={Home} />
        </Switch>
    )
}
