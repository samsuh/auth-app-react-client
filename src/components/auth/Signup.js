import React, { Component } from "react";
//to use reduxForm, first add it to component export statement, tell it about the different field names, and use Field inside component itself.
import { reduxForm, Field } from "redux-form";
//wire up action creator to Signup component.
import { connect } from "react-redux";
import * as actions from "../../actions";
import { compose } from "redux";

class Signup extends Component {
  //onSubmit function receives object with email/pw/company/jobTitle as 'formProps'
  //when we use reduxForm, we get a function called HandleSubmit that we have to call to make sure to take it out of the form and pass it to the onSubmit callback.
  onSubmit = formProps => {
    // console.log(formProps)
    //call the signup action creator from ../../actions/index.js that's available inside our component.
    // this.props.signup(formProps)

    //as a second argument to the signup action creator, pass callback after user successfully signs up that redirects to protected Dashboard route
    //utilize 'history' prop from 'react-router'
    this.props.signup(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    //destructure handleSubmit from redux-form from props object.
    const { handleSubmit } = this.props;
    return (
      <div className='container page-padding page-signup'>
        <div className='row'>
          <div className='col s12 m6'>
            <h4 className='blue-text'>Start 30 day FREE TRIAL</h4>
            <h5 className='flow-text'>
              Are you ready to store ALL of your data in the cloud affordably?
            </h5>
            <p className='flow-text text-darken-3'>Now you can!</p>
            <ul>
              <li>
                <i className='material-icons blue-text text-darken-3'>check</i>
                Get full access to Wasabi free for 30 days.
              </li>
              <li>
                <i className='material-icons blue-text text-darken-3'>check</i>
                Store up to 1 terabyte.
              </li>
              <li>
                <i className='material-icons blue-text text-darken-3'>check</i>
                No credit card required.
              </li>
              <li>
                <i className='material-icons blue-text text-darken-3'>check</i>
                No auto-charge after the trial ends.
              </li>
            </ul>
          </div>
          <div className='col s12 m6 center-align'>
            <div className='card-panel grey lighten-4'>
              <form
                onSubmit={handleSubmit(this.onSubmit)}
                className='container'>
                <div className='input-field'>
                  <label>Email*</label>
                  <Field name='email' type='text' component='input' />
                </div>
                <div className='input-field'>
                  <label>Password*</label>
                  <Field name='password' type='password' component='input' />
                </div>
                <div className='input-field'>
                  <label>Company</label>
                  <Field name='company' type='text' component='input' />
                </div>
                <div className='input-field'>
                  <label>Job Title</label>
                  <Field name='jobTitle' type='text' component='input' />
                </div>
                <div>{this.props.errorMessage}</div>
                <button className='btn'>Sign Up!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//reduxForm syntax is similar to connect()
//have to provide an options object, and give it a name for the form we're creating.
//once that's done we can create the two input Fields
//we need to wire up reduxForm along with the connect() helper. will look messy, so we use 'compose' helper function from redux to make these HOCs more readable.
//without compose, need to add connect(). export default reduxForm({ form: 'signup' })(Signup)

//pull errorMessage piece of state into this component to display error to user. receives state object returns errorMessage from state.auth.errorMessage
//'auth' here is the auth reducer
function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  //apply action creators to Singup component. null because there are no pieces of state we want to pass in, and pass in the actions object
  // connect(null, actions),
  //changed null to mapStateToProps because we now might have an errorMessage to display to users upon 'signup'
  connect(mapStateToProps, actions),
  reduxForm({ form: "signup" })
)(Signup);
