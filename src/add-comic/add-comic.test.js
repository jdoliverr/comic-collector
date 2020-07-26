import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AddComic from './add-comic';
import UserContext from '../UserContext';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <UserContext.Provider value={{ handleAddComics }}>
            <BrowserRouter>
                <AddComic />
            </BrowserRouter>
        </UserContext.Provider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});