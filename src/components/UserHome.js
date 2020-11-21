import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout.js';
import Essays from './Essays.js';

const UserHome = ({currentUser, loggedIn}) => {
    return (
        <div>
            {loggedIn ? <h1>{currentUser.name}'s Homepage</h1> : null}
            <NavLink exact to="/essays/new">New Essay</NavLink>
            <Logout />
            <Essays />
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