import React from 'react';
import bannerAbout from '../../assets/img/banner-about.png';
import './aboutbanner.css';


export const BannerAbout = () => {
    return (
        <section className='banner-about'>
            <div className="overlay"></div>
            <img src={bannerAbout} alt="Bannière about page" />
        </section>
    )
}