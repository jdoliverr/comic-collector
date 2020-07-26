import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './login';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
    <Login />
    </BrowserRouter>, 
    div
    );
    ReactDOM.unmountComponentAtNode(div);
});