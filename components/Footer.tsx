import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-brown text-cream pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="col-span-1">
            <h2 className="font-display text-3xl text-cream mb-6 uppercase tracking-tighter">Full Circle</h2>
            <p className="font-serif italic text-lg text-cream/70 mb-6">
              "My body is a temple; when I leave it, I leave the doors open for someone else to find shelter."
            </p>
          </div>

          <div className="flex flex-col md:items-center">
            <h3 className="uppercase tracking-[0.2em] text-[10px] font-black text-accent-orange mb-6">Navigation</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-widest text-cream/60">
              <li><Link to="/" className="hover:text-accent-orange transition-colors">Home</Link></li>
              <li><Link to="/pledge" className="hover:text-accent-orange transition-colors">The Pledge</Link></li>
              <li><Link to="/appointment" className="hover:text-accent-orange transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          <div className="flex flex-col md:items-end">
             <h3 className="uppercase tracking-[0.2em] text-[10px] font-black text-accent-orange mb-6">Connect</h3>
             <div className="flex space-x-4 mb-8">
               <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-accent-orange hover:text-dark-brown transition-all">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-accent-orange hover:text-dark-brown transition-all">
                 <Facebook size={20} />
               </a>
             </div>
             <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-cream/40">
               <Heart size={12} className="text-red-500" />
               <span>Healing Beyond the Physical</span>
             </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-cream/30">
          <p>&copy; {new Date().getFullYear()} Full Circle Clinic. A Revolution in Medicine.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="cursor-pointer hover:text-accent-orange transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-accent-orange transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;