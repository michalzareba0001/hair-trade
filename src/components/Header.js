import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/hairtrade-logo.avif';
import './Header.scss';

const Header = () => {
  return (
    <div className='Hair-trade-header'>
      <Link to='/'><img src={logo} alt='hair trade logo' /></Link> 
      <nav className='Hair-trade-main-menu'>
        <ul>
          <li><Link to='/#proces-sprzedazy' onClick={() => console.log('Proces sprzedaży clicked')}>Proces sprzedaży</Link></li>
          <li><Link to='/#dla-kogo'>Dla kogo</Link></li> 
          <li><Link to='/#dlaczego-my'>Dlaczego my</Link></li>
          <li><Link to='/#pytania-i-odpowiedzi'>Pytania i odpowiedzi</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
