import React from 'react';

function landing(props) {
    return (
        <div className='landing-container'>
            <h2 className='landing'>Track your comic book collection</h2>
            <label htmlFor='collection-screenshot' className='screenshot-label'>(This is just an example screenshot)</label>
            <img src='./../../images/ex-comic-collection.jpg' alt='Comic collection screenshot' className='screenshot' id='collection-screenshot' />
            
            <h2 className='landing'>Keep a wish list so you know what issues you still need to pick up</h2>
            <label htmlFor='wishlist-screenshot' className='screenshot-label'>(This is just an example screenshot)</label>
            <img src='./../../images/ex-comic-wishlist.jpg' alt='Comic wishlist screenshot' className='screenshot' id='wishlist-screenshot' />
            
            <h2 className='landing'>Note which issues you have read so you never lose your place in a series</h2>
            <label htmlFor='big-button' className='screenshot-label'>(This is a sample button)</label>
            <button className="big-button" id='big-button'>Mark as Read</button>
        </div>
    )
};

export default landing;