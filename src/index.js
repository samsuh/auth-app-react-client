import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
//BrowserRouter looks at url and changes what components are visible.
//the Route components sets up rule between certain route-paths a user can visit and related component to be visible.
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./components/App";
import Landing from "./components/Landing";
import Signup from "./components/auth/Signup";
import Dashboard from "./components/Dashboard";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";
import M from "materialize-css";

document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

//import redux-thunk and tie it to the createStore call. expanded from just "createStore(reducers, {})"
//initial state {}, but changed to set 'authenticated' to the JWT in localStorage if user already signed in
const store = createStore(
  reducers,
  //when application starts up, check to see if we have a stored token, if we do, start redux state with JWT stored to auth.authenticated property
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  //Provider with createStore wraps BrowserRouter, and we pass 'store' prop to the Provider as createStore. expanded to accomodate redux-thunk middleware, pulled it out to a constant defined above.
  //we pass in our reducers and a default {}
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Landing} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/signout' component={Signout} />
        <Route path='/signin' component={Signin} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
