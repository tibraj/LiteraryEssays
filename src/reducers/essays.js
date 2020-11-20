const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case "SET_ESSAYS":
            return action.essays 
        case "ADD_ESSAY":
            return state.concat(action.essay)
        default:
            return state
    }
}