import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ProjectCard from './ProjectCard';

describe(`ProjectCard component`, () => {
    const dummyProjects = {
        title: 'Get Meals',
        screenshot: 'https://user-images.githubusercontent.com/52260646/81485803-3cc51300-920d-11ea-9efb-7cbde0b66698.png',
        description: `To make life a little easier during COVID19, use this app to either find or report places that are distributing free food or meals.`,
        technologies: ['react','javascript','html','css'],
        liveLink: 'https://get-meals-app.now.sh/',
        repoLink: 'https://github.com/zzboncak/get-meals-client',
        clickCount: 0
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
                <ProjectCard {...dummyProjects}/>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the component as expected', () => {
        const tree = renderer
            .create(
                <ProjectCard {...dummyProjects}/>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();  
    });
})
