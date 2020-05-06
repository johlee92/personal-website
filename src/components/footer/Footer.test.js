import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';

describe(`Footer component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <Footer />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
