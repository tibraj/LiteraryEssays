import React from 'react';
import {connect} from 'react-redux';
import {updateEssayForm} from '../actions/newEssayForm.js';
import {createEssay} from '../actions/essays.js'

const EssayForm = ({}) => {
    const handleSubmit = (data, userId) => {
        createEssay({...data, userId}, history)
    }
    return (
        <form></form>
    )
}

export default EssayForm