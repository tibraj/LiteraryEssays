export const updateLogin = data => {
    return {
        type: "UPDATE_LOGIN", 
        data
    }
}

export const clearLogin = () => {
    return {
        type: "CLEAR_LOGIN"
    }
}