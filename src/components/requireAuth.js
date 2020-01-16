//this is a Higher-Order Component that will protect routes.
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state) {
      //return object with 'auth' property that comes from state.auth.authenticated
    return { auth: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
};