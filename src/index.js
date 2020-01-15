import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers'
import App from './components/App'
import Landing from './components/Landing'
import Signup from './components/auth/Signup'

ReactDOM.render(
    //Provider and createStore wrap BrowserRouter, and we pass 'store' prop to the Provider as createStore
    //we pass in our reducers and a default {}
    <Provider store={createStore(reducers, {})}>        
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Landing} />
                <Route path="/signup" exact component={Signup} />
            </App>
        </BrowserRouter>
    </Provider>
      ,  document.querySelector('#root')
)