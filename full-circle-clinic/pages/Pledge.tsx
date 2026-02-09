
import React, { useState } from 'react';
/* Added Zap to the imports from lucide-react */
import { Check, ShieldCheck, Heart, Zap } from 'lucide-react';

const Pledge: React.FC = () => {
  const [pledges, setPledges] = useState({
    physical: false,
    spiritual: false,
    giving: false
  });
  const [signed, setSigned] = useState(false);

  const handleCheck = (key: keyof typeof pledges) => {
    setPledges(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSign = () => {
    if (Object.values(pledges).every(Boolean)) {
      setSigned(true);
    } else {
      alert("Please commit to all three aspects of the circle to sign.");
    }
  };

  if (signed) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center p-6">
        <div className="bg-white p-12 rounded-[4rem] shadow-2xl max-w-2xl text-center border-4 border-accent-orange/10">
          <div className="w-24 h-24 bg-accent-orange/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart size={48} className="text-accent-orange" />
          </div>
          <h2 className="font-display text-5xl text-dark-brown mb-4">Welcome to the Circle</h2>
          <p className="font-serif text-2xl italic text-accent-orange mb-8">"I have signed the circle."</p>
          <p className="text-dark-brown/70 mb-10 leading-relaxed">
            You are now a **Full Circle Conscious Donor**. You have raised the frequency from scarcity to abundance.
          </p>
          <div className="flex flex-col gap-4">
             <a href="https://notto.gov.in" target="_blank" rel="noreferrer" className="inline-block px-10 py-4 bg-dark-brown text-cream rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-orange transition-colors">
              Official NOTTO Registry
            </a>
            <button onClick={() => setSigned(false)} className="text-[10px] uppercase font-bold text-dark-brown/40 tracking-widest hover:text-accent-orange">View Certificate Details</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 space-y-6">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">The Living Legacy</span>
          <h1 className="font-display text-6xl md:text-8xl text-dark-brown">A Pact of Consciousness</h1>
          <p className="font-serif text-xl md:text-2xl italic text-dark-brown/60 max-w-3xl mx-auto">
            Where your transition becomes another’s beginning.
          </p>
          <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          <p className="text-dark-brown/80 leading-relaxed">
            At Full Circle, we believe the highest expression of "Consciousness" is the recognition that we are all connected. 
            In our clinic, the **"Art of Dying"** is not about fear—it is about the grace of the handoff.
          </p>
        </div>

        {/* Commitment Badge */}
        <div className="bg-dark-brown text-cream p-10 rounded-[3rem] mb-16 text-center border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
           <h3 className="font-display text-3xl mb-4">The 100% Commitment</h3>
           <p className="text-cream/70 italic text-lg leading-relaxed">
             "Dr. Prerna and every single member of the Full Circle staff are Pledged Organ Donors. We do not just practice medicine; we offer ourselves to the circle of life."
           </p>
        </div>

        {/* The Form */}
        <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden border border-dark-brown/5">
          <div className="bg-[#1D1614] p-10 text-center">
            <h2 className="font-display text-3xl text-cream">Sign the Circle</h2>
            <p className="text-cream/50 text-xs mt-2 font-bold uppercase tracking-widest">Join a movement of conscious souls</p>
          </div>

          <div className="p-10 md:p-16 space-y-12">
            
            {/* 1. Physical */}
            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('physical')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${pledges.physical ? 'bg-accent-orange border-accent-orange scale-110 shadow-lg' : 'border-dark-brown/10 group-hover:border-accent-orange/50'}`}>
                {pledges.physical && <Check size={24} className="text-white" />}
              </div>
              <div>
                <h3 className="font-display text-2xl text-dark-brown mb-3">1. The Physical Gift</h3>
                <p className="text-dark-brown/60 text-sm leading-relaxed">
                  I pledge my organs and tissues. I understand that as I transition, my heart, kidneys, liver, and lungs can offer up to eight people a second chance at life. I choose to be a donor.
                </p>
              </div>
            </div>

            {/* 2. Spiritual */}
            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('spiritual')}>
               <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${pledges.spiritual ? 'bg-accent-orange border-accent-orange scale-110 shadow-lg' : 'border-dark-brown/10 group-hover:border-accent-orange/50'}`}>
                {pledges.spiritual && <Check size={24} className="text-white" />}
              </div>
              <div>
                <h3 className="font-display text-2xl text-dark-brown mb-3">2. The Spiritual Gift</h3>
                <p className="text-dark-brown/60 text-sm leading-relaxed">
                  I pledge to share my decision. I will inform my family of my wishes today, ensuring that my transition is met with the peace of knowing my legacy is one of life.
                </p>
              </div>
            </div>

            {/* 3. Giving */}
            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('giving')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${pledges.giving ? 'bg-accent-orange border-accent-orange scale-110 shadow-lg' : 'border-dark-brown/10 group-hover:border-accent-orange/50'}`}>
                {pledges.giving && <Check size={24} className="text-white" />}
              </div>
              <div>
                <h3 className="font-display text-2xl text-dark-brown mb-3">3. The Art of Giving</h3>
                <p className="text-dark-brown/60 text-sm leading-relaxed">
                  I choose to support the **EWS Fund**. I understand that my presence here—through music, aesthetics, or clinical care—directly funds evaluation for those who cannot afford a transplant.
                </p>
              </div>
            </div>

            <div className="pt-10 border-t border-dark-brown/5 text-center">
              <button 
                onClick={handleSign}
                className={`px-16 py-6 rounded-full text-xs font-black uppercase tracking-[0.3em] transition-all transform hover:-translate-y-1 ${
                  Object.values(pledges).every(Boolean) 
                    ? 'bg-dark-brown text-cream shadow-2xl cursor-pointer hover:bg-accent-orange' 
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                Sign The Circle
              </button>
            </div>
          </div>
        </div>

        {/* Why section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
           <div className="bg-white p-10 rounded-[3rem] border border-dark-brown/5 shadow-sm">
             <div className="flex items-center gap-3 mb-6">
               <Zap size={20} className="text-accent-orange" />
               <h3 className="font-display text-2xl text-dark-brown">Neutralizing Karma</h3>
             </div>
             <p className="text-dark-brown/60 text-sm leading-relaxed">
               By making this pledge part of your Vitality Protocol, you transform the end of life into a selfless merit. You shift your vibration from "scarcity/fear of death" to "abundance/gift of life."
             </p>
           </div>
           <div className="bg-[#1D1614] p-10 rounded-[3rem] text-cream shadow-xl">
             <div className="flex items-center gap-3 mb-6">
               <ShieldCheck size={20} className="text-accent-orange" />
               <h3 className="font-display text-2xl">Support EWS</h3>
             </div>
             <p className="text-cream/60 text-sm leading-relaxed">
               Creating a culture where the wealthy and underprivileged are united by the same biological hope. Low Financial quotient, High Spiritual quotient.
             </p>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Pledge;
