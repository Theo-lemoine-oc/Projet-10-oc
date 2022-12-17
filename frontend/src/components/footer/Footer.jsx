import React from 'react';
import './footer.css';
import logoWhite from '../../assets/img/logo-kasa-white.svg';


export const Footer = () => {
    return (
        <footer>
            <img src={logoWhite} alt="Logo blanc de Kasa" />
            <span>© 2020 Kasa. All rights reserved</span>
        </footer>
    )
}