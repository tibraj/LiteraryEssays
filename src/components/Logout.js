import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../actions/currentUser.js';

const Logout = ({logout, history}) => {
    return (
        <form>

        </form>
    )
}

export default withRouter(connect(null, {logout})(Logout))