import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './components/App'
import Landing from './components/Landing'
import Signup from './components/auth/Signup'

ReactDOM.render(
    <BrowserRouter>
        <App>
<Route path="/" exact component={Landing} />
<Route path="/signup" exact component={Signup} />

        </App>
    </BrowserRouter>
      ,  document.querySelector('#root')
)