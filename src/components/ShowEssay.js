import React from 'react';
import { Link } from 'react-router-dom';

const ShowEssay = ({ essay }) => {
    return (
        essay ? 
            <div>
                <h1>{essay.title}</h1>
                <br></br>
                <p>{essay.content}</p>
            </div> 
        : 
            <p>There is no essay.</p>
    )
}

export default ShowEssay