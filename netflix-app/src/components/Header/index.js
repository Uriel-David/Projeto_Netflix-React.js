import React from 'react';
import './Header.css';

const Header = ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="netflix_logo.svg" alt="logo" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="user.png" alt="user" />
                </a>
            </div>
        </header>
    );
}

export default Header;
