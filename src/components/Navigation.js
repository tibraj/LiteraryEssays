import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout.js';

const UserHome = () => {
    return (
        <div>
            <NavLink exact to="/home" >Home</NavLink>
            <NavLink exact to="/essays/new" >New Essay</NavLink>
            <NavLink exact to="/essays" >Essays</NavLink>
            <Logout />
        </div>
    )
}



export default UserHome