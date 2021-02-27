import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ToDos from './pages/ToDos/index'

const router = () => {
    return (
        <Switch>
            
            <Route path="/to-dos" component={ToDos}/>
            
            <Redirect from ="*" to="/"/>


        </Switch>
    )
}
export default router