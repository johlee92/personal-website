import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Journal from './Journal';

describe(`Journal component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <Journal />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <Journal />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
