import React from "react";

const Devs = () => {
  return (
    <section className='section section-devs grey white-text'>
      <div className='row container' id='dev-content'>
        <div className='col s12 m6 center-align'>
          <img
            src={require("../../img/multicloud-graphic.png")}
            className='responsive-img'
            alt='Multicloud Graphic'
          />
        </div>
        <div className='col s12 m6'>
          <h5 className='blue-text text-darken-4 bold'>
            Archon Powered Businesses
          </h5>
          <h5 className='flow-text'>
            You're not just choosing your cloud. You're deciding the future of
            your business. Take control of your future.
          </h5>
          <p>
            Data powered by Archon Cloud is data free from vendor lock-ins.
            Archon empowers your enterprise technology stack with choice. Our
            intelligent selection algorithm will automate your cloud choice to
            fit your requirements. Just give us the specs, and we can reduce the
            cost of your storage by 80%, optimize your transfer speeds, improve
            data redundancy, or distribute your data across cloud providers --
            all under the hood. All you see is a simple, straightforward storage
            API. For many companies, migrating their data to the cloud is a
            consuming process, but with Archon, it's also an empowering process.
            Move faster, reduce your TCO, operate leaner -- all without the
            worry of locking in to any one vendor.
          </p>
          <p>
            <span className='text-darken-3'>
              Archon Cloud gives you back control of your future.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Devs;
