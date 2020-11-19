export const updateSignup = data => {
    return {
        type: "UPDATE_SIGNUP", 
        data
    }
}

export const clearSignup = () => {
    return {
        type: "CLEAR_SIGNUP"
    }
}