import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Renders Without Crashing', () => {
    const testDiv = document.createElement('div');
    ReactDOM.render(<App />, testDiv);
    ReactDOM.unmountComponentAtNode(testDiv);
})