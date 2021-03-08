import React from 'react';
import { connect } from 'react-redux';
import { removeEssay } from '../actions/essays.js';
import { Link } from 'react-router-dom';

const ShowEssay = ({ essay, removeEssay, history }) => {
    return (
        essay ? 
            <div>
                <h1>Show Page</h1>
                <h2>{essay.title}</h2>
                <p>{essay.content}</p>
                <p>{essay.user.name}</p>
                <br></br>
                <button className="button-two" onClick={() => removeEssay(essay.id, history)} >Delete Essay</button>
            </div> 
        : 
            <p>There is no essay.</p>
    )
}

export default connect(null, {removeEssay})(ShowEssay)

