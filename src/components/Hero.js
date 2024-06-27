import React from 'react'
import './Hero.scss'
import deco from '../images/ht-deco.avif'
import heroImg from '../images/ht-deco-hero.avif'

const Hero = () => {
    return (
        <div className='Hair-trade-hero'>
            <h4>Profesjonalny skup włosów</h4>
            <h1>Odśwież swój wygląd<br />
                i zyskaj dodatkowe środki</h1>
            <p>Najlepsza cena, szybka wycena, natychmiastowa<br /> 
            płatność. Idealne dla młodych ludzi, którzy chcą<br /> 
            zmienić swój styl i uzyskać wynagrodzenie.<br/>
            Już od 40 cm długości
            
            <img src={deco} alt="deco icon" className='deco-icon' />
            </p>
            <div className='mobile-only'>
                <img src={heroImg} alt='modelka z rozpuszczonymi włosami' className='hero-img'/>

            </div>
            <button className='Hair-trade-btn-one'>
                Sprawdź nas
            </button>
            <div id='dla-kogo'>
                
            </div>

        </div>
    )
}

export default Hero