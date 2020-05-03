import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ContactForm from './ContactForm';

describe(`ContactForm component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <ContactForm />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <ContactForm />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
