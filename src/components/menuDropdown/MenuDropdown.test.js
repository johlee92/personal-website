import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import MenuDropdown from './MenuDropdown';
import { BrowserRouter } from 'react-router-dom';

describe(`MenuDropdown component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <MenuDropdown />
            </BrowserRouter>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <BrowserRouter>
                    <MenuDropdown />
                </BrowserRouter>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
