import React from 'react';
import { Heart, Activity, Star, Compass, Zap, ShieldCheck } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Our Pillars</span>
          <h1 className="font-display text-6xl md:text-8xl text-dark-brown mt-4 mb-8">Our Services!</h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-dark-brown/70 font-serif italic">
            "Healing the subtle bodies to restore physical form."
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="space-y-32">
          
          {/* 1. Preventive & Wellness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-full text-blue-800 text-xs font-black uppercase tracking-widest">
                <Heart size={14} />
                <span>Foundation</span>
              </div>
              <h2 className="font-display text-5xl text-dark-brown">Preventive & Wellness Care</h2>
              <p className="text-lg text-dark-brown/80 leading-relaxed">
                Prevention is the cornerstone of our practice. Our team works with you to build a personalized wellness plan centered on Naturopathy and Ayurvedic principles of diet and lifestyle.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-blue-100 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm font-bold text-dark-brown">Cutting-edge Nadi gear to detect exact Dosha percentages.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-dark-brown/70">Curated diets and nutrition based on constitution results.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-dark-brown/70">Daily routines, herbal remedies, Yoga, and Pranayama.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1D1614] rounded-[3rem] aspect-square flex items-center justify-center p-12 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop" alt="Wellness" className="w-full h-full object-cover grayscale" />
               </div>
               <Compass size={120} className="text-blue-500 relative z-10" strokeWidth={1} />
            </div>
          </div>

          {/* 2. Acute & Interventional */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 bg-[#1D1614] rounded-[3rem] aspect-square flex items-center justify-center p-12 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop" alt="Medical" className="w-full h-full object-cover grayscale" />
               </div>
               <Activity size={120} className="text-red-500 relative z-10" strokeWidth={1} />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-3 bg-red-100 px-4 py-2 rounded-full text-red-800 text-xs font-black uppercase tracking-widest">
                <ShieldCheck size={14} />
                <span>Intervention</span>
              </div>
              <h2 className="font-display text-5xl text-dark-brown">Acute & Interventional Care</h2>
              <p className="text-lg text-dark-brown/80 leading-relaxed">
                Our board-certified oncologist and intensivist provide expert care for critical conditions, ensuring the highest standard of medical treatment when you need it most.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-red-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm font-bold text-dark-brown">State-of-the-art diagnostics and interventional procedures.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-red-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-dark-brown/70">Stabilization integrated with supportive integrative therapies.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-red-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-dark-brown/70">Compassionate critical care with a human-centered approach.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Spiritual & Chronic */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-purple-100 px-4 py-2 rounded-full text-purple-800 text-xs font-black uppercase tracking-widest">
                <Zap size={14} />
                <span>Transcendence</span>
              </div>
              <h2 className="font-display text-5xl text-dark-brown">Spiritual & Chronic Care</h2>
              <p className="text-lg text-dark-brown/80 leading-relaxed">
                Focus shifts to healing beyond the physical. From end-stage renal disease to metastatic cancer, we offer therapies to soothe the mind and spirit.
              </p>
              <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm font-bold text-dark-brown">Reiki, Past-Life Regression, and Energy Healing.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-dark-brown/70">Sound healing, Mantras, Gita verses, and Simple Pranayama.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 bg-purple-600 rounded-full flex-shrink-0"></div>
                  <p className="text-sm text-dark-brown/70">Holotropic breathing to address karmic imprints.</p>
                </div>
              </div>
            </div>
            <div className="bg-[#1D1614] rounded-[3rem] aspect-square flex items-center justify-center p-12 relative overflow-hidden group">
               <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                 <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1920&auto=format&fit=crop" alt="Spiritual" className="w-full h-full object-cover grayscale" />
               </div>
               <Star size={120} className="text-purple-500 relative z-10" strokeWidth={1} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;