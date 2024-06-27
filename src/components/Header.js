import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/hairtrade-logo.avif';
import './Header.scss';


const Header = () => {
  const [menuActive, isMenuActive] = useState(false);

  const handleMenu = () =>{
    if (menuActive){
      isMenuActive(false)
    }
    else {
      isMenuActive(true)
    }

  }
  return (
    <div className='Hair-trade-header'>
      <Link to='/'><img src={logo} alt='hair trade logo' /></Link>
      <nav className={`Hair-trade-main-menu ${menuActive ? 'menu-active' : ''}`}>
        <ul>
          <li><Link to='/#proces-sprzedazy' onClick={() => console.log('Proces sprzedaży clicked')}>Proces sprzedaży</Link></li>
          <li><Link to='/#dla-kogo'>Dla kogo</Link></li>
          <li><Link to='/#dlaczego-my'>Dlaczego my</Link></li>
          <li><Link to='/#pytania-i-odpowiedzi'>Pytania i odpowiedzi</Link></li>
        </ul>
      </nav>
      <div className='mobile-only'>
        <div className={`hamburger-menu ${menuActive ? 'hamburger-menu-active' : ''}`} onClick={handleMenu}>
          <div className='bar1'></div>
          <div className='bar2'></div>
          <div className='bar3'></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
