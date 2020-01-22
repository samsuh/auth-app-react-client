import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  //helper method to conditionally render links that show up in navbar
  renderLinks() {
    //check if user is signedin. show Signed-In-User-Links that are relevant
    if (this.props.authenticated) {
      return (
        <div>
          <ul>
            <li>
              <Link to='/signout'>Sign Out</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
        </div>
      );
    } else {
      //if user is not authenticated, allow them to signup/signin.
      //add 'contact sales' and 'support'(documentation) when available here.
      return (
        <div>
          <ul className='valign-wrapper'>
            <li>
              <Link to='/signin'>Sign In</Link>
            </li>
            <li>
              <Link to='signup'>
                <button className='right waves-effect waves-light btn blue lighten-1'>
                  Try or Buy Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  //Styling fixes for sidenav make it easier to customize separately.
  renderSideNavLinks() {
    //check if user is signedin. show Signed-In-User-Links that are relevant
    if (this.props.authenticated) {
      return (
        <div>
          <ul className='row'>
            <li className='col s12'>
              <Link to='/signout' className='sidenav-close right'>
                Sign Out
              </Link>
            </li>
            <li className='col s12'>
              <Link to='/dashboard' className='sidenav-close right'>
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      );
    } else {
      //if user is not authenticated, allow them to signup/signin.
      //add 'contact sales' and 'support'(documentation) when available here.
      return (
        <div>
          <ul className='row'>
            <li className='col s12'>
              <Link to='/signin' className='sidenav-close right'>
                Sign In
              </Link>
            </li>
            <li className='col s12'>
              <Link to='signup' className='sidenav-close right'>
                <button className='right waves-effect waves-light btn blue lighten-1'>
                  Try or Buy Now
                </button>
              </Link>
            </li>
          </ul>
        </div>
      );
    }
  }

  render() {
    return (
      //make the height and font-size smaller for the extended portion of the navbar.
      <div>
        <div className='navbar-fixed'>
          <nav className='blue darken-4'>
            <div className='nav-wrapper container'>
              <Link to='/' className='left brand-logo'>
                Archon
              </Link>
              <a
                href='/'
                data-target='mobile-demo'
                className='sidenav-trigger right show-on-small'>
                <i className='material-icons'>menu</i>
              </a>
              <div className='right hide-on-med-and-down align-right'>
                {this.renderLinks()}
              </div>
            </div>
          </nav>
        </div>
        <div
          className='sidenav blue darken-4 container center-align'
          id='mobile-demo'>
          <Link to='/' className='sidenav-close brand-logo'>
            Archon Home
          </Link>

          {this.renderSideNavLinks()}
        </div>
      </div>
    );
  }
}

//Header component checks if user is authenticated. define mapStateToProps which takes state object and returns the 'authenticated' piece of state
function mapStateToProps(state) {
  console.log("(remove this for production. state is: ", state);
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
