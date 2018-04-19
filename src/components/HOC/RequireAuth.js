import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../users';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    constructor(user) {
      super();
      console.log(user);
      this.state = user;
    }
    componentWillMount() {
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
      if (!this.props.authenticated) {
        this.props.history.push('/signin');
      }
    }

    render() {
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
      if (this.props.authenticated) {
        return <ComposedComponent />;
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
