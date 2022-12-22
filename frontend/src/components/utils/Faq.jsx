import React from 'react';
import chevron from '../../assets/img/chevron.svg';
import './faq.css';


export const Faq = (props) => {
    const isActive = (e) => {
        e.preventDefault();
        const button = e.target.nextSibling;
        const chevron = e.target.lastChild;
    
        if (!button.classList.contains("show")) {
            button.classList.add("show");
            chevron.classList.add("rotate");
        } else {
            button.classList.remove("show");
            chevron.classList.remove("rotate");
        }
      };
    
    return (
        <div className='faq-component'>
            <div className='faq-title' id='faq-title' onClick={isActive}>
                <h2>{ props.title }</h2>
                <img src={chevron} alt="Chevron" />
            </div>
            <p className='faq-content'>{ props.content }</p>
        </div>
    )
}