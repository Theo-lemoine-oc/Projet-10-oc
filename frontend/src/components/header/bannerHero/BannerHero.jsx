import React from 'react';
import bannerHero from '../../../assets/img/bannerhero-wallpaper.png';
import './bannerHero.css';


export const BannerHero = () => {
    return (
        <section className='banner-hero'>
            <img src={bannerHero} alt="Fond avec des montagnes pour la bannière du site" />
            <div class="banner-hero_title">
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </section>
    )
}