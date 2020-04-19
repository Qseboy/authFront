import React from 'react';
import { Link } from 'react-router-dom'
import './navigation.css'


const Navigation = (props) => {
    return (
        <div className="navigation">
            <nav>
                <Link to="/registration">Registration</Link>
                <Link to="/login">Sing in</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </div>
    );
};

export { Navigation };
