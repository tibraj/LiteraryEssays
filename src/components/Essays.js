import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Counter from './Counter.js'


const Essays = ({essays}) => {
    return (
    essays.map (essay => (
        <div>
            <NavLink exact to={`/essays/${essay.id}`}><h1>{essay.title}</h1></NavLink>
            <br></br>
            <p>{essay.content}</p>
            <p>{essay.user.name}</p>
            {/* <Counter /> */}
            <p>_____________________________________________________________________________________________________________________</p>
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

