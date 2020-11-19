import { clearSignup } from './signup.js';
import { clearLogin } from './login.js';

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user 
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const information = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(information)
        })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json))
                    dispatch(clearSignup())
                    history.push('/')
                }
            })
            .catch(console.log)
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        const information = {
            user: credentials
        }
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(information)
        })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json))
                    dispatch(clearLogin())
                    history.push('/')
                }
            })
            .catch(console.log)
    }
}



export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}