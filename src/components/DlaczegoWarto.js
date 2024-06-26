import React from 'react'
import './DlaczegoWarto.scss'
import BestPrice from '../images/best-price.avif'
import RoadMap from '../images/road-map.avif'
import HairCut from '../images/hair-cut.avif'
import Consulting from '../images/consulting.avif'
import Credit from '../images/credit.avif'
import Scale from '../images/weight-gain.avif'


const DlaczegoWarto = () => {
    return (
        <div className='Hair-trade-dlaczego-warto'>
            <h2> Dlaczego warto z nami współpracować?</h2>
            <div className='kafle-grid'>
                <div className='kafelek'>
                    <img src={BestPrice} alt='Najlepsze ceny skupu' className='deco-icon' />
                    <span className='icon-text'>Najlepsze <br />ceny skupu</span>
                </div>
                <div className='kafelek'>
                    <img src={RoadMap} alt='Zwrot kosztów transportu' className='deco-icon' />
                    <span className='icon-text'>Zwrot kosztów <br />transportu</span>
                </div>
                <div className='kafelek'>
                    <img src={HairCut} alt='55 zł zwrotu za usługi fryzjerskie' className='deco-icon' />
                    <span className='icon-text'>55 zł zwrotu za <br />usługi fryzjerskie</span>
                </div>
                <div className='kafelek'>
                    <img src={Consulting} alt='Opieka konsultanta na każdym etapie' className='deco-icon' />
                    <span className='icon-text'>Opieka konsultanta <br/> na każdym etapie</span>
                </div>
                <div className='kafelek'>
                    <img src={Credit} alt='Niezwłocznie dokonujemy płatności' className='deco-icon' />
                    <span className='icon-text'>Niezwłocznie <br />dokonujemy płatności</span>
                </div>
                <div className='kafelek'>
                    <img src={Scale} alt='Płacimy za każdy gram włosów' className='deco-icon' />
                    <span className='icon-text'>Płacimy za każdy <br />gram włosów</span>
                </div>
            </div>
            <div id='pytania-i-odpowiedzi'></div>
        </div>
    )
}

export default DlaczegoWarto