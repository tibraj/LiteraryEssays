import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const UserHome = ({currentUser, loggedIn}) => {
    return (
        <div>
            {loggedIn ? <h1>{currentUser.name}'s Homepage</h1> : null}
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