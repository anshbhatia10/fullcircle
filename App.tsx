import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Partners from './pages/Partners';
import ScreeningCircle from './pages/ScreeningCircle';
import AestheticCircle from './pages/AestheticCircle';
import FullCirclePCP from './pages/FullCirclePCP';
import InvertedTree from './pages/InvertedTree';
import Mission from './pages/Mission';
import Services from './pages/Services';
import Pledge from './pages/Pledge';
import Appointment from './pages/Appointment';

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
            <Route path="/partners" element={<Partners />} />
            <Route path="/services" element={<Services />} />
            <Route path="/screening-circle" element={<ScreeningCircle />} />
            <Route path="/aesthetic-circle" element={<AestheticCircle />} />
            <Route path="/full-circle-pcp" element={<FullCirclePCP />} />
            <Route path="/inverted-tree" element={<InvertedTree />} />
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
