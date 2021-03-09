import React from 'react';
import { connect } from 'react-redux';
import { updateSignup } from '../actions/signup.js'
import { signup } from '../actions/currentUser.js';

const Signup = ({signupData, updateSignup, signup, history}) => {
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
        <form id="signup" onSubmit={handleSubmit}>
            <input placeholder="name" type="text" name="name" value={signupData.name} onChange={handleOnChange} />
            <br/><br/>
            <input placeholder="username" type="text" name="username" value={signupData.username} onChange={handleOnChange} />
            <br/><br/>
            <input placeholder="password" type="password" name="password" value={signupData.password} onChange={handleOnChange} />
            <br/><br/>
            <input type="submit" value="Signup" className="button" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupData: state.signup
    }
}

export default connect(mapStateToProps, {updateSignup, signup})(Signup)