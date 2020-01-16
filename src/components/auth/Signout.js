import React, {Component} from 'react'
//wire up 'signout' action creator from actions/index.js into Signout component
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Signout extends Component {
    //lifecycle method; when Signout component appears on screen, call 'this.props.signout()' action creator.
    // signout() action creator will remove  authenticated JWT from reducer, as well as localStorage 'token' key. 
    componentDidMount(){
        this.props.signout()
    }

    render(){
        return(
            <div>
                Thanks for your business, see you again soon!
            </div>
        )
    }
}

//no mapStateToProps, so pass null as first argument along with 'actions'
export default connect(null, actions)(Signout)