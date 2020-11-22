import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Essays = ({essays}) => {
    
    const userEssays = essays.length > 0 ?
    essays.map (essay => (
        <div>
            <NavLink exact to={`/essays/${essay.id}`}><h1>{essay.title}</h1></NavLink>
            <br></br>
            <p>{essay.content}</p>

        </div> 
    )) : null
    return (
        userEssays
    )
}

const mapStateToProps = ({essays}) => {
    return {
        essays
    }
}
export default connect(mapStateToProps)(Essays)