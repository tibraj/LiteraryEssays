import {clearEssayForm} from './newEssayForm.js';

export const setEssays = essays => {
    return {
        type: "SET_ESSAYS",
        essays
    }
}

export const clearEssays = () => {
    return {
        type: "CLEAR_ESSAYS"
    }
}

export const addEssay = essay => {
    return {
        type: "ADD_ESSAY",
        essay
    }
}