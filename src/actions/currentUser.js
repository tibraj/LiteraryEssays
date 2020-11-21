import { clearSignup } from './signup.js';
import { clearLogin } from './login.js';
import { getEssays } from './essays.js';

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
                    dispatch(getEssays())
                    history.push('/')
                }
            })
            .catch(console.log)
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json))
                    dispatch(clearLogin())
                    dispatch(getEssays())
                    history.push('/')
                }
            })
            .catch(console.log)
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
            .then(response => response.json())
            .then(json => {
                if (json.error) {
                    alert(json.error)
                } else {
                    dispatch(setCurrentUser(json))
                    dispatch(getEssays())
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

export const logout = event => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3000/api/v1/logout", {
            credentials: "include",
            method: "DELETE"
        })
    }
}