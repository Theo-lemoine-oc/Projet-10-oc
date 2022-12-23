import React from 'react';
import logo from '../../../assets/img/logo-kasa.svg';
import './navbar.css';



export const Logo = () => {
    return (
        <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
        </a>
    )
}