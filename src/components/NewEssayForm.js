import React from 'react';
import {connect} from 'react-redux';
import {updateEssayForm} from '../actions/newEssayForm.js';
import {createEssay} from '../actions/essays.js'

const EssayForm = ({data, updateEssayForm, createEssay, userId, essay}) => {
    const handleChange = event => {
        const {name, value} = event.target
        updateEssayForm(name, value)
    }
    const handleSubmit = (data, userId) => {
        createEssay({...data, userId}, history)
    }
    return (
        <form></form>
    )
}

export default EssayForm