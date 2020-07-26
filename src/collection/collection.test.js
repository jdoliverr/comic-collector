import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Collection from './collection';
import UserContext from '../UserContext';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <UserContext.Provider value={{ collection, deleteComicCollection, updateReadCollection, handleSort, searchTerm, handleInputValue }}>
        <BrowserRouter>
        <Collection />
        </BrowserRouter>
    </UserContext.Provider>
    , 
    div
    );
    ReactDOM.unmountComponentAtNode(div);
});

