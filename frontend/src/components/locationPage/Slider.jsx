import React from 'react';
import { useState } from 'react';
import './locationPage.css';

import arrowLeft from '../../assets/img/leftArrow.svg'
import arrowRight from '../../assets/img/rightArrow.svg'


export const Slider = ({slides}) => {    
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    return (
        <div className='slider'>
            {slides.map((picture, index) => {
                return (
                <div
                    key={index}
                    className={
                    index === current
                        ? "slide slider-active_picture"
                        : "slide slider-inactive_picture"
                    }
                >
                    {index === current && (
                    <img src={picture} alt="" className="slider-picture" />
                    )}
                </div>
                );
            })}
            {length > 1 ? (
                <>
                    <div className="slider-previous" onClick={prevSlide}>
                        <img src={arrowLeft} alt="" className="slider-previous_icon" />
                    </div>
                    <div className="slider-next" onClick={nextSlide}>
                        <img src={arrowRight} alt="" className="slider-next_icon" />
                    </div>
                </>
            ) : null}
        </div>
    )
}