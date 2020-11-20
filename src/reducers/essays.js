const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case "SET_ESSAYS":
            return action.essays 
        case "ADD_ESSAY":
            return state.concat(action.essay)
        case "DELETE_ESSAY":
            return state.filter(essay => essay.id === action.essayId ? false : true)
        default:
            return state
    }
}