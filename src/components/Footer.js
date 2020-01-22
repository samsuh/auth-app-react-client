import React, { Component } from "react";
import "../styles/main.css";

class Footer extends Component {
  render() {
    return (
      <div className='page-footer blue darken-4'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Archon Cloud Storage</h5>
              <p className='grey-text text-lighten-4'>
                Harness the potential of cloud storage.
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>About</h5>
              <ul>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    What is Archon?
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Cloud Latency vs Cost
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a className='grey-text text-lighten-3' href='#!'>
                    Frictionless migration
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>
            © 2020 Copyright Archon
            <a
              className='grey-text text-lighten-4 right'
              href='https://t.me/ArchonCloud'>
              Join Archon Telegram
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
