import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout.js';
import Essays from './Essays.js';

const UserHome = ({currentUser, loggedIn}) => {
    return (
        <div>
            <NavLink exact to="/essays/new" className="nav">New Essay</NavLink>
            <NavLink exact to="/essays" className="nav">Essays</NavLink>
            <Logout />
            {loggedIn ? <h1>{currentUser.name}'s Essays</h1> : null}
        </div>
    )
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(UserHome)