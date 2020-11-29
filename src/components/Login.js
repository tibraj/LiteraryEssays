import React from 'react';
import { connect } from 'react-redux';
import { updateLogin } from '../actions/login.js'
import { login } from '../actions/currentUser.js';

const Login = ({loginData, updateLogin, login, history}) => {
    const handleOnChange = event => {
        const {name, value} = event.target
        const updatedInfo = {
            ...loginData,
            [name]: value 
        }
        updateLogin(updatedInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" type="text" name="username" value={loginData.username} onChange={handleOnChange} />
            <input placeholder="password" type="password" name="password" value={loginData.password} onChange={handleOnChange} />
            <input type="submit" className="btn" value="Login" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.login
    }
}

export default connect(mapStateToProps, {updateLogin, login})(Login)