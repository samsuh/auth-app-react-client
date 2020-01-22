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
      <div className='container page-padding'>
        <div className='row'>
          <div className='col s12 m6'>
            <h4 className='blue-text'>Welcome Back</h4>
          </div>
          <div className='col s12 m6'>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <div className='input-field'>
                <label>Email</label>
                <Field name='email' type='text' component='input' />
              </div>
              <div className='input-field'>
                <label>Password</label>
                <Field name='password' type='password' component='input' />
              </div>
              <div>{this.props.errorMessage}</div>
              <button className='btn right'>Sign In!</button>
            </form>
          </div>
        </div>
      </div>
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
