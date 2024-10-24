import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.svg'

function Header() {
    return (
        <header>
            <div className="header-content">
                <img src={logo} alt="Логотип" className="logo"/>
                <h1> RECIPES</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Categories</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                </ul>
            </nav>
        </header>
);
}

export default Header;

