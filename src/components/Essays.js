import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Counter from './Counter.js'


const Essays = ({essays}) => {
    return (
    essays.map (essay => (
        <div class="essay">
            <NavLink exact to={`/essays/${essay.id}`}><h1>{essay.title}</h1></NavLink>
            <p>{essay.content}</p>
            <p><strong><em>By: {essay.user.name}</em></strong></p>
            {/* <Counter /> */}
        </div> 
        )
    )) 
}

const mapStateToProps = state => {
    return {
        essays: state.essays,
    }
}
export default connect(mapStateToProps)(Essays)

