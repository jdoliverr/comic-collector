import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav(props) {
    return (
        <nav>
            <NavLink to='/home' className='nav-link'>Home</NavLink>
            <NavLink to='/collection' className='nav-link'>Collection</NavLink>
            <NavLink to='/wishlist' className='nav-link'>Wish List</NavLink>
            <NavLink to='/' className='nav-link'>Log Out</NavLink>
        </nav>
    )
};

export default Nav;