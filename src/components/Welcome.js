import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome To React/Redux Essays</h1>
            <br></br><br></br><br></br><br></br>
            <Link to="/signup" className="btn">Signup</Link><br></br><br></br><Link to="/login" className="btn">Login</Link>
        </div>
    )
}

export default Welcome