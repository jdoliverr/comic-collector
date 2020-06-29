import React from 'react';
import { Link } from 'react-router-dom';

function home(props) {
    return (
        <div>
            <Link to='/collection' className='nav-link'>
                <div className='home-select'>
                    <h2>My Collection</h2>
                    <p>View your comic book collection</p>
                </div>
            </Link>
            <Link to='/wishlist' className='nav-link'>
                <div className='home-select'>
                    <h2>My Wish List</h2>
                    <p>View your comic book wish list</p>
                </div>
            </Link>

            {/* likely moving add button to top of screen */}
            <div className="button-bar">
                <Link to='/addcomic'>
                    <button>Add Comics</button>
                </Link>
            </div>
        </div>
    )
};

export default home;