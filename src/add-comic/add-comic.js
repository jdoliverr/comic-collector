import React from 'react';

function addComic(props) {
    return (
        <form class="add-comic-form">
            <h2>New Comic</h2>
            <label for="title-input">Title:</label>
            <input type="text" name="title-input" class="title-input add-comic-input" required />

            <label for="author-input">Author(s):</label>
            <input type="text" name="author-input" class="author-input add-comic-input" required />

            <label for="issue-input">Issue:</label>
            <input type="number" name="issue-input" class="issue-input add-comic-input" required />

            <label for="mark-as-read">Mark as read:</label>
            <input type="checkbox" name="mark-as-read" class="mark-as-read add-comic-input" required />

            <label for="description-input">Description:</label>
            <textarea type="text" name="description-input" class="description-input add-comic-input" required />

            <label for="desination-input">Add to:</label>
            <select name="destination desination-input" className='desination-select'>
                <option value="collection">Collection</option>
                <option value="wish-list">Wish List</option>
            </select>

            <button class="add-comic-submit">Submit</button>
        </form>
    );
};

export default addComic;