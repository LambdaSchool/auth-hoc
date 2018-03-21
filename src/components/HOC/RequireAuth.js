import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuthentication extends Component {
    componentWillMount() {
      console.log('we good?');
      // Here, we want to check to see if `this.props.authenticated` is true
      // If it isn't, then redirect the user back to the /signin page
      return !this.props.authenticated ? null : this.props.history.push('/signin');
    }

    render() {
      // return <div />;
      // Here, check to see if `this.props.authenticated` is true
      // If it isn't, then we don't want this component to return anything
      // Else, render the component that was passed to this higher-order component
      return !this.props.authenticated ? null : <ComposedComponent />
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated
    };
  };

  return connect(mapStateToProps)(RequireAuthentication);
};
