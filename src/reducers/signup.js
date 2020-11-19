const initialState = {
    name: "",
    username: "",
    password: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_SIGNUP":
            return action.data
        case "CLEAR_SIGNUP":
            return initialState
        default:
            return state
    }
}