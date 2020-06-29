import React from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import TokenService from '../services/token-service';

class Nav extends React.Component {
    static contextType = UserContext;

    handleLogout = () => {
        TokenService.clearAuthToken()
    }
    render() {
        if (TokenService.hasAuthToken()) {
            return (
                <nav>
                    <NavLink to='/home' className='nav-link'>Home</NavLink>
                    <NavLink to='/collection' className='nav-link'>Collection</NavLink>
                    <NavLink to='/wishlist' className='nav-link'>Wish List</NavLink>
                    <NavLink to='/' className='nav-link' onClick={this.handleLogout}>Log Out</NavLink>
                </nav>
            )
        }
        return (
            <nav>
                <NavLink to='/login' className='nav-link'>Login</NavLink>
                <NavLink to='/signup' className='nav-link'>Signup</NavLink>
            </nav>
        )
    }
};

export default Nav;