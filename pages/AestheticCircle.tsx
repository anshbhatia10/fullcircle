import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Droplets, ScanFace, HeartPulse, Leaf, Wand2, ArrowRight } from 'lucide-react';

const AestheticCircle: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="uppercase tracking-widest font-black text-xs text-accent-orange mb-3 block">The Aesthetic Circle</span>
          <h1 className="font-display text-5xl md:text-8xl text-dark-brown mt-4 mb-6">Beautiful Inside Out</h1>
          <p className="max-w-3xl mx-auto text-dark-brown/70 font-serif italic text-xl md:text-2xl leading-relaxed">
            "True beauty is not just skin deep. It is a reflection of your inner vitality."
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-start">
          <div className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-14 border border-dark-brown/5 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-accent-orange flex items-center justify-center">
                <ScanFace size={32} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">Assessment</p>
                <h2 className="font-display text-4xl text-dark-brown">Aesthetic Skin Assessment</h2>
              </div>
            </div>
            <p className="text-dark-brown/70 text-lg leading-relaxed mb-10">
              Our comprehensive skin analysis looks beyond the surface. We evaluate what you see, and what is shaping it
              underneath.
            </p>
            <div className="space-y-6 text-dark-brown/80">
              <div className="flex gap-4 items-start">
                <Sparkles className="text-accent-orange shrink-0 mt-1" size={20} />
                <p>
                  <span className="font-black uppercase tracking-widest text-xs block mb-1">Surface health</span>
                  <span className="text-sm">Texture, tone, and collagen density.</span>
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <Droplets className="text-accent-orange shrink-0 mt-1" size={20} />
                <p>
                  <span className="font-black uppercase tracking-widest text-xs block mb-1">Internal connection</span>
                  <span className="text-sm">How your Dosha (Vata, Pitta, Kapha) and hydration patterns affect your skin aging process.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-bronze-dark text-cream rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl" />
            <div>
              <h3 className="font-display text-4xl mb-6 relative z-10 leading-tight">The Full Circle Beauty Synergy</h3>
              <p className="text-cream/70 leading-relaxed relative z-10 mb-10 italic font-serif text-lg">
                Combine the best of clinical regeneration and holistic muscle toning for results that look natural and feel
                aligned.
              </p>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-black text-accent-orange mb-2">The Science</p>
                <p className="font-bold text-cream">Clinical Regeneration</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <p className="text-[10px] uppercase tracking-widest font-black text-accent-orange mb-2">The Nature</p>
                <p className="font-bold text-cream">Holistic Structure</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-dark-brown/5 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <HeartPulse size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">Clinical</p>
                <h3 className="font-display text-3xl text-dark-brown">Regeneration (Science)</h3>
              </div>
            </div>
            <div className="space-y-6 text-dark-brown/70">
              <div className="flex gap-4 items-start">
                <Wand2 className="text-accent-orange shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  <span className="font-bold text-dark-brown">PRP (Platelet-Rich Plasma):</span> Uses your body’s own
                  growth factors to stimulate deep healing.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <Sparkles className="text-accent-orange shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  <span className="font-bold text-dark-brown">Microneedling:</span> Targeted collagen induction therapy to
                  refine pores and scars.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-dark-brown/5 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center">
                <Leaf size={28} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">Holistic</p>
                <h3 className="font-display text-3xl text-dark-brown">Structure (Nature)</h3>
              </div>
            </div>
            <div className="space-y-6 text-dark-brown/70">
              <div className="flex gap-4 items-start">
                <Sparkles className="text-accent-orange shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  <span className="font-bold text-dark-brown">Face Yoga coaching:</span> Natural muscle toning to lift and
                  contour.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <Droplets className="text-accent-orange shrink-0 mt-1" size={20} />
                <p className="text-sm leading-relaxed">
                  <span className="font-bold text-dark-brown">Naturopathic glow:</span> Supplements and Ayurvedic oils
                  tailored to your skin type.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-bronze-dark text-cream rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="uppercase tracking-widest font-black text-xs text-accent-orange mb-4 block">Package Deal</span>
              <h2 className="font-display text-5xl md:text-7xl mb-8 leading-tight">The Circle of Radiance</h2>
              <p className="text-cream/70 text-xl leading-relaxed mb-10 italic font-serif">
                "Why settle for half a solution? Fill the Circle. Bundle aesthetic regeneration with holistic wellness to
                align the inside and the outside."
              </p>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-cream/80">
                <p className="font-black uppercase tracking-widest text-[10px] text-accent-orange mb-3">Bundle & save</p>
                <p className="text-sm leading-relaxed">
                  Book our Aesthetic Regeneration procedures (PRP + Microneedling) and receive a discount on our Holistic
                  Wellness package (Face Yoga + Nadi Scan + Aura Scan).
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link
                to="/appointment"
                className="px-10 py-6 rounded-full bg-cream text-bronze-dark text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-orange hover:text-white transition-all text-center shadow-xl transform hover:-translate-y-1"
              >
                Book Aesthetic Circle
              </Link>
              <Link
                to="/screening-circle"
                className="px-10 py-6 rounded-full border border-white/20 text-cream text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors text-center"
              >
                Choose Your Screening Circle
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AestheticCircle;