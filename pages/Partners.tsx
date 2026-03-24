import React from 'react';
import { Link } from 'react-router-dom';
import drImage from '../1456482892.jpg';

const Partners: React.FC = () => {
  return (
    <div className="bg-[#FAF3F0] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#8E5D52] uppercase tracking-widest font-black text-xs italic">Closing the Gap</span>
          <h1 className="font-display text-6xl md:text-8xl text-[#4A314D] mt-4 mb-8">Meet Our Partners</h1>
          <p className="text-[#4A314D]/40 uppercase tracking-[0.3em] font-bold text-xs">Prevention - Intervention - Transition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Partner 1 - Dr NK Sharma */}
          <div className="bg-white p-12 rounded-[3rem] border border-[#4A314D]/5 shadow-sm text-center flex flex-col items-center group transition-all hover:shadow-2xl">
            <Link to="/dr-nk-sharma" className="w-48 h-48 bg-[#FAF3F0] rounded-full mb-10 overflow-hidden relative shadow-lg ring-8 ring-[#FAF3F0]">
               <img 
                src={drImage} 
                alt="Dr. N.K. Sharma" 
                className="w-full h-full object-cover transition-all duration-700 scale-110" 
              />
            </Link>
            <h3 className="font-display text-3xl text-[#4A314D] mb-2">Dr. N.K. Sharma</h3>
            <span className="text-[#B5838D] uppercase tracking-widest font-black text-[10px] mb-6 block">Reiki Master & Naturopath</span>
            <p className="text-[#4A314D]/70 leading-relaxed text-sm mb-8">
              A world-renowned authority on Reiki and Naturopathy, bringing deep spiritual wisdom to clinical diagnostics. Founder of the Reiki Healing Foundation.
            </p>
            <Link to="/dr-nk-sharma" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-[#4A314D] pb-1 hover:text-[#B5838D] hover:border-[#B5838D] transition-all text-[#4A314D]">Read Biography</Link>
          </div>

          {/* Partner 2 */}
          <div className="bg-[#B5838D] p-12 rounded-[3rem] text-white shadow-2xl text-center flex flex-col items-center transform md:-translate-y-8">
            <div className="w-48 h-48 bg-white/10 rounded-full mb-10 overflow-hidden ring-8 ring-white/5">
               <img src="https://picsum.photos/400/400?random=21" alt="The Intensivist" className="w-full h-full object-cover opacity-90" />
            </div>
            <h3 className="font-display text-3xl text-white mb-2">The Intensivist</h3>
            <span className="text-white/80 uppercase tracking-widest font-black text-[10px] mb-6 block italic">Critical Care Expert</span>
            <p className="text-white/70 leading-relaxed text-sm">
              An expert in critical care who ensures the highest level of medical intervention for acute patients, while advocating for a human-centered approach.
            </p>
          </div>

          {/* Partner 3 */}
          <div className="bg-white p-12 rounded-[3rem] border border-[#4A314D]/5 shadow-sm text-center flex flex-col items-center group hover:shadow-2xl transition-all">
            <div className="w-48 h-48 bg-[#FAF3F0] rounded-full mb-10 overflow-hidden ring-8 ring-[#FAF3F0] shadow-lg">
               <img src="https://picsum.photos/400/400?random=22" alt="The Transplant Nephrologist" className="w-full h-full object-cover opacity-90" />
            </div>
            <h3 className="font-display text-3xl text-[#4A314D] mb-2">Dr. Prerna</h3>
            <span className="text-[#8E5D52] uppercase tracking-widest font-black text-[10px] mb-6 block italic">Transplant Nephrologist</span>
            <p className="text-[#4A314D]/70 leading-relaxed text-sm">
              USA Board certified Internal medicine, nephrologist and a transplant nephrologist. A passionate advocate for organ donation, working to make India an "OPT-OUT" nation.
            </p>
          </div>

        </div>

        <div className="mt-32 p-20 bg-[#4A314D] text-[#FAF3F0] rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
             <h2 className="font-display text-5xl md:text-7xl mb-8">Full Circle is a Revolution!</h2>
             <p className="max-w-4xl mx-auto text-xl leading-relaxed opacity-80 italic font-serif">
               "A clinic where patient participates equally in the treatment plan. Here, we close the gap between patients and doctors."
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
