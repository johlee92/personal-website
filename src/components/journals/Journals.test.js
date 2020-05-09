import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Journals from './Journals';

describe(`Journals component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <Journals />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <Journals />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
