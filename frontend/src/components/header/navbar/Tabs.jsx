import React from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';



export const Tabs = () => {
    return (
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">À propos</NavLink>
        </nav>
    )
}