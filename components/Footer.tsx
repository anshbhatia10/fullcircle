import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone, Heart } from 'lucide-react';
import globalData from '../content/global/index.json';

const normalizeInternalPath = (path: string) => {
  if (!path) return '/';
  if (/^https?:\/\//i.test(path)) return path;
  return path.startsWith('/') ? path : `/${path}`;
};

const Footer: React.FC = () => {
  const { footer, navbar } = globalData;

  return (
    <footer className="bg-dark-brown text-cream pt-24 pb-12 px-6 relative overflow-hidden">
       {/* Background subtle noise/texture */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

       <div className="max-w-7xl mx-auto relative z-10">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
           
           <div className="col-span-1 lg:col-span-2 space-y-8">
              <Link to="/" className="inline-block">
                <span className="font-display text-4xl tracking-tighter font-bold uppercase">{navbar.logoText}</span>
              </Link>
              <p className="font-serif italic text-xl text-cream/60 max-w-md leading-relaxed">
                "{footer.quote}"
              </p>
              <p className="text-sm text-cream/40 max-w-sm leading-relaxed">
                {footer.description}
              </p>
              <div className="flex items-center gap-4 pt-4">
                <a href={footer.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-cream hover:text-dark-brown transition-all group">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href={footer.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-cream/10 flex items-center justify-center hover:bg-cream hover:text-dark-brown transition-all group">
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
           </div>

           <div>
              <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-accent-orange mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navbar.navLinks.map((link: any) => (
                  <li key={link.path}>
                    <Link to={normalizeInternalPath(link.path)} className="text-sm text-cream/60 hover:text-cream transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/dr-prerna-kumar" className="text-sm text-cream/60 hover:text-cream transition-colors">Meet Partners</Link>
                </li>
                <li>
                  <Link to="/pledge" className="text-sm text-cream/60 hover:text-cream transition-colors">The Pledge</Link>
                </li>
              </ul>
           </div>

           <div>
              <h4 className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-accent-orange mb-8">Connect</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <MapPin size={18} className="text-cream/40 shrink-0" />
                  <span className="text-sm text-cream/60 leading-relaxed">Full Circle Consciousness Clinic, Gurgaon, India</span>
                </li>
                <li className="flex items-center gap-4">
                   <Phone size={18} className="text-cream/40 shrink-0" />
                   <span className="text-sm text-cream/60">+91 9910930108</span>
                </li>
                <li className="pt-4">
                  <Link to="/appointment" className="inline-flex items-center gap-2 bg-cream text-dark-brown px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-all">
                    Book Appointment
                  </Link>
                </li>
              </ul>
           </div>

         </div>

         <div className="pt-12 border-t border-cream/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-cream/20">
              © 2026 Full Circle Clinic. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/20">Made with</span>
              <Heart size={10} className="text-accent-orange/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/20">for health</span>
            </div>
         </div>
       </div>
    </footer>
  );
};

export default Footer;
