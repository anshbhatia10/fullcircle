import React from 'react';
import { Instagram, Facebook, Heart, Circle } from 'lucide-react';
import { useTina } from 'tinacms/dist/react';
import { Link } from 'react-router-dom';
import globalData from '../content/global/index.json';

const Footer: React.FC = () => {
  const { data } = useTina({
    query: `{
      global(relativePath: "index.json") {
        footer {
          quote
          description
          instagram
          facebook
        }
      }
    }`,
    variables: { relativePath: "index.json" },
    data: { global: globalData },
  });

  const { quote, description, instagram, facebook } = data.global.footer;

  return (
    <footer className="bg-[#B5838D] text-[#FAF3F0] pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="flex items-center gap-2 mb-6">
                <Circle size={24} strokeWidth={2} className="text-[#FAF3F0]" />
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-[#FAF3F0]">Full Circle</span>
            </Link>
            <p className="font-serif italic text-lg text-[#FAF3F0]/80 mb-6 max-w-md">
              "{quote}"
            </p>
            <p className="text-[#FAF3F0]/60 text-sm leading-relaxed max-w-md font-sans">
               {description}
            </p>
          </div>

          <div>
            <h3 className="uppercase tracking-widest text-xs font-bold text-[#FAF3F0] mb-6 opacity-80">Navigation</h3>
            <ul className="space-y-4 font-sans text-sm">
              <li><Link to="/screening-circle" className="hover:text-white transition-colors">Screening Circle</Link></li>
              <li><Link to="/full-circle-pcp" className="hover:text-white transition-colors">Full Circle PCP</Link></li>
              <li><Link to="/aesthetic-circle" className="hover:text-white transition-colors">Aesthetic Circle</Link></li>
              <li><Link to="/inverted-tree" className="hover:text-white transition-colors">Mission</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Meet Partners</Link></li>
              <li><Link to="/pledge" className="hover:text-white transition-colors font-bold text-white">The Pledge</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="uppercase tracking-widest text-xs font-bold text-[#FAF3F0] mb-6 opacity-80">Connect</h3>
             <div className="flex space-x-4 mb-8">
               <a href={instagram} target="_blank" rel="noreferrer" className="p-2 border border-[#FAF3F0]/30 rounded-full hover:bg-[#FAF3F0] hover:text-[#B5838D] transition-all">
                 <Instagram size={20} />
               </a>
               <a href={facebook} target="_blank" rel="noreferrer" className="p-2 border border-[#FAF3F0]/30 rounded-full hover:bg-[#FAF3F0] hover:text-[#B5838D] transition-all">
                 <Facebook size={20} />
               </a>
             </div>
             <div className="mt-8">
                <Link to="/appointment" className="inline-block px-6 py-3 border border-[#FAF3F0] text-[#FAF3F0] rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#FAF3F0] hover:text-[#B5838D] transition-all">
                   Book Appointment
                </Link>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60 font-sans">
          <p>&copy; {new Date().getFullYear()} Full Circle Clinic. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center gap-1 uppercase tracking-widest">
             <span>Made with</span>
             <Heart size={10} className="text-white fill-white" />
             <span>for Health</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
