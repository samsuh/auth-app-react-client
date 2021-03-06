import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className='section section-contact grey lighten-4'>
      <div className='row valign-wrapper container' id='contact'>
        <div className='col s12 m6'>
          <h6 className='blue-text'>CONTACT SALES</h6>
          <h5 className='flow-text'>
            What if you could store ALL of your data in the cloud affordably?
          </h5>
          <p className='flow-text'>
            <span className='text-darken-3'>Now you can! </span>
            Archon is here to guide you through your migration to the enterprise
            cloud and to work with you to determine which cloud storage strategy
            is right for your organization.
          </p>
        </div>
        <div className='col s12 m6 center-align'>
          <div className='card-panel grey lighten-3'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
