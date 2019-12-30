import React from 'react';
import ReactDOM from 'react-dom';
import Messages from './Messages';
import renderer from 'react-test-renderer';



describe('My Component', () => {
    it('Renders Without Crashing', () => {
        const testDiv = document.createElement('div');
        ReactDOM.render(<Messages />, testDiv);
        ReactDOM.unmountComponentAtNode(testDiv);
    })
    
    it('renders the UI as expected', () => {
        const tree = renderer.create(<Messages name="Messages" unread={4} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})