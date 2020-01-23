import axios from "axios";
import { AUTH_USER, AUTH_ERROR, SUBMIT_CONTACT, CONTACT_ERROR } from "./types";

//ACTION CREATORS are in this file: signup, signout, signin
//More action creators to add later: contact-us-form-submission (SUBMIT_CONTACT), get-buckets, get-files

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
// export const signup = (formProps) => dispatch => {
//     axios.post('http://localhost:3090/signup', formProps)
// }

//mark async/await, and store in a const called "response"
//"response" contains the JWT received from a successful signup
// export const signup = (formProps) => async dispatch => {

//record that we are getting a second prop named 'callback'. inside 'try', after we get back 'response', after we dispatch an action saying user signed in, call callback.
export const signup = (formProps, callback) => async dispatch => {
  //try block catches errors from signup process so we can use it to display to users on the front-end form
  try {
    const response = await axios.post(
      "http://localhost:3090/signup",
      formProps
    );

    //call dispatch, passing it action{type:AUTH_USER, payload:"response containing JWT on the 'token' property"} and reducers.
    //once this happens, watch for a type: AUTH_USER from somewhere in 'reducers' that will use the payload containing JWT
    dispatch({ type: AUTH_USER, payload: response.data.token });

    //set user's JWT into localStorage to persist login.
    //can use src/index.js initial state inside createStore to get starting state into redux store.
    //pass it 'auth: {authenticated: localStorage.getItem('token')} as initial state if there's a JWT in localStorage.
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    //dispatch an action of AUTH_ERROR with error payload.
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
  //once user successfully signs up, we have to redirect them to the Dashboard page of our application. done in Signup.js component's button onSubmit.
};

//signout action creator
export const signout = () => {
  //remove the JWT from browser's localStorage
  localStorage.removeItem("token");

  //return action with same 'type' as signup, just passing {payload: ''} to clear the 'authenticated' piece of state in auth reducer.
  return {
    type: AUTH_USER,
    payload: ""
  };
};

//copied from Signup action creator from above.
export const signin = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post(
      "http://localhost:3090/signin",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: "Invalid login credentials. Try again."
    });
  }
};

//contact-us form. not yet set up on server-side.
export const submitContact = (formProps, callback) => async dispatch => {
  try {
    const response = axios.post(
      "http://localhost:3090/submitContact",
      formProps
    );
    dispatch({ type: SUBMIT_CONTACT, payload: response });
    callback();
  } catch (e) {
    dispatch({
      type: CONTACT_ERROR,
      payload:
        "Could not reach Contact. Please email us at support@archon.cloud"
    });
  }
};
