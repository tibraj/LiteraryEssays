import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import { getCurrentUser } from './actions/currentUser.js';


class App extends React.component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <h1>APP</h1>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
