import React, { Component } from "react";
//to use reduxForm, first add it to component export statement, tell it about the different field names, and use Field inside component itself.
import { reduxForm, Field } from "redux-form";
//wire up action creator to Signup component.
import { connect } from "react-redux";
import * as actions from "../../actions";
import { compose } from "redux";

//Pretty much same as Signup.js with references removed.
class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className='container'>
        <fieldset>
          <label>Email</label>
          <Field name='email' type='text' component='input' />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field name='password' type='password' component='input' />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  //form name is 'signin'
  reduxForm({ form: "signin" })
)(Signin);
