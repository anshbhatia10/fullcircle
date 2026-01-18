import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Circle, Aperture } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed w-full z-50 bg-cream/95 backdrop-blur-md border-b border-dark-brown/10 pt-4 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16 relative">
            <Link to="/" className="flex items-center space-x-3 group">
               <div className="relative flex items-center justify-center">
                 <Circle size={24} className="text-dark-brown/20 absolute" strokeWidth={1} />
                 <Aperture size={18} className="text-dark-brown animate-spin-slow group-hover:text-accent-orange transition-colors" strokeWidth={1.5} />
               </div>
               <span className="font-display text-xl md:text-2xl lg:text-3xl text-dark-brown tracking-tighter font-bold uppercase whitespace-nowrap">FULL CIRCLE</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/pledge" className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase hover:text-accent-orange transition-colors">The Pledge</Link>
              <Link to="/appointment" className="px-6 py-2 bg-dark-brown text-cream rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-orange transition-all">Book Appointment</Link>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-dark-brown p-2"><Menu size={24} /></button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-cream z-[60] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 md:hidden pt-28 px-8`}>
        <div className="flex flex-col space-y-8 items-center text-center">
          <Link to="/" onClick={toggleMenu} className="text-5xl font-display text-dark-brown">Home</Link>
          <Link to="/pledge" onClick={toggleMenu} className="text-5xl font-display text-dark-brown">The Pledge</Link>
          <Link to="/appointment" onClick={toggleMenu} className="w-full py-4 bg-dark-brown text-cream rounded-full font-bold uppercase tracking-widest">Book Appointment</Link>
        </div>
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-dark-brown"><X size={40} strokeWidth={1} /></button>
      </div>
    </>
  );
};

export default Navbar;