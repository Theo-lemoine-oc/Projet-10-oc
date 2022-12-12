import React from 'react';
import './locations.css';


export const Cards = ({ image, title }) => {
    return (
        <div className='thumb'>
            <img src={ image } alt="" />
            <div className='thumb-overlay'></div>
            <h2>{ title }</h2>
        </div>
    )
}