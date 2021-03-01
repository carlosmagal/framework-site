import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ToDos from './pages/ToDos/index'
import Album from './pages/Albuns/index'
import Posts from './pages/Posts/index'
import Home from './pages/Home/index'

const router = () => {
    return (
        <Switch>
            
            <Route path="/to-dos" component={ToDos}/>
            <Route path="/albuns" component={Album}/>
            <Route path="/posts" component={Posts}/>
            <Route exact path='/' component={Home}/>
            
            <Redirect from ="*" to="/"/>

        </Switch>
    )
}
export default router