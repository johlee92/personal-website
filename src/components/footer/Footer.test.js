import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './Footer';

describe(`Footer component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <Footer />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <Footer />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
