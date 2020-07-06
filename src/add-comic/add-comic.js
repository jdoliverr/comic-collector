import React from 'react';
import UserContext from '../UserContext';

class addComic extends React.Component {
    static contextType = UserContext;

    render() {
        const { handleAddComic } = this.context
        return (
            <form className="add-comic-form" onSubmit={handleAddComic}>
                <h2>New Comic</h2>
                <label htmlFor="title-input">Title:</label>
                <input type="text" id="title-input" className="title-input add-comic-input" name='title' required />

                <label htmlFor="author-input">Author(s):</label>
                <input type="text" id="author-input" className="author-input add-comic-input" name='author' required />

                <label htmlFor="issue-input">Issue:</label>
                <input type="number" id="issue-input" className="issue-input add-comic-input" name='issue' required />

                <label htmlFor="mark-as-read">Mark as read:</label>
                <input type="checkbox" id="mark-as-read" className="mark-as-read add-comic-input" name='read'/>

                <label htmlFor="description-input">Description:</label>
                <textarea type="text" id="description-input" className="description-input add-comic-input" name='description' required />

                <label htmlFor="desination-input">Add to:</label>
                <select id="desination-input" className='desination-select' name='destination' >
                    <option value="collection">Collection</option>
                    <option value="wish-list">Wish List</option>
                </select>

                <button className="add-comic-submit" type='submit' >Submit</button>
            </form>
        );
    };
};

export default addComic;