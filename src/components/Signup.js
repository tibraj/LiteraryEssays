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

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" type="text" name="name" value={signupData.name} onChange={handleOnChange} />
            <input placeholder="name" type="text" name="username" value={signupData.username} onChange={handleOnChange} />
            <input placeholder="name" type="text" name="password" value={signupData.password} onChange={handleOnChange} />
            <input type="submit" value="Signup" />
        </form>
    )
}

export default Signup