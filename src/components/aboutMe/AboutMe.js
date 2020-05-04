import React, { Component } from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/about-me-photo.JPG';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <img className="about-me-image" src={aboutMePhoto} alt="picture in about me with me hiking"/>
                <div className="about-me-message">
                    I’m a web developer and an engineer by training. I enjoy working with a team to materialize an idea, to solve problems, and to improve efficiency. I love being challenged intellectually. <br/> <br/>
                    When I have free time, I can be found doing something active (e.g. hiking a 14er, surfing, swimming). I seek new adventures and enjoy having new experiences. I’m also an avid manga reader. <br/> <br/>
                    I am currently based out of Denver, CO. I’ve lived in Philadelphia, New York City, Los Angeles, and San Francisco.
                </div>
            </div>
        )
    }
}

export default AboutMe;