import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const UserHome = ({currentUser, loggedIn}) => {
    return (
        <div>

        </div>
    )
}

mapStateToProps = ({currentUser}) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(UserHome)