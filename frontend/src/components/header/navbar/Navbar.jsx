import React from 'react';
import {Logo} from './Logo.jsx';
import {Tabs} from './Tabs.jsx';
import './navbar.css';


export const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <Tabs />
        </div>
    )
}