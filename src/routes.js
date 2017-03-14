import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Notifications from './containers/Notifications'
import Configuration from './containers/Configuration'
import BoardModule from './containers/BoardModule'

export default <Route path="/" component={App}>
    <Route path="/dashboard" component={Dashboard}>
        <Route path="/dashboard/:moduleName" component={BoardModule}/>
    </Route>
    <Route path="/notification" component={Notifications}/>
    <Route path="/configuration" component={Configuration}/>
    <IndexRoute component={Dashboard}/>    
</Route>
