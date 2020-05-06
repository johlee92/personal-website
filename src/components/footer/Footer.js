import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <span></span>
                <span></span>
                <span>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>Contact</Link>
                </span>
            </div>
        )
    }
}

export default Footer;