import React from 'react';
import Hero from '../components/Hero';
import Metamorfoza from '../components/Metamorfoza';
import IleWarte from '../components/IleWarte';
import CenyWlosow from '../components/CenyWlosow';
import Formularz from '../components/Formularz';
import Uwaga from '../components/Uwaga';
import DlaczegoWarto from '../components/DlaczegoWarto';
import Kontakt from '../components/Kontakt';
import './HomePage.scss';

const HomePage = () => {
  return (
    <div className='Hair-trade-home-page'>
      <Hero />
      <Metamorfoza />
      <IleWarte />
      <CenyWlosow />
      <Uwaga />
      <Formularz />
      <DlaczegoWarto />
      <Kontakt />
    </div>
  );
}

export default HomePage;
