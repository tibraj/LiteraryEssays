import React from 'react';
import { connect } from 'react-redux';
import { removeEssay } from '../actions/essays.js';
import { Link } from 'react-router-dom';

const ShowEssay = ({ essay, removeEssay, history }) => {
    return (
        essay ? 
            <div>
                <h1>{essay.title}</h1>
                <br></br>
                <p>{essay.content}</p>
                <br></br>
                <button onClick={() => removeEssay(essay.id, history)} className="deletebtn">Delete Essay</button>
            </div> 
        : 
            <p>There is no essay.</p>
    )
}

export default connect(null, {removeEssay})(ShowEssay)