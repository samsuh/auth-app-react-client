import React, {Component} from 'react'
//to use reduxForm, first add it to component export statement, tell it about the different field names, and use Field inside component itself.
import {reduxForm, Field} from 'redux-form'
//wire up action creator to Signup component.
import {connect} from 'react-redux'
import * as actions from '../../actions'
import {compose} from 'redux'

class Signup extends Component {
//onSubmit function receives object with email/pw/company/jobTitle as 'formProps'
//when we use reduxForm, we get a function called HandleSubmit that we have to call to make sure to take it out of the form and pass it to the onSubmit callback.
onSubmit = (formProps) => {
    // console.log(formProps)
    //call the signup action creator from ../../actions/index.js that's available inside our component. 
    this.props.signup(formProps)
}

render(){
    //destructure handleSubmit from redux-form from props object.
    const {handleSubmit}= this.props
        return(
            //on form submission, we call handleSubmit
            //to handleSubmit, we pass the callback function we defined above, which we named onSubmit. We want to render this sometime in the future, but pass reference to onSubmit function.
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Company</label>
                    <Field
                        name="company"
                        type="text"
                        component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Job Title</label>
                    <Field
                        name="jobTitle"
                        type="text"
                        component="input"
                    />
                </fieldset>
                <button>Sign Up!</button>
            </form>
        )
    }
}

//reduxForm syntax is similar to connect()
//have to provide an options object, and give it a name for the form we're creating.
//once that's done we can create the two input Fields
//we need to wire up reduxForm along with the connect() helper. will look messy, so we use 'compose' helper function from redux to make these HOCs more readable. 
//without compose, need to add connect(). export default reduxForm({ form: 'signup' })(Signup)

export default compose(
    //apply action creators to Singup component. null because there are no pieces of state we want to pass in, and pass in the actions object
    connect(null, actions),
    reduxForm({ form: 'signup' })
)(Signup)