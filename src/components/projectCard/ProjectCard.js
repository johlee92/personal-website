import React, { Component } from 'react';
import './ProjectCard.css';
import cssIcon from '../../images/icons/css.jpg';
import htmlIcon from '../../images/icons/html.png';
import javascriptIcon from '../../images/icons/javascript.png';
import reactIcon from '../../images/icons/react.png';

class ProjectCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reactDisplay: 'none',
            javascriptDisplay: 'none',
            htmlDisplay: 'none',
            cssDisplay: 'none',
        }
    }

    // function to loop through the technologies array to determine which display to turn on
    technologiesCheck = (technologies) => {
        let arrayTechnologies = technologies;
    
        if (arrayTechnologies.length === 0){
            return;
        }
    
        if (!arrayTechnologies){
            return;
        }
    
        for (let i = 0; i < arrayTechnologies.length; i++) {
            if (arrayTechnologies[i].toLowerCase() === 'javascript') {
                this.setState({
                    javascriptDisplay: 'inline-block'
                })
            } else if (arrayTechnologies[i].toLowerCase() === 'html') {
                this.setState({
                    htmlDisplay: 'inline-block'
                })
            } else if (arrayTechnologies[i].toLowerCase() === 'css') {
                this.setState({
                    cssDisplay: 'inline-block'
                })
            } else if (arrayTechnologies[i].toLowerCase() === 'react') {
                this.setState({
                    reactDisplay: 'inline-block'
                })
            }
        };
    
        return;
    }

    componentDidMount() {
        this.technologiesCheck(this.props.technologies);
    }

    render() {
        return (
            <div className="projectCard-container">
                <div className="projectCard-description">
                    <h2>{this.props.title}</h2>
                    <img src={this.props.screenshot} alt="project screenshot" className="projectCard-image"/>
                    <div>
                        <img src={reactIcon} alt="React icon" className="projectCard-icon" style={{display: this.state.reactDisplay}}/>
                        <img src={javascriptIcon} alt="JavaScript icon" className="projectCard-icon" style={{display: this.state.javascriptDisplay}}/>
                        <img src={htmlIcon} alt="HTML5 icon" className="projectCard-icon" style={{display: this.state.htmlDisplay}}/>
                        <img src={cssIcon} alt="CSS icon" className="projectCard-icon" style={{display: this.state.cssDisplay}}/>
                    </div>
                    <p>{this.props.description}</p>
                    <div>
                        <a href={this.props.repoLink} target="_blank"><button type="button" className="projectCard">View Code</button></a>
                        <a href={this.props.liveLink} target="_blank"><button type="button" className="projectCard">View Project</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard;