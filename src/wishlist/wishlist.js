import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

class wishlist extends React.Component {
    static contextType = UserContext;

    render() {
        const { wishlist, deleteComicWishlist, updateReadWishlist, handleSort } = this.context
        const comicList = wishlist.map(comic => {
            let read = ''
            if (comic.is_read) {
                read = 'yes'
            } else {
                read = 'no'
            }
            return (
                <li key={comic.id} className='comic'>
                    <h3 name='title'><u>Title:</u> {comic.comic_title}</h3>
                    <p className='comic-author'><strong><u>Author(s):</u></strong> {comic.comic_author}</p>
                    <p><strong><u>Issue:</u></strong> {comic.issue}</p>
                    <p><strong><u>Read:</u></strong> {read}</p>
                    <p className='comic-description'><strong><u>Description:</u></strong> {comic.description}</p>
                    <button onClick={() => updateReadWishlist(comic.id)}>Mark as Read</button>
                    <button className='delete-comic' onClick={() => deleteComicWishlist(comic.id)}>Remove</button>
                </li>
            )
        });
        return (
            <div>
                <h2 className='page-header wishlist-header'>My Wish List</h2>
                <div className="sort-and-search">
                    <div className="sort-box">
                        <label htmlFor="sort-dropdown">Sort:</label>
                        <select name="sort-dropdown" id="sort-dropdown" onChange={handleSort}>
                            <option>-Sort by-</option>
                            <option value="title">Title</option>
                            <option value="author">Author</option>
                            {/* <option value="read">Read</option> */}
                        </select>
                    </div>
                    <div className="search-box">
                        <label htmlFor="search-collection">Search: </label>
                        <input type="text" name="search-collection" />
                    </div>
                </div>
                <div className="button-bar">
                    <Link to='/addcomic' className='new-comic'>
                        <button className='new-comic-button'>Add Comics</button>
                    </Link>
                </div>
                <ul className="comics-list">
                    {comicList}
                </ul>
                {/* likely moving add button to top of page */}
            </div>
        )
    }

};

export default wishlist;