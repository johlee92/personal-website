import React, { Component } from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/about-me-photo.JPG';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <img className="about-me-image" src={aboutMePhoto} alt="hiking picture in about me"/>
                <div className="about-me-message">
                    Just a nerd, an aspiring software engineer, and a professional daydreamer. <br/> <br/>
                    When I have free time, I can be found doing something active (e.g. hiking a 14er, surfing, swimming). I seek new adventures and enjoy having new experiences. I’m also an avid manga reader. <br/> <br/>
                    I am currently based out of Denver. I’ve lived in Taipei, Philadelphia, New York City, Los Angeles, and San Francisco.
                </div>
            </div>
        )
    }
}

export default AboutMe;