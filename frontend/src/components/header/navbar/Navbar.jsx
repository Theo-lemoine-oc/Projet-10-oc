import React from 'react';
import {Logo} from './Logo.jsx';
import {Tabs} from './Tabs.jsx';
import './navbar.css';


export const Navbar = () => {
    return (
        <nav className='navbar'>
            <Logo />
            <Tabs />
        </nav>
    )
}