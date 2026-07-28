import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Salon from './pages/Salon';
import Mesas from './pages/Mesas';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/salon" element={<Salon />} />
        <Route path="/mesas" element={<Mesas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
