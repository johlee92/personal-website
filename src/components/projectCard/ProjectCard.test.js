import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProjectCard from './ProjectCard';

describe(`ProjectCard component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <ProjectCard />
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <ProjectCard />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
