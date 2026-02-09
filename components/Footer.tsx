import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart, Circle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bronze-dark text-clay pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <Circle size={24} strokeWidth={2} className="text-accent-orange" />
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-cream">Full Circle</span>
            </div>
            <p className="font-serif italic text-lg text-cream/70 mb-6 max-w-md">
              "My body is a temple; when I leave it, I leave the doors open for someone else to find shelter."
            </p>
            <p className="text-cream/60 text-sm leading-relaxed max-w-md font-sans">
               We bridge evidence-based protocol with ancient wisdom to provide a complete health map for your life.
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-accent-orange mb-6">Navigation</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link to="/screening-circle" className="hover:text-cream transition-colors">Screening Circle</Link></li>
              <li><Link to="/full-circle-pcp" className="hover:text-cream transition-colors">Full Circle PCP</Link></li>
              <li><Link to="/aesthetic-circle" className="hover:text-cream transition-colors">Aesthetic Circle</Link></li>
              <li><Link to="/inverted-tree" className="hover:text-cream transition-colors">Mission</Link></li>
              <li><Link to="/pledge" className="hover:text-cream transition-colors">The Pledge</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="uppercase tracking-widest text-xs font-bold text-accent-orange mb-6">Connect</h3>
             <div className="flex space-x-4 mb-8">
               <a href="https://instagram.com/fullcircle369" target="_blank" rel="noreferrer" className="p-2 border border-clay/30 rounded-full hover:bg-cream hover:text-bronze-dark transition-all">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-2 border border-clay/30 rounded-full hover:bg-cream hover:text-bronze-dark transition-all">
                 <Facebook size={20} />
               </a>
             </div>
             <div className="mt-8">
                <Link to="/appointment" className="inline-block px-6 py-3 border border-accent-orange text-accent-orange rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-all">
                   Book Appointment
                </Link>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 font-sans">
          <p>&copy; {new Date().getFullYear()} Full Circle Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-1 uppercase tracking-widest">
             <span>Made with</span>
             <Heart size={10} className="text-accent-orange fill-accent-orange" />
             <span>for Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;