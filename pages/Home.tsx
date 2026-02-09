import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Sparkles, Compass, ShieldCheck, Palette } from 'lucide-react';
import treeVideo from '../The_tree_featured_1080p_smooth.mp4';

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <div className="w-full bg-cream min-h-screen flex flex-col overflow-x-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* CORNER SATELLITES - Mapped to Old "Pillars" */}
        {/* Top Left: Screening */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-top-left transition-all duration-700">
           <Link to="/screening-circle" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100">
                <defs><path id="circle-prevent" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="8.5" letterSpacing="2.2" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-prevent">Screening Circle • Screening Circle •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Activity size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        {/* Top Right: Aesthetic */}
        <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-top-right transition-all duration-700">
           <Link to="/aesthetic-circle" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100" style={{ animationDirection: 'reverse' }}>
                <defs><path id="circle-intervene" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="8.5" letterSpacing="2.2" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-intervene">Aesthetic Circle • Aesthetic Circle •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Sparkles size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        {/* Bottom Left: PCP */}
        <div className="absolute bottom-24 left-6 md:bottom-28 md:left-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-bottom-left transition-all duration-700">
           <Link to="/full-circle-pcp" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100">
                <defs><path id="circle-yellow" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="8.5" letterSpacing="2.2" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-yellow">Full Circle PCP • Full Circle PCP •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Heart size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        {/* Bottom Right: Philosophy */}
        <div className="absolute bottom-24 right-6 md:bottom-28 md:right-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-bottom-right transition-all duration-700">
           <Link to="/inverted-tree" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100" style={{ animationDirection: 'reverse' }}>
                <defs><path id="circle-purple" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="11" letterSpacing="4.5" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-purple">Philosophy • Philosophy •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Palette size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        {/* CENTER CONTENT BLOCK - Old Hero Text */}
        <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
          <div className="relative flex flex-col items-center justify-center mb-16">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-gradient-to-b from-[#FF7E5F] to-[#FFBE98] z-0 pointer-events-none transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center select-none cursor-default">
              <h1 className="font-display text-[6.5rem] md:text-[13rem] lg:text-[16rem] leading-[0.7] text-dark-brown tracking-tighter mix-blend-multiply transition-all duration-500">
                Full
              </h1>
              <h1 className="font-display text-[6.5rem] md:text-[13rem] lg:text-[16rem] leading-[0.7] text-dark-brown tracking-tighter mix-blend-multiply italic -mt-4 md:-mt-10 transition-all duration-500">
                Circle
              </h1>
            </div>
          </div>
          <div className="absolute bottom-10 md:bottom-16 flex flex-col items-center">
             <div className="w-[1.5px] h-12 md:h-16 bg-dark-brown/40 mb-8"></div>
             <p className="font-sans text-[11px] md:text-lg font-black uppercase tracking-[0.4em] text-dark-brown text-center px-10 transition-all leading-relaxed max-w-2xl">
               Where evidence-based protocol meets ancient wisdom.
             </p>
          </div>
        </div>
      </section>

      {/* 2. THIN SCROLLING MARQUEE DIVIDER */}
      <section className="relative w-full overflow-hidden will-change-transform">
        <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-red-600 via-yellow-500 to-purple-600 relative z-20"></div>
        <div className="bg-[#1D1614] py-3 md:py-5 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
           <div className="whitespace-nowrap flex animate-marquee will-change-transform translate-z-0">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center space-x-6 md:space-x-12 px-3 md:px-6">
                  <span className="font-display text-2xl md:text-5xl lg:text-6xl text-cream tracking-[0.15em] uppercase select-none opacity-90">Integrative</span>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-600/80 shadow-[0_0_10px_rgba(37,99,235,0.4)]"></div>
                  <span className="font-display text-2xl md:text-5xl lg:text-6xl text-cream tracking-[0.15em] uppercase italic select-none opacity-90">Medicine</span>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-600/80 shadow-[0_0_10px_rgba(220,38,38,0.4)]"></div>
                </div>
              ))}
           </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-red-600 via-yellow-500 to-purple-600 relative z-20"></div>
      </section>

      {/* 3. INVERTED TREE THEORY SECTION */}
      <section className="relative overflow-hidden py-32 px-6 flex flex-col items-center min-h-[900px] border-b border-dark-brown/20 shadow-inner" 
               style={{ background: 'linear-gradient(135deg, #1D0F0C 0%, #3D1E16 25%, #70362A 50%, #3D1E16 75%, #1D0F0C 100%)' }}>
        
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-soft-light" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40" 
             style={{ background: 'linear-gradient(110deg, transparent 42%, rgba(255,180,150,0.8) 50%, transparent 58%)', backgroundSize: '200% 100%', animation: 'shine-sweep 7s ease-in-out infinite' }}></div>
        
        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Block: Hinduism Metaphor */}
          <div className="md:col-span-4 relative">
             <div className="mb-10">
                <h2 className="font-display text-4xl md:text-5xl text-cream mb-6 tracking-tight relative inline-block">
                  Hinduism Metaphor
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-cream/30"></div>
                </h2>
                <p className="font-sans text-cream/70 text-base leading-relaxed max-w-sm">
                  The material universe is an eternal, upside-down tree (Ashvattha) with roots in the heavens and branches extending downwards. It is a reflection of the spiritual world.
                </p>
             </div>
             
             <div className="mt-8">
               <span className="px-6 py-1.5 bg-[#1D0F0C]/60 backdrop-blur-md border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-cream/90">Bhagavad Gita</span>
             </div>
          </div>

          {/* Center Frame (Inverted Tree Video) */}
          <div className="md:col-span-4 flex justify-center items-center">
             <div className="relative group">
                <div className="w-64 h-80 bg-[#1D0F0C]/40 backdrop-blur-md rounded-t-full rounded-b-full p-1 border border-white/10 shadow-[0_0_50px_rgba(255,126,95,0.3)] overflow-hidden relative">
                   <video 
                     ref={videoRef}
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 transform opacity-80"
                   >
                     <source src={treeVideo} type="video/mp4" />
                   </video>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1D0F0C]/80 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-cream/50">
                   <Activity size={20} strokeWidth={1} />
                </div>
             </div>
             <div className="absolute -bottom-12 text-center w-full">
                <h3 className="font-display text-3xl text-accent-orange uppercase tracking-[0.2em] opacity-80 animate-pulse">Inverted Tree Theory</h3>
             </div>
          </div>

          {/* Right Block: Ayurveda Metaphor */}
          <div className="md:col-span-4 relative flex flex-col items-end text-right md:text-left md:items-start">
             <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10 max-w-sm relative">
                <h2 className="font-display text-4xl text-cream mb-6 tracking-tight relative inline-block">
                  Ayurveda Metaphor
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-cream/30"></div>
                </h2>
                <p className="font-sans text-cream/70 text-base leading-relaxed">
                  The physical body is an inverted tree, with the head acting as the trunk and the limbs as branches. Healing starts at the "root" (the mind and soul).
                </p>
                
                <div className="absolute -top-12 -right-12 md:-right-20">
                   <div className="relative w-28 h-28 flex items-center justify-center animate-spin-slow">
                      <div className="absolute inset-0 bg-accent-orange/10 blur-xl rounded-full"></div>
                      <svg viewBox="0 0 100 100" className="w-full h-full text-[#9C5344] fill-current">
                        <path d="M50 0 L58 35 L93 35 L65 57 L75 93 L50 71 L25 93 L35 57 L7 35 L42 35 Z" strokeWidth="2" stroke="rgba(255,255,255,0.1)" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-[#1D0F0C] rounded-full border border-[#9C5344] flex flex-col items-center justify-center">
                            <span className="text-[6px] font-black uppercase tracking-[0.2em] text-[#C06D5C]">Harmonic</span>
                            <div className="w-4 h-4 rounded-full border border-[#9C5344]/40 my-0.5 flex items-center justify-center">
                               <div className="w-1 h-1 bg-[#C06D5C] rounded-full"></div>
                            </div>
                            <span className="text-[6px] font-black uppercase tracking-[0.2em] text-[#C06D5C]">Health</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Clinical Application */}
        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-cream/80 border-t border-cream/10 pt-16 mt-12">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-accent-orange uppercase tracking-wide">The Root (The Soul)</h3>
            <p className="font-sans text-base leading-relaxed opacity-80">
              In Full Circle, we map the clinical and the subtle. We understand that physical imbalances are often manifestations of deeper energetic or spiritual imprints carried by the soul.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-accent-orange uppercase tracking-wide">The Branch (The Symptom)</h3>
            <p className="font-sans text-base leading-relaxed opacity-80">
              By locating the root cause, we build a plan that treats the whole person. We do not chase symptoms alone; we align the branches by healing the roots.
            </p>
          </div>
        </div>

        {/* Summary Line */}
        <div className="w-full mt-16 text-center border-t border-white/5 pt-8">
          <p className="font-sans text-xs md:text-sm text-cream/50 uppercase tracking-[0.3em] max-w-4xl mx-auto px-6 italic">
            "A reversed structure signifies illusion, detachment, and a shift in the direction of logic."
          </p>
        </div>
      </section>

      {/* 4. MISSION SECTION - Mapped to Old "A Complete Health Map" */}
      <section className="bg-cream py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
                <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Mission</span>
                <h2 className="font-display text-6xl text-dark-brown">A Complete Health Map</h2>
                <p className="text-xl text-dark-brown/80 leading-relaxed font-serif italic">
                   We align treatment, lifestyle, and recovery around a single, comprehensive plan.
                </p>
                <Link to="/inverted-tree" className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-xs border-b-2 border-dark-brown pb-1 hover:text-accent-orange hover:border-accent-orange transition-all">
                  Read Philosophy <ArrowRight size={14} />
                </Link>
             </div>
             <div className="bg-[#1D1614] p-12 rounded-[3rem] text-cream border border-dark-brown/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl group-hover:bg-accent-orange/20 transition-all"></div>
                <h3 className="font-display text-4xl mb-6">Integrative Care</h3>
                <p className="text-cream/70 leading-relaxed mb-8">
                  Choose the USA Protocol, the Ancient Protocol, or bridge both for the ultimate diagnostic picture.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                    <Compass size={20} className="text-accent-orange" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cream/60">One Plan</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION - Mapped to Old "Ready to Complete the Circle?" */}
      <section className="relative overflow-hidden py-32 px-6 flex flex-col items-center min-h-[500px] border-b border-dark-brown/20 shadow-inner text-center"
               style={{ background: 'linear-gradient(135deg, #1D0F0C 0%, #3D1E16 25%, #70362A 50%, #3D1E16 75%, #1D0F0C 100%)' }}>
        
         <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-soft-light" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

         <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="font-display text-6xl md:text-8xl text-cream mb-10">Ready to Complete the Circle?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-accent-orange via-peach to-accent-orange mx-auto mb-12"></div>
            <p className="font-serif italic text-2xl md:text-3xl text-cream/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards a comprehensive understanding of your health.
            </p>
            <Link to="/appointment" className="inline-flex items-center gap-4 bg-cream text-dark-brown px-16 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent-orange hover:text-dark-brown transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-2">
              <ShieldCheck size={20} />
              <span>Book Appointment</span>
            </Link>
         </div>
      </section>

      <style>{`
        @keyframes shine-sweep {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default Home;