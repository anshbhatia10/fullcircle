import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-soft-clay pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-display text-3xl text-warm-cream mb-6">Full Circle</h2>
            <p className="font-serif italic text-lg opacity-80 mb-6">
              "My body is a temple; when I leave it, I leave the doors open for someone else to find shelter."
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-terra-cotta mb-6">Navigation</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-warm-cream transition-colors">Home</Link></li>
              <li><Link to="/mission" className="hover:text-warm-cream transition-colors">Mission</Link></li>
              <li><Link to="/services" className="hover:text-warm-cream transition-colors">Our Services</Link></li>
              <li><Link to="/partners" className="hover:text-warm-cream transition-colors">Partners</Link></li>
              <li><Link to="/pledge" className="hover:text-warm-cream transition-colors">The Pledge</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-terra-cotta mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>New Delhi, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+91 987 654 3210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span>care@fullcircle.com</span>
              </li>
            </ul>
          </div>

          <div>
             <h3 className="uppercase tracking-widest text-xs font-bold text-terra-cotta mb-6">Social</h3>
             <div className="flex space-x-4">
               <a href="https://instagram.com/fullcircle369" target="_blank" rel="noreferrer" className="p-2 border border-soft-clay rounded-full hover:bg-soft-clay hover:text-charcoal transition-all">
                 <Instagram size={20} />
               </a>
               <a href="#" className="p-2 border border-soft-clay rounded-full hover:bg-soft-clay hover:text-charcoal transition-all">
                 <Facebook size={20} />
               </a>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Full Circle Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;