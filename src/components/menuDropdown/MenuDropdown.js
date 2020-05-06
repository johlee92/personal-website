import React, { Component } from 'react';
import './MenuDropdown.css';
import { Link } from 'react-router-dom';

class MenuDropdown extends Component {
    constructor(props){
        super(props);
    }

    //requires the parent to pass in a function to close the menu when its been handled

    render() {
        return (
            <div className="menu-dropdown header-mobile">
                <ul className="menu-dropdown">
                    <li className="menu-dropdown" onClick={this.props.menuDisplayChange}><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></li>
                    <li className="menu-dropdown" onClick={this.props.menuDisplayChange}><Link to='/about' style={{ textDecoration: 'none' }}>About</Link></li>
                    <li className="menu-dropdown" onClick={this.props.menuDisplayChange}><Link to='/journal' style={{ textDecoration: 'none' }}>Journal</Link></li>
                    <li className="menu-dropdown" onClick={this.props.menuDisplayChange}><Link to='/projects' style={{ textDecoration: 'none' }}>Projects</Link></li>
                </ul>
            </div> 
        )
    }
}

export default MenuDropdown;