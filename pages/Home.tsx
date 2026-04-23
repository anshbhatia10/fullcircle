import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Heart, Sparkles, Compass, ShieldCheck, Palette, Calendar, Circle } from 'lucide-react';
import treeVideo from '../The_tree_featured_1080p_smooth.mp4';
import ownerImage from '../PHOTO-2026-04-05-16-06-43.jpg';
import drImage from '../1456482892.jpg';
import { useTina } from "tinacms/dist/react";
import homeContent from '../content/home.json';

const Home: React.FC = (props) => {
  const { data } = useTina({
    query: `{
      home(relativePath: "home.json") {
        hero {
          titlePart1
          titlePart2
          subtitle
        }
        founder {
          quote
          image
          bio
        }
        philosophy {
          hinduismText
          ayurvedaText
          rootSoulText
          branchSymptomText
        }
      }
    }`,
    variables: {},
    data: { home: homeContent },
  });

  const { hero, founder, philosophy } = data.home;
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
        
        {/* CORNER SATELLITES */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-top-left transition-all duration-700">
           <Link to="/screening-circle" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100">
                <defs><path id="circle-prevent" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="8.5" letterSpacing="2.2" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-prevent">Screening Circle • Screening Circle •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-[#B5838D] rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Activity size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-top-right transition-all duration-700">
           <Link to="/aesthetic-circle" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100" style={{ animationDirection: 'reverse' }}>
                <defs><path id="circle-intervene" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="8.5" letterSpacing="2.2" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-intervene">Aesthetic Circle • Aesthetic Circle •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-[#E5989B] rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Sparkles size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        <div className="absolute bottom-24 left-6 md:bottom-28 md:left-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-bottom-left transition-all duration-700">
           <Link to="/full-circle-pcp" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100">
                <defs><path id="circle-yellow" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="8.5" letterSpacing="2.2" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-yellow">Full Circle PCP • Full Circle PCP •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-[#DDBEA9] rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Heart size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        <div className="absolute bottom-24 right-6 md:bottom-28 md:right-12 z-20 scale-[0.55] md:scale-90 lg:scale-100 origin-bottom-right transition-all duration-700">
           <Link to="/inverted-tree" className="relative w-40 h-40 flex items-center justify-center group cursor-pointer">
              <svg className="w-full h-full animate-spin-slow text-dark-brown/40" viewBox="0 0 100 100" style={{ animationDirection: 'reverse' }}>
                <defs><path id="circle-purple" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
                <text fontSize="11" letterSpacing="4.5" className="uppercase font-black fill-current">
                  <textPath xlinkHref="#circle-purple">Philosophy • Philosophy •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-[#B5838D] rounded-full flex items-center justify-center shadow-2xl border-4 border-white group-hover:scale-110 transition-transform">
                    <Palette size={28} className="text-white" strokeWidth={2.5} />
                 </div>
              </div>
           </Link>
        </div>

        <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
          <div className="relative flex flex-col items-center justify-center mb-16">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-gradient-to-b from-[#E5989B] to-[#FFD8CC] z-0 pointer-events-none transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center select-none cursor-default">
              <h1 className="font-display text-[6.5rem] md:text-[13rem] lg:text-[16rem] leading-[0.7] text-dark-brown tracking-tighter mix-blend-multiply transition-all duration-500">
                {hero.titlePart1}
              </h1>
              <h1 className="font-display text-[6.5rem] md:text-[13rem] lg:text-[16rem] leading-[0.7] text-dark-brown tracking-tighter mix-blend-multiply italic -mt-4 md:-mt-10 transition-all duration-500">
                {hero.titlePart2}
              </h1>
            </div>
          </div>
          <div className="absolute bottom-10 md:bottom-16 flex flex-col items-center">
             <div className="w-[1.5px] h-12 md:h-16 bg-dark-brown/40 mb-8"></div>
             <p className="font-sans text-[11px] md:text-lg font-black uppercase tracking-[0.4em] text-dark-brown text-center px-10 transition-all leading-relaxed max-w-2xl">
               {hero.subtitle}
             </p>
          </div>
        </div>
      </section>

      {/* 2. THIN SCROLLING MARQUEE DIVIDER */}
      <section className="relative w-full overflow-hidden will-change-transform">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#B5838D] via-[#E5989B] via-[#FFD8CC] to-[#DDBEA9] relative z-20"></div>
        <div className="bg-dark-brown py-3 md:py-5 relative overflow-hidden group">
           <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
           <div className="whitespace-nowrap flex animate-marquee will-change-transform translate-z-0">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center space-x-6 md:space-x-12 px-3 md:px-6">
                  <span className="font-display text-2xl md:text-5xl lg:text-6xl text-cream tracking-[0.15em] uppercase select-none opacity-90">Compassion</span>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#E5989B]/80 shadow-[0_0_10px_rgba(229,152,155,0.4)]"></div>
                  <span className="font-display text-2xl md:text-5xl lg:text-6xl text-cream tracking-[0.15em] uppercase italic select-none opacity-90">Nurturing</span>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#B5838D]/80 shadow-[0_0_10px_rgba(181,131,141,0.4)]"></div>
                </div>
              ))}
           </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#B5838D] via-[#E5989B] via-[#FFD8CC] to-[#DDBEA9] relative z-20"></div>
      </section>

      {/* 3. DR PRERNA KUMAR (OWNER) SECTION */}
      <section className="bg-white py-32 px-6 border-b border-dark-brown/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Founder & Medical Director</span>
              <h2 className="font-display text-5xl md:text-7xl text-dark-brown leading-tight">
                Dr. Prerna <span className="italic">Kumar</span>
              </h2>
              <div className="space-y-4 text-dark-brown/70 leading-relaxed font-sans">
                <p className="text-lg font-serif italic text-dark-brown/90 mb-6">
                  "{founder.quote}"
                </p>
                {founder.bio.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/dr-prerna-kumar" className="inline-flex justify-center items-center gap-2 bg-dark-brown text-cream px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent-orange transition-all shadow-lg transform hover:-translate-y-1">
                  Read Biography
                </Link>
                <Link to="/appointment" className="inline-flex justify-center items-center gap-2 border border-dark-brown/20 text-dark-brown px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-dark-brown hover:text-white transition-all">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="absolute inset-0 bg-[#B5838D]/5 rounded-full blur-[100px] -z-10"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-[12px] border-cream shadow-2xl">
                <img 
                  src={ownerImage} 
                  alt="Dr. Prerna Kumar" 
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Badge adjusted for mobile: relative on mobile, absolute on lg+ screens */}
              <div className="mt-8 lg:mt-0 lg:absolute lg:-bottom-6 lg:left-10 bg-cream p-6 rounded-3xl shadow-xl border border-dark-brown/5 max-w-[240px] z-10 mx-auto lg:mx-0">
                <div className="flex items-center gap-2 text-accent-orange mb-2">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Board Certified</span>
                </div>
                <p className="font-display text-xl text-dark-brown">Internal Medicine & Nephrology</p>
                <p className="text-[10px] text-dark-brown/40 font-bold uppercase tracking-widest mt-1">USA & India Licensed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INVERTED TREE THEORY SECTION */}
      <section className="relative overflow-hidden py-32 px-6 flex flex-col items-center min-h-[900px] border-b border-dark-brown/20 shadow-inner bg-soft-pink">
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-soft-light" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-4 relative">
             <div className="mb-10">
                <h2 className="font-display text-4xl md:text-5xl text-dark-brown mb-6 tracking-tight relative inline-block">
                  Hinduism Metaphor
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-dark-brown/20"></div>
                </h2>
                <p className="font-sans text-dark-brown/70 text-base leading-relaxed max-w-sm">
                  {philosophy.hinduismText}
                </p>
             </div>
             <div className="mt-8">
               <span className="px-6 py-1.5 bg-white/40 backdrop-blur-md border border-dark-brown/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-dark-brown/70">Bhagavad Gita</span>
             </div>
          </div>

          <div className="md:col-span-4 flex justify-center items-center">
             <div className="relative group">
                <div className="w-64 h-80 bg-white/20 backdrop-blur-md rounded-t-full rounded-b-full p-1 border border-dark-brown/10 shadow-[0_0_50px_rgba(181,131,141,0.1)] overflow-hidden relative">
                   <video 
                     ref={videoRef}
                     autoPlay 
                     loop 
                     muted 
                     playsInline 
                     className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 transform opacity-90"
                   >
                     <source src={treeVideo} type="video/mp4" />
                   </video>
                   <div className="absolute inset-0 bg-gradient-to-t from-[#B5838D]/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-dark-brown/30">
                   <Activity size={20} strokeWidth={1} />
                </div>
             </div>
             <div className="absolute -bottom-12 text-center w-full">
                <h3 className="font-display text-3xl text-accent-orange uppercase tracking-[0.2em] opacity-80 animate-pulse">Inverted Tree Theory</h3>
             </div>
          </div>

          <div className="md:col-span-4 relative flex flex-col items-end text-right md:text-left md:items-start">
             <div className="bg-white/40 backdrop-blur-sm p-10 rounded-[2.5rem] border border-dark-brown/5 max-w-sm relative">
                <h2 className="font-display text-4xl text-dark-brown mb-6 tracking-tight relative inline-block">
                  Ayurveda Metaphor
                  <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-dark-brown/20"></div>
                </h2>
                <p className="font-sans text-dark-brown/70 text-base leading-relaxed">
                  {philosophy.ayurvedaText}
                </p>
                <div className="absolute -top-12 -right-12 md:-right-20">
                   <div className="relative w-28 h-28 flex items-center justify-center animate-spin-slow">
                      <div className="absolute inset-0 bg-[#B5838D]/5 blur-xl rounded-full"></div>
                      <svg viewBox="0 0 100 100" className="w-full h-full text-[#B5838D]/40 fill-current">
                        <path d="M50 0 L58 35 L93 35 L65 57 L75 93 L50 71 L25 93 L35 57 L7 35 L42 35 Z" strokeWidth="2" stroke="rgba(0,0,0,0.05)" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-16 h-16 bg-white/80 rounded-full border border-[#B5838D]/20 flex flex-col items-center justify-center">
                            <span className="text-[6px] font-black uppercase tracking-[0.2em] text-[#B5838D]">Harmonic</span>
                            <div className="w-4 h-4 rounded-full border border-[#B5838D]/40 my-0.5 flex items-center justify-center">
                               <div className="w-1 h-1 bg-[#B5838D] rounded-full"></div>
                            </div>
                            <span className="text-[6px] font-black uppercase tracking-[0.2em] text-[#B5838D]">Health</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 text-dark-brown/60 border-t border-dark-brown/10 pt-16 mt-12">
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-accent-orange uppercase tracking-wide">The Root (The Soul)</h3>
            <p className="font-sans text-base leading-relaxed opacity-80">
              {philosophy.rootSoulText}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-display text-3xl text-accent-orange uppercase tracking-wide">The Branch (The Symptom)</h3>
            <p className="font-sans text-base leading-relaxed opacity-80">
              {philosophy.branchSymptomText}
            </p>
          </div>
        </div>

        <div className="w-full mt-16 text-center border-t border-dark-brown/10 pt-8">
          <p className="font-sans text-xs md:text-sm text-dark-brown/40 uppercase tracking-[0.3em] max-w-4xl mx-auto px-6 italic">
            "A reversed structure signifies illusion, detachment, and a shift in the direction of logic."
          </p>
        </div>
      </section>

      {/* 5. MISSION SECTION */}
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
             <div className="bg-soft-pink p-12 rounded-[3rem] text-dark-brown/80 border border-dark-brown/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl group-hover:bg-accent-orange/20 transition-all"></div>
                <h3 className="font-display text-4xl mb-6">Integrative Care</h3>
                <p className="text-dark-brown/60 leading-relaxed mb-8">
                  Choose the USA Protocol, the Ancient Protocol, or bridge both for the ultimate diagnostic picture.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-dark-brown/5 flex items-center justify-center">
                    <Compass size={20} className="text-accent-orange" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-dark-brown/40">One Plan</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. DR NK SHARMA FEATURED SECTION */}
      <section className="bg-peach py-32 px-6 border-y border-dark-brown/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative flex justify-center">
              <div className="absolute inset-0 bg-[#E5989B]/10 rounded-full blur-[100px] -z-10"></div>
              <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
                <img 
                  src={drImage} 
                  alt="Dr. N.K. Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-1/2 translate-x-1/2 lg:right-10 lg:translate-x-0 bg-white p-6 rounded-3xl shadow-xl border border-dark-brown/5 max-w-[200px] z-10">
                <div className="flex items-center gap-2 text-accent-orange mb-2">
                  <Calendar size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Available</span>
                </div>
                <p className="font-display text-xl text-dark-brown">Wednesdays</p>
                <p className="text-[10px] text-dark-brown/40 font-bold uppercase tracking-widest mt-1">10 AM – 7 PM</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Special Guest Specialist</span>
              <h2 className="font-display text-5xl md:text-7xl text-dark-brown leading-tight">
                Dr. N.K. <span className="italic">Sharma</span>
              </h2>
              <p className="text-xl text-dark-brown/80 font-serif italic leading-relaxed">
                "Where the science of the kidney meets the wisdom of the soul."
              </p>
              <div className="space-y-4 text-dark-brown/70 leading-relaxed">
                <p>
                  We are honored to host Dr. N.K. Sharma, the world-renowned Reiki Master and Naturopath, for exclusive Wednesday consultations at our Gurgaon clinic.
                </p>
                <p>
                  Experience a profound transformation as Dr. Sharma bridges the gap between modern clinical knowledge and ancient spiritual traditions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Link to="/dr-nk-sharma" className="inline-flex justify-center items-center gap-2 bg-dark-brown text-cream px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-accent-orange transition-all shadow-lg transform hover:-translate-y-1">
                  Read Biography
                </Link>
                <Link to="/appointment" className="inline-flex justify-center items-center gap-2 border border-dark-brown/20 text-dark-brown px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-dark-brown hover:text-white transition-all">
                  Book Wednesday Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. THE PLEDGE SECTION (NEW) */}
      <section className="bg-white py-32 px-6 border-b border-dark-brown/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-orange/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-accent-orange/10 rounded-full">
                <Heart size={16} className="text-accent-orange fill-accent-orange" />
                <span className="text-accent-orange uppercase tracking-[0.2em] font-black text-[10px]">A Pact of Consciousness</span>
              </div>
              <h2 className="font-display text-6xl md:text-7xl text-dark-brown leading-tight">
                The Living <span className="italic">Legacy</span>
              </h2>
              <p className="text-xl text-dark-brown/70 leading-relaxed font-serif italic">
                "At Full Circle, we believe the highest expression of 'Consciousness' is the recognition that we are all connected."
              </p>
              <div className="space-y-6 text-dark-brown/60 leading-relaxed">
                <p>
                  Every member of our clinical staff, including Dr. Prerna, is a Pledged Organ Donor. We invite you to join this circle of biological hope and spiritual merit.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-cream rounded-3xl border border-dark-brown/5">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center shrink-0">
                      <Sparkles size={16} className="text-accent-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-dark-brown mb-1">Selfless Merit</h4>
                      <p className="text-[10px]">Neutralize karma through the gift of life.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-cream rounded-3xl border border-dark-brown/5">
                    <div className="w-8 h-8 rounded-full bg-accent-orange/10 flex items-center justify-center shrink-0">
                      <ShieldCheck size={16} className="text-accent-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs uppercase tracking-widest text-dark-brown mb-1">EWS Support</h4>
                      <p className="text-[10px]">Direct support for medical evaluations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/pledge" className="inline-flex items-center gap-4 bg-dark-brown text-cream px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-accent-orange transition-all shadow-xl group">
                <span>Sign the Circle</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-dark-brown rounded-[4rem] flex flex-col items-center justify-center p-12 text-cream text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Circle size={300} strokeWidth={0.5} className="absolute text-cream/5 animate-spin-slow" />
                <Heart size={80} strokeWidth={1} className="mb-10 text-accent-orange animate-pulse" />
                <h3 className="font-display text-4xl mb-6 relative z-10">"I have signed the circle."</h3>
                <p className="text-cream/50 uppercase tracking-[0.3em] font-bold text-xs relative z-10 font-sans">Full Circle Conscious Donor</p>
                <div className="mt-12 pt-12 border-t border-cream/10 w-full relative z-10">
                  <p className="font-serif italic text-lg text-cream/70">"My transition becomes another's beginning."</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-orange rounded-full flex items-center justify-center shadow-2xl border-[12px] border-white transform rotate-12">
                <span className="text-white font-black uppercase tracking-tighter text-3xl leading-none text-center">JOIN<br/>US</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <section className="relative overflow-hidden py-32 px-6 flex flex-col items-center min-h-[500px] border-b border-dark-brown/20 shadow-inner text-center bg-soft-pink">
         <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-soft-light" 
             style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

         <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="font-display text-6xl md:text-8xl text-dark-brown mb-10">Ready to Complete the Circle?</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#B5838D] via-[#E5989B] via-[#FFD8CC] to-[#FAF3F0] mx-auto mb-12"></div>
            <p className="font-serif italic text-2xl md:text-3xl text-dark-brown/60 mb-10 leading-relaxed max-w-3xl mx-auto">
              Take the first step towards a comprehensive understanding of your health.
            </p>
            <Link to="/appointment" className="inline-flex items-center gap-4 bg-dark-brown text-cream px-16 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent-orange transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-2">
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
