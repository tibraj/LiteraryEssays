import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout.js';

const UserHome = () => {
    return (
        <div id="nav">
            <NavLink exact to="/home" className="button">Home</NavLink>
            <NavLink exact to="/essays/new" className="button">New Essay</NavLink>
            <NavLink exact to="/essays" className="button">Essays</NavLink>
            <Logout />
        </div>
    )
}



export default UserHome