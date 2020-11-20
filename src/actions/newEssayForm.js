export const updateEssayForm = (name, value) => {
    const data = {name, value}
    return {
        type: "UPDATE_ESSAY_FORM",
        data
    }
}

export const clearEssayForm = () => {
    return {
        type: "CLEAR_ESSAY_FORM"
    }
}