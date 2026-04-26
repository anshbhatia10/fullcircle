import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Circle, Aperture, Heart } from 'lucide-react';
import { useTina } from 'tinacms/dist/react';
import globalData from '../content/global/index.json';

const normalizeInternalPath = (path: string) => {
  if (!path) return '/';
  if (/^https?:\/\//i.test(path)) return path;
  return path.startsWith('/') ? path : `/${path}`;
};

const isExternal = (path: string) => /^https?:\/\//i.test(path);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const { data } = useTina({
    query: `{
      global(relativePath: "index.json") {
        navbar {
          logoText
          navLinks {
            label
            path
          }
        }
      }
    }`,
    variables: { relativePath: "index.json" },
    data: { global: globalData },
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const { logoText, navLinks } = data.global.navbar;

  return (
    <>
      <nav className="fixed w-full z-50 bg-[#FAF3F0]/80 backdrop-blur-md border-b border-[#4A314D]/5 pt-4 pb-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-16 relative">
            
            {/* Left: Navigation Links */}
            <div className="hidden xl:flex items-center space-x-4 lg:space-x-6">
              {navLinks.map((link: any, index: number) => {
                const normalizedPath = normalizeInternalPath(link.path);
                const isActive =
                  normalizedPath === '/'
                    ? location.pathname === '/'
                    : location.pathname === normalizedPath || location.pathname.startsWith(`${normalizedPath}/`);
                
                const linkContent = (
                  <span className={`font-sans text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${
                    isActive ? 'text-[#8E5D52]' : 'text-[#4A314D]/70 hover:text-[#8E5D52]'
                  }`}>
                    {link.label}
                  </span>
                );

                return (
                  <React.Fragment key={link.path}>
                    {isExternal(normalizedPath) ? (
                      <a href={normalizedPath} target="_blank" rel="noopener noreferrer">
                        {linkContent}
                      </a>
                    ) : (
                      <Link to={normalizedPath}>
                        {linkContent}
                      </Link>
                    )}
                    {index < navLinks.length - 1 && <div className="h-4 w-[1px] bg-[#4A314D]/10"></div>}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden">
              <button onClick={toggleMenu} className="text-[#4A314D] p-2" aria-expanded={isOpen} aria-label="Toggle menu">
                <Menu size={24} />
              </button>
            </div>

            {/* Center: Logo */}
            <Link to="/" className="flex items-center space-x-3 group md:mx-4 lg:mx-8">
               <div className="relative flex items-center justify-center">
                 <Circle size={24} className="text-[#4A314D]/10 absolute" strokeWidth={1} />
                 <Aperture size={18} className="text-[#4A314D] animate-spin-slow group-hover:text-[#8E5D52] transition-colors" strokeWidth={1.5} />
               </div>
               <span className="font-display text-xl md:text-2xl lg:text-3xl text-[#4A314D] tracking-tighter font-bold uppercase whitespace-nowrap">{logoText}</span>
            </Link>

            {/* Right: Actions */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
              <Link
                to="/pledge"
                className="flex items-center gap-2 px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-all group"
              >
                <Heart size={14} className="group-hover:fill-current" />
                <span>The Pledge</span>
              </Link>
              <Link
                to="/appointment"
                className="px-5 lg:px-6 py-2 border border-[#4A314D]/20 rounded-full text-[#4A314D] text-[10px] lg:text-xs font-bold uppercase tracking-widest hover:bg-[#4A314D] hover:text-white transition-all whitespace-nowrap"
              >
                Book Appointment
              </Link>
            </div>

             <div className="md:hidden flex items-center gap-2">
                <Link to="/pledge" className="p-2 bg-accent-orange/10 text-accent-orange rounded-full">
                  <Heart size={18} fill="currentColor" />
                </Link>
                <Link to="/appointment" className="text-[10px] font-bold uppercase border border-[#4A314D]/20 bg-[#4A314D] text-white rounded-full px-4 py-2">Book</Link>
             </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#FAF3F0] z-[60] transform ${isOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'} transition-transform duration-500 xl:hidden pt-28 px-8 overflow-y-auto pb-10`}>
        <div className="flex flex-col space-y-6 items-center text-center">
          <Link to="/" onClick={toggleMenu} className="text-4xl font-display text-[#4A314D] hover:text-[#8E5D52]">Home</Link>
          {navLinks.map((link) => {
            const normalizedPath = normalizeInternalPath(link.path);
            return isExternal(normalizedPath) ? (
              <a
                key={link.path}
                href={normalizedPath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
                className="text-4xl font-display text-[#4A314D] hover:text-[#8E5D52]"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.path} 
                to={normalizedPath}
                onClick={toggleMenu} 
                className="text-4xl font-display text-[#4A314D] hover:text-[#8E5D52]"
              >
                {link.label}
              </Link>
            );
          })}
          
          <div className="pt-10 w-full flex flex-col space-y-4">
            <Link to="/pledge" onClick={toggleMenu} className="w-full py-4 bg-accent-orange text-white rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2">
              <Heart size={18} fill="white" />
              <span>Sign The Pledge</span>
            </Link>
            <Link to="/appointment" onClick={toggleMenu} className="w-full py-4 bg-[#4A314D] text-white rounded-full font-bold uppercase tracking-widest text-sm">Book Appointment</Link>
          </div>
        </div>
        <button onClick={toggleMenu} className="absolute top-8 right-8 text-[#4A314D]">
          <X size={40} strokeWidth={1} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
