import React, { Component } from 'react';
import './Projects.css';
import PersonalWebsiteContext from '../../personalWebsiteContext';
import ProjectCard from '../projectCard/ProjectCard.js';

class Projects extends Component {
    static contextType = PersonalWebsiteContext;

    render() {
        const projectCards = this.context.projects.map((project) => {
            return <ProjectCard {...project} />
        })

        return (
            <div className="projects">
                <div className="projects-message">
                    <p>Here's my portfolio</p>
                </div>
                <div className="projects-list">
                    {projectCards}
                </div>
            </div>
        )
    }
}

export default Projects;