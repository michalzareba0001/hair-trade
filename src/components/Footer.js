import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';
import './Footer.scss';
import HairTradeLogo from '../images/hairtrade-logo.avif';

const Footer = () => {
    return (
        <div className='Hair-trade-footer'>
            <div className='footer-grid'>
                <div className='footer-col'>
                    <a href='/'><img src={HairTradeLogo} alt='Hair trade logo' className='hair-trade-logo' /></a>
                    <p>Najlepsze ceny skupu <br />włosów w Polsce. <br />Profesjonalna obsługa i zadowolenie klienta</p>
                </div>
                <div className='footer-col'>
                    <nav className='Hair-trade-footer-menu-one'>
                        <ul>
                            <li><Link to='/#proces-sprzedazy'>Proces sprzedaży</Link></li>
                            <li><Link to='/#dla-kogo'>Dla kogo</Link></li>
                            <li><Link to='/#dlaczego-my'>Dlaczego my</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-col'>
                    <nav className='Hair-trade-footer-menu-two'>
                        <ul>
                            <li><a href='/path/to/pdf1.pdf' target='_blank' rel='noopener noreferrer'>Umowa kupna - sprzedaży</a></li>
                            <li><a href='/path/to/pdf2.pdf' target='_blank' rel='noopener noreferrer'>Instrukcja ścięcia włosów</a></li>
                            <li><a href='/path/to/pdf3.pdf' target='_blank' rel='noopener noreferrer'>Instrukcja pakowania włosów</a></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-col'>
                    <nav className='Hair-trade-footer-menu-three'>
                        <ul>
                            <li><RouterLink to='/regulamin'>Regulamin</RouterLink></li>
                            <li><RouterLink to='/polityka-prywatnosci'>Polityka prywatności</RouterLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='footer-col'>
                    <h4>Kontakt:</h4>
                    <h5>tel. od pon- pn 9:00-16:00</h5>
                    <a href='tel:+48505505505'><span className='small-text'>+48 505 505 505</span></a>
                    <a href='mailto:biuro@hairtrade.pl'><span className='small-text'>e-mail: biuro@hairtrade.pl</span></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
