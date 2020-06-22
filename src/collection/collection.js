import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';


class collection extends React.Component {
    static contextType = UserContext;

    render() {
        const { collection } = this.context
        const comicList = collection.map(comic => {
            return (
                <li>
                    <h3>Title: {comic.title}</h3>
                    <p><strong>Author(s):</strong> {comic.author}</p>
                    <p><strong>Issue:</strong> {comic.issue}</p>
                    <p><strong>Read:</strong> {comic.read}</p>
                    <p><strong>Description:</strong> {comic.description}</p>
                    <button>Mark as Read</button>
                    <button>Remove</button>
                </li>
            )
        })
        return (
            <div>
                <h2 className='page-header'>My Collection</h2>
                <div className="sort-and-search">
                    <div className="sort-box">
                        <label htmlFor="sort-dropdown">Sort:</label>
                        <select name="sort-dropdown" id="sort-dropdown">
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                    <div className="search-box">
                        <label htmlFor="search-collection">Search: </label>
                        <input type="text" name="search-collection" />
                    </div>
                </div>
                <ul className="comics-list">
                    {comicList}
                </ul>
                {/* likely moving add button to top of screen */}
                <div className="button-bar">
                    <Link to='/addcomic'>
                        <button>Add Comics</button>
                    </Link>
                </div>
            </div>
        )
    }

};

export default collection;

