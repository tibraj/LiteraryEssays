import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome.js';
import Signup from './components/Signup.js';
import Login from './components/Login.js';
import UserHome from './components/UserHome.js';
import { getCurrentUser } from './actions/currentUser.js';
import NewEssayForm from './components/NewEssayForm.js';
import ShowEssay from './components/ShowEssay.js';
import Essays from './components/Essays.js';



class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const {loggedIn, essays} = this.props
    return (
      <div className="App">
        <h1>APP</h1>
        {loggedIn ? <UserHome /> : <Welcome />}
        <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/essays' component={Essays}/>
        <Route exact path='/essays/new' component={NewEssayForm}/>
        <Route exact path='/essays/:id' render={props => {
          const essay = essays.find(essay => essay.id == props.match.params.id) 
        return <ShowEssay essay ={essay}{...props} /> } }/>

        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser,
    essays: state.essays
  }
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
