//watch for AUTH_USER type from actions/index.js from within signup function's dispatch function. 
//We are trying to update 'authenticated' property in INITIAL_STATE. redux doesnt know about signingup/getting token. it just cares if 'authenticated' is updated.
//watch for AUTH_ERROR in case 'signup' has an error, so we can use it to display the error to user on front-end.
import {AUTH_USER, AUTH_ERROR} from '../actions/types'

//default value is {}, by default it would be undefined. 
const INITIAL_STATE = {
    authenticated: '',
    errorMessage: ''
}

//REDUCERS defined here in the switch statement. this function gets imported into reducers/index.js file, wired up to combineReducers, then hook up to reduxStore in the project-root's index.js
export default function(state= INITIAL_STATE, action){
    //temporary return since we dont have any action creators or types.
    // return state

    //switch statement to handle different actions. look at our 'action.type' and use relevant 'case'
    switch (action.type){
        case AUTH_USER:
            //if the type of action is AUTH_USER, return all properties inside 'state' along with 'authenticated' 
            //'authenticated' is the JWT we put on "payload: response.data.token" property from actions/index.js inside signup's dispatch's 'payload'
            return {...state, authenticated: action.payload}

        case AUTH_ERROR: 
            //return state object with errorMessage property of 'action.payload, and display on Signup.js component. 
            return{...state, errorMessage: action.payload}

        default: 
            return state
    }

}