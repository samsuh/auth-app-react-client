import React, {Component} from 'react'

//class-based component because we will eventually use lifecycle method like ComponentDidMount, we will attempt to fetch protected info from backend API 
class Dashboard extends Component {
    render(){
        return (
            <div>This is the Dashboard Component</div>
        )
    }
}

export default Dashboard