import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Landing from './landing';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
});