import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/currentUser.js';

const Logout = ({logout, history}) => {
    const handleSubmit = event => {
        event.preventDefault()
        logout()
        history.push('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" className="nav" value="Logout" />
        </form>
    )
}

export default withRouter(connect(null, {logout})(Logout))