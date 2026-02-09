import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Partners from './pages/Partners';
import Pledge from './pages/Pledge';
import Appointment from './pages/Appointment';
import Mission from './pages/Mission';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-cream font-sans text-dark-brown overflow-x-hidden selection:bg-accent-orange selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/pledge" element={<Pledge />} />
            <Route path="/appointment" element={<Appointment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;