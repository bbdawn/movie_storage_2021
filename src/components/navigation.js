import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css'




function Navigation() {
    return (
        <div className='nav'>
            <Link to="/">Top rank</Link>
            <Link to='/Drama'>Drama</Link>
            <Link to='/Comedy'>Comedy</Link>
            <Link to='/Action'>Action</Link>
            <Link to='/Crime'>Crime</Link>
            <Link to='/About'>Info</Link>
        </div>
    );
}

export default Navigation;