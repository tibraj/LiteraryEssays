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

export const deleteEssay = essayId => {
    return {
        type: "DELETE_ESSAY",
        essayId
    }
}

export const createEssay = (data, history) => {
    return dispatch => {
        const essayInformation = {
            title: data.title,
            content: data.content,
            user_id: data.userId 
        }
        return fetch("http://localhost:3000/api/v1/essays", {
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(essayInformation)
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(addEssay(response.data))
                    dispatch(clearEssayForm())
                    history.push(`/essays/${response.data.id}`)
                }
            })
            .catch(console.log)
    }
}