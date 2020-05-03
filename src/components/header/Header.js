import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import menuPic from '../../images/menuHamburger.png';

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <img src={logo} alt="JYL logo" className="header-image"/>
                <p>John</p>
                <img src={menuPic} alt="JYL logo" className="header-image"/>
            </div>
        )
    }
}

export default Header;