import React, { Component } from "react";
//to use reduxForm, first add it to component export statement, tell it about the different field names, and use Field inside component itself.
import { reduxForm, Field } from "redux-form";
//wire up action creator to Signup component.
import { connect } from "react-redux";
import * as actions from "../../actions";
import { compose } from "redux";

//Pretty much same as Signup.js with references removed.
class ContactForm extends Component {
  onSubmit = formProps => {
    this.props.contactForm(formProps, () => {
      this.props.history.push("/dashboard");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field name='email' type='text' component='input' />
        </fieldset>
        <fieldset>
          <label>Message</label>
          <Field name='message' type='text' component='input' />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button className='btn'>Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  //form name is 'contactForm'
  reduxForm({ form: "contactForm" })
)(ContactForm);
