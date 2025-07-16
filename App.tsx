import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import FarmaciePage from './pages/FarmaciePage';
import BarRistorantiPage from './pages/BarRistorantiPage';
import AutomotivePage from './pages/AutomotivePage';
import RetailPage from './pages/RetailPage';
import MediciPage from './pages/MediciPage';
import AgenzePage from './pages/AgenzePage';
import EsteticaPage from './pages/EsteticaPage';
import SupermercatiPage from './pages/SupermercatiPage';
import ContattiPage from './pages/ContattiPage';
import './index.css';

// Component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<><ScrollToTop /><HomePage /></>} />
          <Route path="/farmacie" element={<><ScrollToTop /><FarmaciePage /></>} />
          <Route path="/bar-ristoranti" element={<><ScrollToTop /><BarRistorantiPage /></>} />
          <Route path="/automotive" element={<><ScrollToTop /><AutomotivePage /></>} />
          <Route path="/retail" element={<><ScrollToTop /><RetailPage /></>} />
          <Route path="/medici" element={<><ScrollToTop /><MediciPage /></>} />
          <Route path="/agenzie" element={<><ScrollToTop /><AgenzePage /></>} />
          <Route path="/estetica" element={<><ScrollToTop /><EsteticaPage /></>} />
          <Route path="/supermercati" element={<><ScrollToTop /><SupermercatiPage /></>} />
          <Route path="/contatti" element={<><ScrollToTop /><ContattiPage /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;