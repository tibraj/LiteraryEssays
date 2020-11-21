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
        console.log(essayInformation)
        return fetch("http://localhost:3000/api/v1/essays", {
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(essayInformation)
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    console.log(response.error)
                } else {
                    dispatch(addEssay(response))
                    dispatch(clearEssayForm())
                    history.push(`/essays/${response.id}`)
                }
            })
            .catch(console.log)
    }
}

export const removeEssay = (essayId, history) => {
    return dispatch => {
        return fetch(`http://localhost:3000/api/v1/essays/${essayId}`, {
            credentials: "include",
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(deleteEssay(essayId))
                    history.push(`/essays`)
                }
            })
            .catch(console.log)
    }
}

export const getEssays = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/essays", {
            credentials: "include",
            method: "GET",
            headers: {"Content-Type": "application/json"}
        })
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setEssays(response.data))
                }
            })
            .catch(console.log)
    }
}