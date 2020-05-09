import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import JournalPage from './JournalPage';

describe(`JournalPage component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <JournalPage />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <JournalPage />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
