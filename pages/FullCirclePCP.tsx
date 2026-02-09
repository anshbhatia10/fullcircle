import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, ShieldCheck, Stethoscope, Sparkles, Wind, ArrowRight } from 'lucide-react';

const FullCirclePCP: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="uppercase tracking-widest font-black text-xs text-accent-orange mb-3 block">The Full Circle PCP</span>
          <h1 className="font-display text-5xl md:text-8xl text-dark-brown mt-4 mb-6">One Doctor. The Whole Picture.</h1>
          <p className="max-w-3xl mx-auto text-dark-brown/70 font-serif italic text-xl md:text-2xl leading-relaxed">
            "In a system where patients often juggle multiple specialists who do not coordinate, Full Circle introduces
            the USA Primary Care Physician concept."
          </p>
        </header>

        <section className="bg-white rounded-[3rem] shadow-sm border border-dark-brown/5 p-10 md:p-14 mb-14 overflow-hidden relative">
           <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-accent-orange to-purple-600"></div>
           
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-display text-5xl text-dark-brown mb-8 leading-tight">Bringing the Gold Standard to India</h2>
              <p className="text-dark-brown/70 leading-relaxed mb-10 text-lg">
                You should not have to explain your history to five different doctors. With Full Circle, you have one
                doctor who knows your medical charts, your spiritual journey, and your aesthetic goals.
              </p>
              
              <div className="rounded-[2.5rem] bg-cream/30 border border-dark-brown/5 p-8 md:p-10">
                 <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent-orange/10 text-accent-orange flex items-center justify-center shrink-0">
                       <ShieldCheck size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-2">
                        How it works
                        </p>
                        <p className="text-sm text-dark-brown/80 leading-relaxed font-sans">
                        We coordinate clinical screening, integrative support, and wellness planning into a single roadmap—one single point of care for your entire health map.
                        </p>
                    </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link
                to="/appointment"
                className="w-full px-10 py-6 rounded-full bg-dark-brown text-cream text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-orange transition-all shadow-xl text-center flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                <span>Book With Your PCP</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/screening-circle"
                className="w-full px-10 py-6 rounded-full border border-dark-brown/10 text-dark-brown text-[10px] font-black uppercase tracking-[0.2em] hover:bg-dark-brown/5 transition-colors text-center"
              >
                Choose Screening Circle
              </Link>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          <div className="bg-white rounded-[3rem] p-12 border border-dark-brown/5 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Stethoscope size={32} />
            </div>
            <h3 className="font-display text-4xl text-dark-brown mb-4">Medically</h3>
            <p className="text-sm text-dark-brown/60 leading-relaxed font-sans">
              A clinical expert managing general medicine, nephrology, and transplant needs with USA-standard protocols and evidence-based rigor.
            </p>
          </div>

          <div className="bg-bronze-dark text-cream rounded-[3rem] p-12 border border-bronze-dark shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
              <Flower2 size={32} />
            </div>
            <h3 className="font-display text-4xl text-white mb-4 relative z-10">Spiritually</h3>
            <p className="text-sm text-cream/60 leading-relaxed relative z-10 font-sans">
              A guide who understands how your Doshas (Vata, Pitta, Kapha) and stress patterns influence physical
              pathology and subtle energetic balance.
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-12 border border-dark-brown/5 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-accent-orange flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-display text-4xl text-dark-brown mb-4">Aesthetically</h3>
            <p className="text-sm text-dark-brown/60 leading-relaxed font-sans">
              Preventive and regenerative care to ensure your external vitality matches your internal health, creating a complete harmony of form.
            </p>
          </div>
        </section>

        <section className="bg-[#1D1614] text-cream rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="max-w-3xl">
                <span className="uppercase tracking-widest font-black text-xs text-accent-orange mb-4 block">
                The Eastern Technique vs. Western Protocol
                </span>
                <h2 className="font-display text-5xl md:text-7xl mt-2 mb-12 leading-tight">Why Choose? Fill the Circle.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="rounded-[2.5rem] border border-white/5 bg-white/5 p-10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <Wind className="text-accent-orange group-hover:rotate-180 transition-transform duration-1000" size={24} />
                  <p className="text-[10px] uppercase tracking-widest font-black text-white/40">Western Protocol</p>
                </div>
                <p className="font-display text-3xl text-white mb-4">The Science</p>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  Focuses on the vagus nerve and CO2/oxygen ratios, with measurable physiology, clinical outcomes, and USA-board standards.
                </p>
              </div>
              <div className="rounded-[2.5rem] border border-white/5 bg-white/5 p-10 hover:bg-white/10 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <Sparkles className="text-accent-orange animate-pulse" size={24} />
                  <p className="text-[10px] uppercase tracking-widest font-black text-white/40">Eastern Technique</p>
                </div>
                <p className="font-display text-3xl text-white mb-4">The Spirituality</p>
                <p className="text-sm text-white/60 leading-relaxed font-sans">
                  Focuses on Prana and chakra alignment to support harmony, resilience, and energetic balance through time-tested Antric wisdom.
                </p>
              </div>
            </div>
            
            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Link
                to="/screening-circle"
                className="px-10 py-6 rounded-full bg-cream text-bronze-dark text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-orange hover:text-white transition-all text-center shadow-xl transform hover:-translate-y-1"
              >
                Start With Screening
              </Link>
              <Link
                to="/aesthetic-circle"
                className="px-10 py-6 rounded-full border border-white/20 text-cream text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors text-center"
              >
                Explore Aesthetic Circle
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullCirclePCP;