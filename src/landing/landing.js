import React from 'react';

function landing(props) {
    return (
        <div className='landing-container'>
            <h2 className='page-header'>Track your comic book collection</h2>
            {/* These divs will be images. Screenshots of a sample colelction */}
            {/* <div className='placeholder'>
                <h3>Title: Title1</h3>
                <p><strong>Author(s):</strong> Author1</p>
                <p><strong>Issue:</strong> 1</p>
                <p><strong>Read:</strong> Yes</p>
                <p><strong>Description:</strong> Sample1  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione excepturi veritatis itaque praesentium commodi, velit, suscipit porro quaerat distinctio numquam ducimus minus asperiores sed fugit perferendis laborum nobis, quo architecto.</p>
                <button className='fake-button'>Mark as Read</button>
                <button className='fake-button'>Remove</button>

                <h3><strong>Title:</strong> Title2</h3>
                <p><strong>Author(s):</strong> Author2</p>
                <p><strong>Issue:</strong> 2</p>
                <p><strong>Read:</strong> Yes</p>
                <p><strong>Description:</strong> Sample2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, explicabo accusantium. Qui rem, laborum, unde quas modi porro consectetur eveniet dolores molestias dicta officiis nulla? Id facilis delectus tempora eos.</p>
                <button className='fake-button'>Mark as Read</button>
                <button className='fake-button'>Remove</button>
            </div> */}
            <img src='./../../images/comic-collection.jpg' alt='Comic collection screenshot' className='screenshot'/>
            <h2 className='page-header'>Keep a wish list so you know what issues you still need to pick up</h2>
            {/* These divs will be images. Screenshots of a sample colelction */}
            <div className='placeholder'>
                <h3><strong>Title:</strong> Title3</h3>
                <p><strong>Author(s):</strong> Author3</p>
                <p><strong>Issue:</strong> 3</p>
                <p><strong>Read:</strong> No</p>
                <p><strong>Description:</strong> Sample3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo blanditiis veritatis, laboriosam corporis molestiae rerum tenetur impedit delectus veniam eos facilis vitae id est voluptate voluptates eius doloribus consequuntur.</p>
                <button className='fake-button'>Mark as Read</button>
                <button className='fake-button'>Remove</button>
            </div>
            <h2 className='page-header'>Note which issues you have read so you never lose your place in a series</h2>
            <button className="big-button">Mark as Read</button>
        </div>
    )
};

export default landing;