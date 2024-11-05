import React, { useEffect } from 'react';
import './Hero.scss';
import deco from '../images/ht-deco.avif';
import heroImg from '../images/ht-deco-hero.avif';
import heroImgSmall from '../images/ht-deco-hero-small.avif';

const Hero = () => {
    useEffect(() => {
        // Preload heroImg and heroImgSmall using new Image objects
        const imgLarge = new Image();
        imgLarge.src = heroImg;

        const imgSmall = new Image();
        imgSmall.src = heroImgSmall;
    }, []);

    return (
        <div className='Hair-trade-hero'>
            <h4>Profesjonalny skup włosów</h4>
            <h1>Odśwież swój wygląd<br />
                i zyskaj dodatkowe środki</h1>
            <p>Najlepsza cena, szybka wycena, natychmiastowa<br /> 
            płatność. Idealne dla młodych ludzi, którzy chcą<br /> 
            zmienić swój styl i uzyskać wynagrodzenie.<br/>
            Już od 40 cm długości
            
            <img src={deco} alt="deco icon" className='deco-icon'/>
            </p>
            <div className='mobile-only'>
                <picture>
                    <source srcSet={heroImgSmall} media="(max-width: 767px)" />
                    <source srcSet={heroImg} media="(min-width: 768px)" />
                    <img src={heroImg} alt='modelka z rozpuszczonymi włosami' className='hero-img'/>
                </picture>
            </div>
            <a href='#proces-sprzedazy' className='button-link'>
                <button className='Hair-trade-btn-one'>
                    Sprawdź nas
                </button>
            </a>
            <div id='dla-kogo'></div>
        </div>
    );
};

export default Hero;
