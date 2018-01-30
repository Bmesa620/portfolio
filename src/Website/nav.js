import './Styles/navbar.css';
import React, { Component } from 'react';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import Entry from '../entry';


class Navbar extends Component{
    render(){
        const logo = require('./Images/BM_Square Logo_White_Final-01.png');
        return(
            <div>
                <nav>
                    <div className="navbar">
                        <div className="container">
                        <Link to ="/" className="logo"><img src={logo}></img></Link>
                            <div className="menu-list">
                                <span className="menu">
                                    
                                    <ul id="navspace">
                                        <Link to ="/" className="homelink" id="navbar"><li>Home</li></Link>
                                        <Link to ="/aboutme" id="navbar"><li>About</li></Link>
                                        <Link to ="/projects" id="navbar"><li>Projects</li></Link>
                                        <Link to ="/contact" id="navbar"><li>Contact</li></Link>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </nav>
                <Entry/>
            </div>
        );
    }
}

export default Navbar;