import React from "react";

const About = () => {
  return (
    <section className='section section-about grey lighten-4'>
      <div className='container'>
        <div className='div row valign-wrapper'>
          <div className='col s12 m6'>
            <h4>
              <span className='blue-text text-darken-3'>
                Archon Cloud is the BEST
              </span>{" "}
              Intelligent Cloud
            </h4>
            <p className='flow-text'>
              Our multicloud selection process is automated by machine learning.
              Connect using our S3-compliant interface and we'll automatically
              store the data in an optimized way across multiple providers.
            </p>
          </div>
          <div className='col s12 m6'>
            <img
              src={require("../../img/tech.jpg")}
              alt=''
              className='materialboxed responsive-img'
              data-caption='Archon is awesome'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
