import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero container transparent'>
      <div className='row'>
        <div className='col s12 m10'>
          <h4>Save 80% of your cloud storage costs</h4>
          <ul className='left-align browser-default'>
            <li>
              <p>A fifth the cost of Amazon S3</p>
            </li>
            <li>
              <p>Geo-redundant storage </p>
            </li>
            <li>
              <p>Intelligently automated multicloud selection</p>
            </li>
            <li>
              <p>99.99% uptime and 11 9's durability</p>
            </li>
          </ul>
          <Link
            to='/contact'
            className='btn btn-large blue lighten-1 white-text waves-effect waves-light'>
            Contact Sales
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
