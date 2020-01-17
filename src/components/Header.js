import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends Component {
  //helper method to conditionally render links that show up in navbar
  renderLinks() {
    //check if user is signedin. show Signed-In-User-Links that are relevant
    if (this.props.authenticated) {
      return (
        <ul className='right'>
          <li>
            <Link to='/signout'>Sign Out</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      );
    } else {
      //if user is not authenticated, allow them to signup/signin.
      return (
        <ul className='right'>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/signin'>Sign In</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='left brand-logo'>
            Archon
          </Link>
          {/* Now being conditionally rendered and passed in as {this.renderLinks()}
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signout">Sign Out</Link>
                <Link to="/dashboard">Dashboard</Link> */}
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

//Header component checks if user is authenticated. define mapStateToProps which takes state object and returns the 'authenticated' piece of state
function mapStateToProps(state) {
  console.log(state);
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
