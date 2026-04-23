import React, { useState } from 'react';
import { Check, Heart, ShieldCheck, Zap, ExternalLink } from 'lucide-react';
import { useTina, tinaField } from 'tinacms/dist/react';
import pledgeData from '../content/pages/pledge.json';

const Pledge: React.FC = () => {
  const { data } = useTina({
    query: `{
      pledge(relativePath: "pledge.json") {
        tagline
        title
        subtitle
        description
        pledges {
          physical
          spiritual
          giving
        }
        registryUrl
      }
    }`,
    variables: { relativePath: "pledge.json" },
    data: { pledge: pledgeData },
  });

  const { tagline, title, subtitle, description, pledges: pledgeItems, registryUrl } = data.pledge;

  const [pledgeStatus, setPledgeStatus] = useState({ physical: false, spiritual: false, giving: false });
  const [signed, setSigned] = useState(false);

  const handleCheck = (key: keyof typeof pledgeStatus) => {
    setPledgeStatus(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSign = () => {
    if (Object.values(pledgeStatus).every(Boolean)) {
      setSigned(true);
      window.open(registryUrl || "https://notto.abdm.gov.in", "_blank");
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
          <p className="text-dark-brown/70 mb-10 font-bold uppercase tracking-widest text-xs font-sans">Full Circle Conscious Donor</p>
          <div className="flex flex-col gap-4">
            <a href={registryUrl || "https://notto.abdm.gov.in"} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-10 py-4 bg-dark-brown text-cream rounded-full text-xs font-bold uppercase tracking-widest hover:bg-accent-orange transition-colors">
              Official Registry <ExternalLink size={14} />
            </a>
            <button onClick={() => setSigned(false)} className="text-[10px] uppercase font-bold text-dark-brown/40 tracking-widest hover:text-accent-orange font-sans">Review the Pact</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <span data-tina-field={tinaField(data.pledge, 'tagline')} className="text-accent-orange uppercase tracking-widest font-black text-xs block">
            {tagline}
          </span>
          <h1 data-tina-field={tinaField(data.pledge, 'title')} className="font-display text-6xl md:text-8xl text-dark-brown">{title}</h1>
          <p data-tina-field={tinaField(data.pledge, 'subtitle')} className="font-serif text-xl md:text-2xl italic text-dark-brown/60 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="w-20 h-1 bg-accent-orange mx-auto"></div>
          <p data-tina-field={tinaField(data.pledge, 'description')} className="text-dark-brown/80 leading-relaxed text-lg">
            {description}
          </p>
        </div>

        <div className="bg-white rounded-[4rem] shadow-xl overflow-hidden border border-dark-brown/5 mb-20">
          <div className="bg-[#1D1614] p-10 text-center text-cream">
            <h2 className="font-display text-3xl">Sign the Circle</h2>
            <p className="text-cream/50 text-[10px] mt-2 font-bold uppercase tracking-widest">The 100% Commitment</p>
          </div>

          <div className="p-10 md:p-16 space-y-12">
            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('physical')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${pledgeStatus.physical ? 'bg-accent-orange border-accent-orange scale-110 shadow-lg' : 'border-dark-brown/10 group-hover:border-accent-orange/50'}`}>
                {pledgeStatus.physical && <Check size={24} className="text-white" />}
              </div>
              <div data-tina-field={tinaField(pledgeItems, 'physical')}>
                <h3 className="font-display text-2xl text-dark-brown mb-3">1. The Physical Gift</h3>
                <p className="text-dark-brown/60 text-sm italic font-serif">"{pledgeItems.physical}"</p>
              </div>
            </div>

            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('spiritual')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${pledgeStatus.spiritual ? 'bg-accent-orange border-accent-orange scale-110 shadow-lg' : 'border-dark-brown/10 group-hover:border-accent-orange/50'}`}>
                {pledgeStatus.spiritual && <Check size={24} className="text-white" />}
              </div>
              <div data-tina-field={tinaField(pledgeItems, 'spiritual')}>
                <h3 className="font-display text-2xl text-dark-brown mb-3">2. The Spiritual Gift</h3>
                <p className="text-dark-brown/60 text-sm italic font-serif">"{pledgeItems.spiritual}"</p>
              </div>
            </div>

            <div className="flex gap-8 items-start cursor-pointer group" onClick={() => handleCheck('giving')}>
              <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center flex-shrink-0 transition-all ${pledgeStatus.giving ? 'bg-accent-orange border-accent-orange scale-110 shadow-lg' : 'border-dark-brown/10 group-hover:border-accent-orange/50'}`}>
                {pledgeStatus.giving && <Check size={24} className="text-white" />}
              </div>
              <div data-tina-field={tinaField(pledgeItems, 'giving')}>
                <h3 className="font-display text-2xl text-dark-brown mb-3">3. The Art of Giving</h3>
                <p className="text-dark-brown/60 text-sm italic font-serif">"{pledgeItems.giving}"</p>
              </div>
            </div>

            <div className="pt-10 border-t border-dark-brown/5 text-center">
              <button onClick={handleSign} className="px-16 py-6 bg-dark-brown text-cream rounded-full text-xs font-black uppercase tracking-[0.3em] hover:bg-accent-orange transition-all shadow-xl">
                I have signed the circle
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-[3rem] border border-dark-brown/5 shadow-sm text-center">
            <Zap size={24} className="text-accent-orange mx-auto mb-4" />
            <h4 className="font-display text-xl mb-2 text-dark-brown">Neutralizing Karma</h4>
            <p className="text-xs text-dark-brown/60 font-sans uppercase tracking-widest">Transforming transition into selfless merit.</p>
          </div>
          <div className="bg-[#1D1614] p-8 rounded-[3rem] text-cream shadow-xl text-center">
            <ShieldCheck size={24} className="text-accent-orange mx-auto mb-4" />
            <h4 className="font-display text-xl mb-2">EWS Support</h4>
            <p className="text-xs text-cream/60 font-sans uppercase tracking-widest">United by biological hope. High Spiritual Quotient.</p>
          </div>
          <div className="bg-white p-8 rounded-[3rem] border border-dark-brown/5 shadow-sm text-center">
            <Heart size={24} className="text-accent-orange mx-auto mb-4" />
            <h4 className="font-display text-xl mb-2 text-dark-brown">Raising Frequency</h4>
            <p className="text-xs text-dark-brown/60 font-sans uppercase tracking-widest">From scarcity to abundance and gift of life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pledge;
