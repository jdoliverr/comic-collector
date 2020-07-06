import React from 'react';
import { Link } from 'react-router-dom';

function home(props) {
    return (
        <div>
            <div className="button-bar">
                <Link to='/addcomic' className='new-comic'>
                    <button className='new-comic-button'>Add Comics</button>
                </Link>
            </div>
            <Link to='/collection' className='nav-link'>
                <div className='home-select collection-div'>
                    <h2>My Collection</h2>
                    <p className='homepage-text'>View your comic book collection</p>
                </div>
            </Link>
            <Link to='/wishlist' className='nav-link'>
                <div className='home-select wishlist-div'>
                    <h2>My Wish List</h2>
                    <p className='homepage-text'>View your comic book wish list</p>
                </div>
            </Link>
        </div>
    );
};

export default home;