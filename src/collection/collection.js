import React from 'react';
import { NavLink } from 'react-router-dom';

function collection(props) {
    console.log('collection');
    return (
        <div>
            <h2 className='page-header'>My Collection</h2>
            <div class="sort-and-search">
                <div class="sort-box">
                    <label for="sort-dropdown">Sort:</label>
                    <select name="sort-dropdown" id="sort-dropdown">
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="read">Read</option>
                    </select>
                </div>
                <div class="search-box">
                    <label for="search-collection">Search: </label>
                    <input type="text" name="search-collection" />
                </div>
            </div>
            <ul class="comics-list">
                <li class="comics">
                    <h3>Title: Title1</h3>
                    <p><strong>Author(s):</strong> Author1</p>
                    <p><strong>Issue:</strong> 1</p>
                    <p><strong>Read:</strong> Yes</p>
                    <p><strong>Description:</strong> Sample1  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione excepturi veritatis itaque praesentium commodi, velit, suscipit porro quaerat distinctio numquam ducimus minus asperiores sed fugit perferendis laborum nobis, quo architecto.</p>
                    <button>Mark as Read</button>
                    <button>Remove</button>
                </li>
                <li class="comics">
                    <h3><strong>Title:</strong> Title2</h3>
                    <p><strong>Author(s):</strong> Author2</p>
                    <p><strong>Issue:</strong> 2</p>
                    <p><strong>Read:</strong> Yes</p>
                    <p><strong>Description:</strong> Sample2</p>
                    <button>Mark as Read</button>
                    <button>Remove</button>
                </li>
                <li class="comics">
                    <h3><strong>Title:</strong> Title3</h3>
                    <p><strong>Author(s):</strong> Author3</p>
                    <p><strong>Issue:</strong> 3</p>
                    <p><strong>Read:</strong> No</p>
                    <p><strong>Description:</strong> Sample3</p>
                    <button>Mark as Read</button>
                    <button>Remove</button>
                </li>
            </ul>
            {/* likely moving add button to top of screen */}
            <div class="button-bar">
                <button>
                    <NavLink to='/addcomic'>Add Comics</NavLink>
                </button>
            </div>
        </div>
    )
};

export default collection;