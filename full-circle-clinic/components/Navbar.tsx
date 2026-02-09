import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Circle, Aperture } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Solid bronze-dark background, removed blur to avoid 'shine' look */}
      <nav className="fixed w-full z-50 bg-bronze-dark border-b border-white/5 pt-4 pb-4 transition-all duration-300 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16 relative">
            
            {/* Left: Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link to="/services" className="font-sans text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase text-cream/70 hover:text-accent-orange transition-colors">
                Services
              </Link>
              
              <div className="h-4 w-[1px] bg-white/10"></div>

              <Link to="/mission" className="font-sans text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase text-cream/70 hover:text-accent-orange transition-colors">
                Mission
              </Link>

              <div className="h-4 w-[1px] bg-white/10"></div>

              <Link to="/partners" className="font-sans text-[10px] lg:text-xs font-bold tracking-[0.2em] uppercase text-cream/70 hover:text-accent-orange transition-colors">
                Partners
              </Link>
            </div>

            {/* Mobile Menu Button (Left aligned on mobile) */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-cream p-2">
                <Menu size={24} />
              </button>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="flex items-center space-x-3 group md:mx-4 lg:mx-8">
               <div className="relative flex items-center justify-center">
                 <Circle size={24} className="text-cream/10 absolute" strokeWidth={1} />
                 <Aperture size={18} className="text-cream animate-spin-slow group-hover:text-accent-orange transition-colors" strokeWidth={1.5} />
               </div>
               <span className="font-display text-xl md:text-2xl lg:text-3xl text-cream tracking-tighter font-bold uppercase whitespace-nowrap">FULL CIRCLE</span>
            </Link>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Link 
                to="/appointment"
                className="px-5 lg:px-6 py-2 border border-cream/20 rounded-full text-cream text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-cream hover:text-bronze-dark transition-all whitespace-nowrap"
              >
                Book Appointment
              </Link>
              <Link 
                to="/pledge"
                className="px-6 lg:px-8 py-2 bg-cream text-bronze-dark rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest flex items-center space-x-2 hover:bg-accent-orange hover:text-bronze-dark transition-all shadow-lg"
              >
                <Circle size={8} fill="currentColor" />
                <span>The Pledge</span>
              </Link>
            </div>

             {/* Mobile Right */}
             <div className="md:hidden">
                <Link to="/appointment" className="text-[10px] font-bold uppercase border border-cream/20 bg-cream text-bronze-dark rounded-full px-4 py-2">Book</Link>
             </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bronze-dark z-[60] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 md:hidden pt-28 px-8`}>
        <div className="flex flex-col space-y-8 items-center text-center">
          <Link to="/" onClick={toggleMenu} className="text-5xl font-display text-cream hover:text-accent-orange">Home</Link>
          <Link to="/mission" onClick={toggleMenu} className="text-5xl font-display text-cream hover:text-accent-orange">Mission</Link>
          <Link to="/services" onClick={toggleMenu} className="text-5xl font-display text-cream hover:text-accent-orange">Services</Link>
          <Link to="/partners" onClick={toggleMenu} className="text-5xl font-display text-cream hover:text-accent-orange">Partners</Link>
          <Link to="/pledge" onClick={toggleMenu} className="text-5xl font-display text-cream hover:text-accent-orange">The Pledge</Link>
          
          <div className="pt-10 w-full flex flex-col space-y-4">
            <Link to="/appointment" onClick={toggleMenu} className="w-full py-4 bg-cream text-bronze-dark rounded-full font-bold uppercase tracking-widest">Book Appointment</Link>
          </div>
        </div>
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-cream">
          <X size={40} strokeWidth={1} />
        </button>
      </div>
    </>
  );
};

export default Navbar;