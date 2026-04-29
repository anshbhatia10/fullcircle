import React from 'react';
import { ShieldCheck, Heart, Sparkles, Activity, Clock, Calendar, MapPin, ExternalLink, Quote, Award, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import drImage from '../1456482892.jpg';
import drData from '../content/doctors/nk-sharma.json';

const DrNKSharma: React.FC = () => {
  const data = { doctors: drData };

  const { name, lastName, title, quote, tags, image, academicBio, excellence, philosophy, ui } = data.doctors;

  return (
    <div className="bg-[#FAF3F0] min-h-screen pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E5989B]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-[#8E5D52] uppercase tracking-widest font-black text-xs mb-4 block italic">{title}</span>
              <h1 className="font-display text-6xl md:text-8xl text-[#4A314D] mb-8 leading-none">
                {name} <br />
                <span className="italic text-[#B5838D]">{lastName}</span>
              </h1>
              <p className="text-xl text-[#4A314D]/80 font-serif italic leading-relaxed mb-8">
                "{quote}"
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                {tags && tags.map((tag: string, i: number) => (
                  <div key={i} className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest ${i === 0 ? 'bg-[#4A314D] text-[#FAF3F0]' : i === 1 ? 'bg-[#B5838D] text-white' : 'bg-[#8E5D52] text-white'}`}>
                    {tag}
                  </div>
                ))}
              </div>
              <a 
                href={ui?.consultationButtonUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#4A314D] text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8E5D52] transition-all shadow-xl transform hover:-translate-y-1"
              >
                <ShieldCheck size={18} />
                <span>{ui?.consultationButtonLabel}</span>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E5989B]/20 rounded-full blur-2xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={image || drImage} 
                  alt={`${name} ${lastName}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CLINICAL HOURS & INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {excellence && excellence.map((item: any, i: number) => (
             <div key={i} className={`p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all ${i === 2 ? 'bg-[#B5838D] text-[#FAF3F0] relative overflow-hidden group' : 'bg-white border border-[#4A314D]/5'}`}>
                {i === 2 && <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>}
                {i === 0 ? <Calendar className={i === 2 ? "text-white mb-6" : "text-[#B5838D] mb-6"} size={32} /> : i === 1 ? <Clock className={i === 2 ? "text-white mb-6" : "text-[#B5838D] mb-6"} size={32} /> : <MapPin className="text-white mb-6" size={32} />}
                <h3 className={`font-display text-2xl mb-2 ${i === 2 ? '' : 'text-[#4A314D]'}`}>{item.title}</h3>
                <p className={`${i === 2 ? 'text-white/80' : 'text-[#4A314D]/60'} uppercase tracking-widest font-bold text-xs leading-relaxed`}>{item.description}</p>
             </div>
          ))}
        </div>

        {/* PHILOSOPHY & LEGACY */}
        <div className="relative mb-32 bg-[#E5989B]/5 rounded-[4rem] p-12 md:p-24 overflow-hidden border border-[#E5989B]/10">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-[#4A314D]">
            <Quote size={200} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-[#4A314D] mb-12">{ui?.bridgingHeading}</h2>
            <div className="space-y-8 font-serif text-lg md:text-2xl text-[#4A314D]/70 leading-relaxed italic">
              {philosophy && philosophy.map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* RECOGNITION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-5xl text-[#4A314D]">{ui?.legacyHeading}</h2>
            <p className="text-lg text-[#4A314D]/70 leading-relaxed">
              {academicBio}
            </p>
            <div className="flex gap-8">
              {ui?.stats?.map((stat: any, i: number) => (
                <div key={i} className="flex flex-col">
                  <span className="text-4xl font-display text-[#B5838D]">{stat.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A314D]/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] border border-[#4A314D]/5 shadow-sm">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-[#E5989B]/10 flex items-center justify-center text-[#E5989B]">
                 <Sparkles size={24} />
               </div>
               <h3 className="font-display text-2xl text-[#4A314D]">{ui?.visionHeading}</h3>
             </div>
             <p className="text-[#4A314D]/70 leading-relaxed mb-6 italic">
               "{ui?.visionQuote}"
             </p>
             <Link 
               to="/appointment" 
               className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px] border-b-2 border-[#4A314D] pb-1 hover:text-[#B5838D] hover:border-[#B5838D] transition-all"
             >
               <span>{ui?.ctaLabel}</span> <ExternalLink size={12} />
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DrNKSharma;

