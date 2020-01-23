//eventually combineReducers goes here
//for now we only need one reducer to handle auth. itll have two properties; authenticated and error.
//assign JWT to 'authenticated' if JWT assigned, assume signed in. if empty, not-authenticated.
//'error' gets handled on backend, and failed sign up/sign in should be shown to user. carried in 'error' property.

// this file in reducers/index.js gets exported to the project-root's index.js and connected to the redux 'createStore'
import { combineReducers } from "redux";

//setting up reduxForm inside of redux, and can now go to ../components/auth/Signup.js to submit a form.
//helper from redux-form is called 'reducer' but that gets confusing so renaming the import as formReducer
import { reducer as formReducer } from "redux-form";

import auth from "./auth";

export default combineReducers({
  //format for below reads as "this-piece-of-state: is-being-manufactured-by-the-reducer"
  auth: auth,
  form: formReducer
});
