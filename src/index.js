import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import App from './components/App'
import Landing from './components/Landing'
import Signup from './components/auth/Signup'
import Dashboard from './components/Dashboard'

//import redux-thunk and tie it to the createStore call. expanded from just "createStore(reducers, {})"
const store = createStore(
    reducers, 
    //initial state
    {},
    applyMiddleware(reduxThunk)
)

ReactDOM.render(
    //Provider with createStore wraps BrowserRouter, and we pass 'store' prop to the Provider as createStore. expanded to accomodate redux-thunk middleware, pulled it out to a constant defined above.
    //we pass in our reducers and a default {}
    <Provider store={store}>        
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Landing} />
                <Route path="/signup" component={Signup} />
                <Route path="/dashboard" component={Dashboard} />
            </App>
        </BrowserRouter>
    </Provider>
      ,  document.querySelector('#root')
)