import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class Header extends Component {
    //helper method to conditionally render links that show up in navbar 
    renderLinks(){
        //check if user is signedin. show Signed-In-User-Links that are relevant
        if (this.props.authenticated){
            return(
                <div>
                    <Link to="/signout">Sign Out</Link>
                    <Link to="/dashboard">Dashboard</Link>
                </div>
            )
        } else {
            //if user is not authenticated, allow them to signup/signin.
            return(
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            )
        }
    }

    render(){
        return(
            <div> 
                <Link to="/">Archon</Link>
                {/* Now being conditionally rendered
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signout">Sign Out</Link>
                <Link to="/dashboard">Dashboard</Link> */}
                {this.renderLinks()}
            </div>
        )
    }
}

//Header component checks if user is authenticated. define mapStateToProps which takes state object and returns the 'authenticated' piece of state
function mapStateToProps(state){
    return {authenticated: state.auth.authenticated}
}

export default connect(mapStateToProps)(Header)