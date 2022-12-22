import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../../assets/img/logo-kasa.svg';
import './navbar.css';



export const Logo = () => {
    return (
        <NavLink to="/">
            <img src={logo} className="App-logo" alt="logo" />
        </NavLink>
    )
}