import React from 'react';
import { connect } from 'react-redux';
import { updateSignup } from '../actions/signup.js'
import { signup } from '../actions/currentUser.js';

const Signup = ({}) => {
    const handleOnChange = event => {
        const {name, value} = event.target
        const updatedInfo = {
            ...signupData,
            [name]: value 
        }
        updateSignup(updatedInfo)
    }
    return (
        <form></form>
    )
}

export default Signup