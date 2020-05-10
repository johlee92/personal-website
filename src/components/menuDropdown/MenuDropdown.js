import React, { Component } from 'react';
import './MenuDropdown.css';
import { Link } from 'react-router-dom';

class MenuDropdown extends Component {
    // constructor(props){
    //     super(props);
    // }

    //requires the parent to pass in a function to close the menu when its been handled

    render() {
        return (
            <div className="menu-dropdown header-mobile">
                <ul className="menu-dropdown">
                    <Link to='/' style={{ textDecoration: 'none' }}><li className="menu-dropdown" onClick={this.props.menuDisplayChange}>Home</li></Link>
                    <Link to='/about' style={{ textDecoration: 'none' }}><li className="menu-dropdown" onClick={this.props.menuDisplayChange}>About</li></Link>
                    <Link to='/journals' style={{ textDecoration: 'none' }}><li className="menu-dropdown" onClick={this.props.menuDisplayChange}>Journals</li></Link>
                    <Link to='/projects' style={{ textDecoration: 'none' }}><li className="menu-dropdown" onClick={this.props.menuDisplayChange}>Projects</li></Link>
                </ul>
            </div> 
        )
    }
}

export default MenuDropdown;