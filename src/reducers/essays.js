const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case "SET_ESSAYS":
            return action.essays 
        default:
            return state
    }
}