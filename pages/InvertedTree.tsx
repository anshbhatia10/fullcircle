import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Zap, Award } from 'lucide-react';

const InvertedTree: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24">
          <span className="uppercase tracking-widest font-black text-xs text-accent-orange mb-3 block">Our Commitment</span>
          <h1 className="font-display text-5xl md:text-8xl text-dark-brown mt-4 mb-6 leading-tight">Legacy & Mission</h1>
          <p className="max-w-3xl mx-auto text-dark-brown/70 font-serif italic text-xl md:text-2xl leading-relaxed">
            "We believe that true health is a state of harmony—a dynamic balance between mind, body, and spirit."
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <h2 className="font-display text-5xl text-dark-brown leading-tight">Closing the Gap between Doctor & Patient</h2>
            <div className="w-20 h-1 bg-accent-orange"></div>
            <p className="text-lg leading-relaxed text-dark-brown/80">
              Full Circle was founded on the principle that the patient is an equal partner in their healing journey. We merge the evidence-based rigor of conventional USA protocols with profound, time-tested wisdom.
            </p>
            <div className="bg-white p-10 rounded-[3rem] border border-dark-brown/5 shadow-sm space-y-6">
               <div className="flex gap-4">
                  <ShieldCheck className="text-accent-orange shrink-0" size={24} />
                  <p className="text-dark-brown/70 italic">"Integrative treatments backed by the highest standards of clinical excellence."</p>
               </div>
               <div className="flex gap-4">
                  <Award className="text-accent-orange shrink-0" size={24} />
                  <p className="text-dark-brown/70 italic">"USA Board Certified expertise meeting traditional Antric systems."</p>
               </div>
            </div>
          </div>
          <div className="bg-bronze-dark rounded-[4rem] p-12 md:p-20 text-cream relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
             <Zap className="text-accent-orange/40 mb-10" size={60} />
             <h3 className="font-display text-4xl mb-8">Transcendental Medicine</h3>
             <p className="text-cream/70 text-lg leading-relaxed mb-10">
               We expand the clinic's philosophy from integrative medicine to **transcendental medicine**, where the root of all illness is addressed at the deepest level—the soul.
             </p>
             <Link to="/appointment" className="inline-flex items-center gap-3 px-10 py-5 bg-cream text-bronze-dark rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-all">
               Start Your Journey
             </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
           <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform border border-dark-brown/5">
                 <Heart className="text-accent-orange" size={32} />
              </div>
              <h4 className="font-display text-3xl text-dark-brown">No Size Fits All</h4>
              <p className="text-dark-brown/60 text-sm leading-relaxed">Recognizing each patient as a unique individual, not just a set of symptoms.</p>
           </div>
           <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform border border-dark-brown/5">
                 <ShieldCheck className="text-accent-orange" size={32} />
              </div>
              <h4 className="font-display text-3xl text-dark-brown">Evidence Based</h4>
              <p className="text-dark-brown/60 text-sm leading-relaxed">USA standard protocols integrated with holistic diagnostics for a complete picture.</p>
           </div>
           <div className="text-center space-y-6 group">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform border border-dark-brown/5">
                 <Zap className="text-accent-orange" size={32} />
              </div>
              <h4 className="font-display text-3xl text-dark-brown">Soul-Mind-Body</h4>
              <p className="text-dark-brown/60 text-sm leading-relaxed">A reversal of thinking that understands physical illness as a manifestation of energetic imprints.</p>
           </div>
        </section>
      </div>
    </div>
  );
};

export default InvertedTree;