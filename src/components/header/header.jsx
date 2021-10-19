import React from 'react'

import {Link} from "react-router-dom";

import './header.scss';
import Menu from '../menu/Menu';
function Header() {
    return (
        <div className="header">
            <div className="horizontal">
                <div className="menu-icon"></div>
                <Link to="/">Home</Link>
                <Link to="/sancharam">Sancharam</Link>
                <Link to="/episodes">Episodes</Link>
                <Link to="/schedule">Schedule</Link>

                <Link to="/buy/dvd">Buy Books</Link>
                <Link to="/buy/books">Buy Books</Link>
            </div>
            <div className="vertical">
                <div className="logo"></div>
                <div className="social-media">
                    <div className="media"></div>
                    <div className="media"></div>
                    <div className="media"></div>
                    <div className="media"></div>
                </div>
            </div>
            <Menu/>
        </div>
    )
}

export default Header
