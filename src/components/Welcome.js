import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Today's Essays</h1>
            <br></br><br></br><br></br><br></br>
            <Link to="/signup" className="signup-link">Signup</Link>
            <Link to="/login" className="login-link">Login</Link>
            <br></br><br></br><br/>
        </div>
    )
}

export default Welcome