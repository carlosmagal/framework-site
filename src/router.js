import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ToDos from './pages/ToDos/index'
import Album from './pages/Albuns/index'
import Posts from './pages/Posts/index'

const router = () => {
    return (
        <Switch>
            
            <Route path="/to-dos" component={ToDos}/>
            <Route path="/albuns" component={Album}/>
            <Route path="/posts" component={Posts}/>
            
            <Redirect from ="*" to="/"/>

        </Switch>
    )
}
export default router