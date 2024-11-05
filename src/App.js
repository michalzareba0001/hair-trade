import './App.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import PolitykaPrywatnosci from './pages/PolitykaPrywatnosci';
import Regulamin from './pages/Regulamin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main className='App-main'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/polityka-prywatnosci" element={<PolitykaPrywatnosci />} />
          </Routes>
        </main>
        <footer className='App-footer'>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
