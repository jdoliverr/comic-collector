import React from 'react';

function home(props) {
    console.log('home');
    return (
        <div>
            <div className='home-select'>
                <h2>My Collection</h2>
                <p>View your comic book collection</p>
            </div>
            <div className='home-select'>
                <h2>My Wish List</h2>
                <p>View your comic book wish list</p>
            </div>
            {/* likely moving add button to top of screen */}
            <div class="button-bar">
                <button>Add Comics</button>
            </div>
        </div>
    )
};

export default home;