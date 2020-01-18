import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  //helper method to conditionally render links that show up in navbar
  renderLinks() {
    //check if user is signedin. show Signed-In-User-Links that are relevant
    if (this.props.authenticated) {
      return (
        <ul className='alight-right hide-on-medium-and-down'>
          <li>
            <Link to='/signout' className='sidenav-close'>
              Sign Out
            </Link>
          </li>
          <li>
            <Link to='/dashboard' className='sidenav-close'>
              Dashboard
            </Link>
          </li>
        </ul>
      );
    } else {
      //if user is not authenticated, allow them to signup/signin.
      //add 'contact sales' and 'support'(documentation) when available here.
      return (
        <ul className='align-right valign-wrapper hide-on-medium-and-down'>
          <li>
            <Link to='/signin' className='sidenav-close'>
              Sign In
            </Link>
          </li>
          <li>
            <Link to='signup' className='sidenav-close'>
              <button className='right waves-effect waves-light btn blue lighten-1'>
                Try or Buy Now
              </button>
            </Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      //make the height and font-size smaller for the extended portion of the navbar.
      <div>
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
            <div className='right'>{this.renderLinks()}</div>
          </div>
        </nav>
        <div className='sidenav blue darken-4' id='mobile-demo'>
          <ul>
            <li>
              <Link to='/' className='sidenav-close'>
                Archon
              </Link>
            </li>
          </ul>
          {this.renderLinks()}
        </div>
      </div>
    );
  }
}

//Header component checks if user is authenticated. define mapStateToProps which takes state object and returns the 'authenticated' piece of state
function mapStateToProps(state) {
  console.log(state);
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
