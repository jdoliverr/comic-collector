import React from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';


class collection extends React.Component {
    static contextType = UserContext;

    render() {
        const { collection, deleteComicCollection, updateReadCollection, handleSort, searchTerm, handleInputValue } = this.context
        const filteredCollection = collection.filter(comic => {
            return comic.comic_title.toLowerCase().includes(searchTerm.toLowerCase())
        })
        
        const comicList = filteredCollection.map(comic => {
            let read = ''
            if (comic.is_read) {
                read = 'Yes'
            } else {
                read = 'No'
            }
            return (
                <li key={comic.id} className='comic'>
                    <h3 name='title'><u>Title:</u> {comic.comic_title}</h3>
                    <p className='comic-author'><strong><u>Author(s):</u></strong> {comic.comic_author}</p>
                    <p><strong><u>Issue:</u></strong> {comic.issue}</p>
                    <p><strong><u>Read:</u></strong> {read}</p>
                    <p className='comic-description'><strong><u>Description:</u></strong> {comic.description}</p>
                    <button onClick={() => updateReadCollection(comic.id)}>Mark as Read</button>
                    <button className='delete-comic' onClick={(e) => { if (window.confirm('Are you sure you wish to delete this comic?')) deleteComicCollection(comic.id) }}>Remove</button>
                </li>
            )
        })
        return (
            <div>
                <h2 className='page-header collection-header'>My Collection</h2>
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
                        <input type="text" name="search-collection" onInput={handleInputValue} />
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
            </div>
        )
    }

};

export default collection;

