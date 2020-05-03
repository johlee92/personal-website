import React, { Component } from 'react';
import './Footer.css';
import mailIcon from '../../images/mail.jpg';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <span></span>
                <span></span>
                <span>
                    <img src={mailIcon} alt="mail icon" className="footer-image"/>
                </span>
            </div>
        )
    }
}

export default Footer;