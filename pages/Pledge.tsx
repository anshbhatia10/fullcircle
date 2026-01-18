import React, { useState } from 'react';
import { Check, Heart, ShieldCheck, Zap, ExternalLink } from 'lucide-react';

const Pledge: React.FC = () => {
  const [pledges, setPledges] = useState({ physical: false, spiritual: false, giving: false });
  const [signed, setSigned] = useState(false);

  const handleCheck = (key: keyof typeof pledges) => {
    setPledges(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSign = () => {
    if (Object.values(pledges).every(Boolean)) {
      setSigned(true);
      // Immediately open the official registry link as requested
      window.open("https://notto.abdm.gov.in", "_blank");
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
          <p className="text-dark-brown/70 mb-10 font-bold uppercase tracking-widest text-xs">Full Circle Conscious Donor</p>
          <div className="flex flex-col gap-4">
             <a href="https://notto.abdm.gov.in" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-dark-brown text-cream rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-orange transition-colors">
              Official ABDM NOTTO Registry <ExternalLink size={14} />
            </a>
            <button onClick={() => setSigned(false)} className="text-[10px] uppercase font-bold text-dark-brown/40 tracking-widest hover:text-accent-orange">Review the Pact</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">A Pact of Consciousness</span>
          <h1 className="font-display text-6xl md:text-8xl text-dark-brown">The Living Legacy</h1>
          <p className="font-serif text-xl italic text-dark-brown/60 max-w-3xl mx-auto">
            "At Full Circle, we believe the highest expression of 'Consciousness' is the recognition that we are all connected."
          </p>
          <p className="text-dark-brown/80 leading-relaxed text-sm">
            In our clinic, the **"Art of Dying"** is about the grace of the handoff. Dr. Prerna and every member of our staff are Pledged Organ Donors.
          </p>
        </div>

        <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden border border-dark-brown/5 mb-20">
          <div className="bg-[#1D1614] p-10 text-center text-cream">
            <h2 className="font-display text-3xl">Sign the Circle</h2>
            <p className="text-cream/50 text-[10px] mt-2 font-bold uppercase tracking-widest">The 100% Commitment</p>
          </div>

          <div className="p-10 md:p-16 space-y-12">
            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('physical')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 ${pledges.physical ? 'bg-accent-orange border-accent-orange' : 'border-dark-brown/10'}`}>
                {pledges.physical && <Check size={24} className="text-white" />}
              </div>
              <div>
                <h3 className="font-display text-2xl text-dark-brown mb-3">1. The Physical Gift</h3>
                <p className="text-dark-brown/60 text-sm italic">"I pledge my organs and tissues. My transition becomes another’s beginning."</p>
              </div>
            </div>

            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('spiritual')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 ${pledges.spiritual ? 'bg-accent-orange border-accent-orange' : 'border-dark-brown/10'}`}>
                {pledges.spiritual && <Check size={24} className="text-white" />}
              </div>
              <div>
                <h3 className="font-display text-2xl text-dark-brown mb-3">2. The Spiritual Gift</h3>
                <p className="text-dark-brown/60 text-sm italic">"I pledge to share my decision with my family today, ensuring peace and legacy."</p>
              </div>
            </div>

            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('giving')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 ${pledges.giving ? 'bg-accent-orange border-accent-orange' : 'border-dark-brown/10'}`}>
                {pledges.giving && <Check size={24} className="text-white" />}
              </div>
              <div>
                <h3 className="font-display text-2xl text-dark-brown mb-3">3. The Art of Giving</h3>
                <p className="text-dark-brown/60 text-sm italic">"I support the **EWS Fund**, financing medical evaluations for those in need."</p>
              </div>
            </div>

            <div className="pt-10 border-t border-dark-brown/5 text-center">
              <button onClick={handleSign} className="px-16 py-6 bg-dark-brown text-cream rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-accent-orange transition-all">
                I have signed the circle
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-white p-8 rounded-3xl border border-dark-brown/5 shadow-sm text-center">
             <Zap size={24} className="text-accent-orange mx-auto mb-4" />
             <h4 className="font-display text-xl mb-2">Neutralizing Karma</h4>
             <p className="text-xs text-dark-brown/60">Transforming transition into selfless merit.</p>
           </div>
           <div className="bg-[#1D1614] p-8 rounded-3xl text-cream shadow-xl text-center">
             <ShieldCheck size={24} className="text-accent-orange mx-auto mb-4" />
             <h4 className="font-display text-xl mb-2">EWS Support</h4>
             <p className="text-xs text-cream/60">United by biological hope. High Spiritual Quotient.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl border border-dark-brown/5 shadow-sm text-center">
             <Heart size={24} className="text-accent-orange mx-auto mb-4" />
             <h4 className="font-display text-xl mb-2">Raising Frequency</h4>
             <p className="text-xs text-dark-brown/60">From scarcity to abundance and gift of life.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Pledge;