import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome To React/Redux Essays</h1>
            <Link to="/signup">Signup</Link>
        </div>
    )
}