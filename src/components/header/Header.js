import React, { Component } from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import menuPic from '../../images/menuHamburger.png';
import { Link } from 'react-router-dom';
import MenuDropdown from '../menuDropdown/MenuDropdown';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headerMenuDisplay: 'none'
        }
    }

    //this function changes the display properties of the menu; it's passed down to the child (MenuDropdown) for its use too
    menuDisplayChange = () => {
        let desiredDisplay = (this.state.headerMenuDisplay === 'none') ? 'block' : 'none';
        this.setState({
            headerMenuDisplay: desiredDisplay
        })
    }

    render() {
        return (
            <div>
                <div className="header-container">
                    <img src={logo} alt="JYL logo" className="header-image"/>
                    <p className="header-mobile">John</p>
                    <p className="header-screen"><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></p>
                    <p className="header-screen"><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></p>
                    <p className="header-screen"><Link to='/journal' style={{ textDecoration: 'none' }}>Journal</Link></p>
                    <p className="header-screen"><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></p>
                    <img src={menuPic} alt="menu icon" className="header-image header-mobile" onClick={this.menuDisplayChange}/>
                </div>
                <div style={{display:this.state.headerMenuDisplay}}>
                    <MenuDropdown menuDisplayChange={this.menuDisplayChange}/>
                </div>
            </div>
        )
    }
}

export default Header;