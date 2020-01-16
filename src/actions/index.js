import axios from 'axios'
import { AUTH_USER } from './types'

//signup called with received email/password from our form.
//signup is a typical action creator. we call it, and inside it, it's our duty to return an action with type/optional-payload {type:auth_user, payload: 'something'}
//usually we return an action, which gets sent to our middleware, which gets sent to our reducers. reducers produce our new state, which flows back to our components. 
//About Dispatch Function: Action Creator --> dispatch((Action)-->(Middleware)-->(Reducers))
//dispatch belongs to redux. give it an action with 'type' and dispatch will automatically take it through middleware/reducers, and is how we initiate change in redux apps. 

//long form with details. completely equivalent to arrow function
// export const signup = ({email, password}) => {
//     //reduxThunk as middleware allows us to return the object or a different value type from our action creators. instead of an action object, we can choose to return a function. 
//     //if we return a function from action creators, that function will be automatically called with the dispatch function. This allows us to dispatch as many actions as we want from inside the action creator. 
//     return function(dispatch){
//         // dispatch({type:AUTH_USER})
        
//         // //we can do this as many times as we wish since we are returning a function.
//         // dispatch({type:AUTH_USER})
//         // dispatch({type:AUTH_USER})
//         // dispatch({type:AUTH_USER})

//         // //we can return an asynchronous request. 
//         // request.then(() =>{
//         //     dispatch({type: AUTH_USER})
//         // })
//     }
// }

//typical way to see redux-thunk action creators defined. 
//export const, name of action creator 'signup' and arrow function returning another arrow function. 
//all logic around action creator: making request, try to sign up w email/pw, eventually call disaptch with our action happens here

//we will import axios, take email/pw and try to POST to backend API
export const signup = (formProps) => dispatch => {
    axios.post('http://localhost:3090/signup', formProps)
}