import React from 'react';
import { connect } from 'react-redux';
import { removeEssay } from '../actions/essays.js';
import { Link } from 'react-router-dom';

const ShowEssay = ({ essay, removeEssay, history }) => {
    return (
        essay ? 
            <div class="essay">
                <h1>Show Page</h1>
                <h2>{essay.title}</h2>
                <p>{essay.content}</p>
                <p><strong><em>By: {essay.user.name}</em></strong></p>
                <button id="delete-button" onClick={() => removeEssay(essay.id, history)} >Delete Essay</button>
            </div> 
        : 
            <p>There is no essay.</p>
    )
}

export default connect(null, {removeEssay})(ShowEssay)

