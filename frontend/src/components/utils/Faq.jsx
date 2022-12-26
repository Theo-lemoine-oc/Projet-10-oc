import React from 'react';
import { useState } from 'react';

import chevron from '../../assets/img/chevron.svg';
import './faq.css';


export const Faq = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    function toggle(e) {
        setIsOpened(isOpened => !isOpened);
        
        const chevron = e.target.lastChild;
        !chevron.classList.contains("rotate") ? chevron.classList.add("rotate") : chevron.classList.remove("rotate");
    }
    return (
        <div className='faq-component'>
            <div className='faq-title' id='faq-title' onClick={toggle}>
                <h2>{ props.title }</h2>
                <img src={chevron} alt="Chevron" />
            </div>
            {isOpened && (
                <p className='faq-content'>{ props.content }</p>
            )}
        </div>
    )
}