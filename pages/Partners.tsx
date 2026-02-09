import React from 'react';

const Partners: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Closing the Gap</span>
          <h1 className="font-display text-6xl md:text-8xl text-dark-brown mt-4 mb-8">Meet Our Partners</h1>
          <p className="text-dark-brown/60 uppercase tracking-[0.3em] font-bold text-xs">Prevention - Intervention - Transition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Partner 1 */}
          <div className="bg-white p-12 rounded-[3rem] border border-dark-brown/10 shadow-sm text-center flex flex-col items-center">
            <div className="w-48 h-48 bg-[#1D1614] rounded-full mb-10 overflow-hidden grayscale">
               <img src="https://picsum.photos/400/400?random=20" alt="The Healer" className="w-full h-full object-cover opacity-80" />
            </div>
            <h3 className="font-display text-3xl text-dark-brown mb-2">The Healer</h3>
            <span className="text-accent-orange uppercase tracking-widest font-black text-[10px] mb-6 block">Senior Faculty</span>
            <p className="text-dark-brown/70 leading-relaxed text-sm">
              A renowned Naturopath, Reiki Master and Past-Life Regression Healer who brings a deep understanding of energy, consciousness, and the spiritual dimensions of healing.
            </p>
          </div>

          {/* Partner 2 */}
          <div className="bg-[#1D1614] p-12 rounded-[3rem] text-cream shadow-2xl text-center flex flex-col items-center transform md:-translate-y-8">
            <div className="w-48 h-48 bg-cream/10 rounded-full mb-10 overflow-hidden">
               <img src="https://picsum.photos/400/400?random=21" alt="The Intensivist" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            <h3 className="font-display text-3xl text-cream mb-2">The Intensivist</h3>
            <span className="text-accent-orange uppercase tracking-widest font-black text-[10px] mb-6 block">Critical Care Expert</span>
            <p className="text-cream/60 leading-relaxed text-sm">
              An expert in critical care who ensures the highest level of medical intervention for acute patients, while advocating for a human-centered approach.
            </p>
          </div>

          {/* Partner 3 */}
          <div className="bg-white p-12 rounded-[3rem] border border-dark-brown/10 shadow-sm text-center flex flex-col items-center">
            <div className="w-48 h-48 bg-[#1D1614] rounded-full mb-10 overflow-hidden grayscale">
               <img src="https://picsum.photos/400/400?random=22" alt="The Transplant Nephrologist" className="w-full h-full object-cover opacity-80" />
            </div>
            <h3 className="font-display text-3xl text-dark-brown mb-2">Dr. Prerna</h3>
            <span className="text-accent-orange uppercase tracking-widest font-black text-[10px] mb-6 block">The Transplant Nephrologist</span>
            <p className="text-dark-brown/70 leading-relaxed text-sm">
              USA Board certified Internal medicine, nephrologist and a transplant nephrologist. A passionate advocate for organ donation, working to make India an "OPT-OUT" nation.
            </p>
          </div>

        </div>

        <div className="mt-32 p-20 bg-dark-brown text-cream rounded-[4rem] text-center relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="font-display text-5xl md:text-7xl mb-8">Full Circle is a Revolution!</h2>
             <p className="max-w-4xl mx-auto text-xl leading-relaxed opacity-70 italic font-serif">
               "A clinic where patient participates equally in the treatment plan. Here, we close the gap between patients and doctors."
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;