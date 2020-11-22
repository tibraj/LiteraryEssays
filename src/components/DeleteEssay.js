import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { removeEssay } from '../actions/essays.js';

const DeleteEssay = ({removeEssay, userId, history}) => {
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

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        userId
    }
}
export default withRouter(connect(mapStateToProps, {removeEssay})(DeleteEssay))