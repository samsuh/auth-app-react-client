//eventually combineReducers goes here 
//for now we only need one reducer to handle auth. itll have two properties; authenticated and error. 
//assign JWT to 'authenticated' if JWT assigned, assume signed in. if empty, not-authenticated.
//'error' gets handled on backend, and failed sign up/sign in should be shown to user. carried in 'error' property.

import {combineReducers} from 'redux'
import auth from './auth'

export default combineReducers({
    auth:auth
})