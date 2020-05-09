import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import JournalCard from './JournalCard';

describe(`JournalCard component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <JournalCard />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <JournalCard />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
