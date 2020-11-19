import React from 'react';
import { connect } from 'react-redux';
import { updateLogin } from '../actions/login.js'
import { login } from '../actions/currentUser.js';

const Login = ({}) => {
    const handleOnChange = event => {
        const {name, value} = event.target
        const updatedInfo = {
            ...loginData,
            [name]: value 
        }
        updateLogin(updatedInfo)
    }
    return (
        <form>
        </form>
    )
}

export default Login