import React from 'react'

import {Link} from "react-router-dom";

import './header.scss';
function Header() {
    return (
        <div className="header">
            <div className="horizontal">
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
        </div>
    )
}

export default Header
