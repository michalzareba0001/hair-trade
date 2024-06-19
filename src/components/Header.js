import React from 'react'
import logo from '../images/hairtrade-logo.avif'
import './Header.scss'

const Header = () => {
  return (
    <div className='Hair-trade-header'>
        <a href='#'><img src={logo} alt='hair trade logo' /></a> 
        <nav className='Hair-trade-main-menu'>
            <ul>
               <li><a href='#proces-sprzedazy'>Proces sprzedaży</a></li>
               <li><a href='#dla-kogo'>Dla kogo</a></li> 
               <li><a href='#dlaczego-my'>Dlaczego my</a></li>
               <li><a href='#putania-i-odpowiedzi'>Pytania i odpowiedzi</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header