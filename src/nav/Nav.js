import React from 'react';

function Nav(props) {
    console.log('nav');
    return (
        <nav>
            <p>Home</p>
            <p>Collection</p>
            <p>Wish List</p>
            <p>Log Out</p>
        </nav>
    )
};

export default Nav;