import React from 'react';
import {connect} from 'react-redux';
import {updateEssayForm} from '../actions/newEssayForm.js';
import {createEssay} from '../actions/essays.js'

const EssayForm = ({data, updateEssayForm, createEssay, userId, history}) => {
    const handleChange = event => {
        console.log(data)
        const {name, value} = event.target
        updateEssayForm(name, value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createEssay({...data, userId}, history) 
    }
    return (
        <div>
            <h1>Create a New Essay</h1>
            <form onSubmit={handleSubmit} class="essay-form">
                <input className="essay-form-title" placeholder="title" name="title" value={data.title} onChange={handleChange} />
                <br></br><br></br>
                <textarea className="essay-form-content" placeholder="content" name="content" value={data.content} onChange={handleChange} />
                <br></br><br></br><br/>
                <input className="button-two" type="submit" value="Create Essay" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        data: state.newEssayForm,
        userId
    }
}
export default connect(mapStateToProps, {updateEssayForm, createEssay})(EssayForm)