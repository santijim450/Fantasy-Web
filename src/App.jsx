import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Salon from './pages/Salon';
import Mesas from './pages/Mesas';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/salon" element={<Salon />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/colecciones" element={<Mesas />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App;
