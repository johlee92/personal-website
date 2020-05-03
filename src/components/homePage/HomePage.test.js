import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import HomePage from './HomePage';

describe(`HomePage component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <HomePage />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <HomePage />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
