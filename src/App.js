import './App.scss';
import CenyWlosow from './components/CenyWlosow';
import Header from './components/Header';
import Hero from './components/Hero';
import IleWarte from './components/IleWarte';
import Metamorfoza from './components/Metamorfoza';
import Uwaga from './components/Uwaga';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className='App-main'>
        <Hero />
        <Metamorfoza />
        <IleWarte />
        <CenyWlosow />
        <Uwaga />
        <h2>MAIN</h2>
      </main>
      <footer className='App-footer'>
        <h2>FOOTER</h2>
      </footer>
    </div>
  );
}

export default App;
