import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Counter from './Counter.js'


const Essays = ({essays, userId}) => {
    const currentUserEssays = essays.filter(essay => essay.user.id === userId ? true : false)
    const listEssays = currentUserEssays.length > 0 ?
    currentUserEssays.map (essay => (
        <div>
            <NavLink exact to={`/essays/${essay.id}`}><h1>{essay.title}</h1></NavLink>
            <br></br>
            <p>{essay.content}</p>
            <Counter />
            <p>_____________________________________________________________________________________________________________________</p>
        </div> 
    )) : <h2>You haven't written any essays yet.</h2>
    return (
        listEssays
    )
}

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        essays: state.essays,
        userId
    }
}
export default connect(mapStateToProps)(Essays)