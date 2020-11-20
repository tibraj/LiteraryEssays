const initialState = {
    title: "",
    content: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_ESSAY_FORM":
            const values = {
                ...state,
                [action.data.name]: action.data.value
            }
            return values
        case "CLEAR_ESSAY_FORM":
            return initialState
        default:
            return state
    }
}