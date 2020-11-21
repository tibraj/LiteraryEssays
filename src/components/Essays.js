import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Essays = ({Essays}) => {
    const userEssays = Essays.length > 0 ?
    Essays.map (essay => (
        <div>
            <Link to={`/essays/${essay.id}`}><h1>{essay.title}</h1></Link>
            <br></br>
            <p>{essay.content}</p>
        </div> 
    )) : null
    return (
        userEssays
    )
}

mapStateToProps = ({Essays}) => {
    return {
        Essays
    }
}
export default connect(mapStateToProps)(Essays)