import React, {Component} from 'react'
//import route-protecting HOC named requireAuth, and use it by wrapping the Dashboard in the export statement. 
//if they are not auth'd, they get redirected to '/' route
import requireAuth from './requireAuth'

//class-based component because we will eventually use lifecycle method like ComponentDidMount, we will attempt to fetch protected info from backend API 
class Dashboard extends Component {
    render(){
        return (
            <div>This is the Dashboard Component</div>
        )
    }
}

export default requireAuth(Dashboard)