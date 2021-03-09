import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Home = ({essays, currentUserName, userId}) => {
    const currentUserEssays = essays.filter(essay => essay.user.id === userId ? true : false)
    const recentEssay = currentUserEssays[currentUserEssays.length - 1]
    
    return (
        recentEssay != undefined ?
        <div className="essay">
            <h1>{currentUserName}'s Home</h1>
            <br></br>
            <NavLink exact to={`/essays/${recentEssay.id}`}><h2>{recentEssay.title}</h2></NavLink>
            <p>{recentEssay.content}</p>
        </div>
        : <h2>You haven't written anything yet.</h2>
    ) 
}

const mapStateToProps = state => {
    const currentUserName = state.currentUser ? state.currentUser.username : ""
    const userId = state.currentUser ? state.currentUser.id : ""
    return {
        essays: state.essays,
        currentUserName,
        userId
    }
}
export default connect(mapStateToProps)(Home)