import React, { Component } from "react";
//to use reduxForm, first add it to component export statement, tell it about the different field names, and use Field inside component itself.
import { reduxForm, Field } from "redux-form";
//wire up action creator to Signup component.
import { connect } from "react-redux";
import * as actions from "../../actions";
import { compose } from "redux";
//withRouter needed for redirect after callback invoked.
import { withRouter } from "react-router";

//Pretty much same as Signup.js with references removed.
class ContactForm extends Component {
  onSubmit = formProps => {
    this.props.submitContact(formProps, () => {
      this.props.history.push("/successfullysubmittedform");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div className='input-field'>
          <label htmlFor='contact-name'>Your name</label>
          <Field name='name' type='text' component='input' id='contact-name' />
        </div>
        <div className='input-field'>
          <label htmlFor='contact-email'>Email</label>
          <Field
            name='email'
            type='text'
            component='input'
            id='contact-email'
          />
        </div>
        <div className='input-field'>
          <label htmlFor='textarea1'>Describe your data storage needs</label>
          <Field
            id='textarea1'
            name='message'
            component='textarea'
            className='materialize-textarea'
          />
        </div>

        <div>{this.props.errorMessage}</div>
        <button className='btn'>Send</button>
      </form>
    );
  }
}

export default compose(
  connect(null, actions),
  //form name is 'contactForm'
  reduxForm({ form: "contactForm" })
)(withRouter(ContactForm));
