import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeEssay } from '../actions/essay.js';

const DeleteEssay = ({removeEssay, history}) => {
    const handleSubmit = event => {
        event.preventDefault()
        removeEssay()
        history.push('/')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Delete Essay" />
        </form>
    )
}

export default withRouter(connect(null, {removeEssay})(DeleteEssay))