import {clearEssayForm} from './newEssayForm.js';

export const setEssays = essays => {
    return {
        type: "SET_ESSAYS",
        essays
    }
}