import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Circle, Aperture } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Links from the Old Website (Turn 3)
  const navLinks = [
    { label: 'Screening', path: '/screening-circle' },
    { label: 'PCP', path: '/full-circle-pcp' },
    { label: 'Aesthetics', path: '/aesthetic-circle' },
    { label: 'Mission', path: '/inverted-tree' },
    { label: 'The Pledge', path: '/pledge' },
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-bronze-dark border-b border-white/5 pt-4 pb-4 transition-all duration-300 shadow-xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16 relative">
            
            {/* Left: Navigation Links */}
            <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                      location.pathname === link.path ? 'text-accent-orange' : 'text-cream/70 hover:text-accent-orange'
                    }`}
                  >
                    {link.label}
                  </Link>
                  {index < navLinks.length - 1 && <div className="h-4 w-[1px] bg-white/10"></div>}
                </React.Fragment>
              ))}
            </div>

            {/* Mobile Menu Button (Left aligned on mobile) */}
            <div className="xl:hidden">
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
              {/* Old website didn't have 'The Pledge' button in header in Turn 3, but did in Turn 19 git show? 
                  Turn 3 Navbar had 'Book Now'. I'll stick to 'Book Appointment'. */}
            </div>

             {/* Mobile Right */}
             <div className="md:hidden">
                <Link to="/appointment" className="text-[10px] font-bold uppercase border border-cream/20 bg-cream text-bronze-dark rounded-full px-4 py-2">Book</Link>
             </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-bronze-dark z-[60] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 xl:hidden pt-28 px-8 overflow-y-auto pb-10`}>
        <div className="flex flex-col space-y-6 items-center text-center">
          <Link to="/" onClick={toggleMenu} className="text-4xl font-display text-cream hover:text-accent-orange">Home</Link>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={toggleMenu} 
              className="text-4xl font-display text-cream hover:text-accent-orange"
            >
              {link.label}
            </Link>
          ))}
          
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