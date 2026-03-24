import React from 'react';
import { ShieldCheck, Heart, Sparkles, Activity, Clock, Calendar, MapPin, ExternalLink, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import drImage from '../1456482892.jpg';

const DrNKSharma: React.FC = () => {
  return (
    <div className="bg-[#FAF3F0] min-h-screen pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E5989B]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-[#8E5D52] uppercase tracking-widest font-black text-xs mb-4 block italic">Specialist Physician & Spiritual Guide</span>
              <h1 className="font-display text-6xl md:text-8xl text-[#4A314D] mb-8 leading-none">
                Dr. N.K. <br />
                <span className="italic text-[#B5838D]">Sharma</span>
              </h1>
              <p className="text-xl text-[#4A314D]/80 font-serif italic leading-relaxed mb-8">
                "Where the science of the kidney meets the wisdom of the soul."
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-[#4A314D] text-[#FAF3F0] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Founder, Reiki Healing Foundation</div>
                <div className="bg-[#B5838D] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Naturopath</div>
                <div className="bg-[#8E5D52] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Spiritual Healer</div>
              </div>
              <a 
                href="https://wa.me/919910930108?text=I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20NK%20Sharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-[#4A314D] text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8E5D52] transition-all shadow-xl transform hover:-translate-y-1"
              >
                <ShieldCheck size={18} />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#E5989B]/20 rounded-full blur-2xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src={drImage} 
                  alt="Dr. N.K. Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CLINICAL HOURS & INFO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white p-10 rounded-[3rem] border border-[#4A314D]/5 shadow-sm hover:shadow-xl transition-all">
            <Calendar className="text-[#B5838D] mb-6" size={32} />
            <h3 className="font-display text-2xl text-[#4A314D] mb-2">Consultation Days</h3>
            <p className="text-[#4A314D]/60 uppercase tracking-widest font-bold text-xs">Wednesdays Only</p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-[#4A314D]/5 shadow-sm hover:shadow-xl transition-all">
            <Clock className="text-[#B5838D] mb-6" size={32} />
            <h3 className="font-display text-2xl text-[#4A314D] mb-2">Clinical Hours</h3>
            <p className="text-[#4A314D]/60 uppercase tracking-widest font-bold text-xs">10:00 AM – 7:00 PM</p>
          </div>
          <div className="bg-[#B5838D] p-10 rounded-[3rem] text-[#FAF3F0] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <MapPin className="text-white mb-6" size={32} />
            <h3 className="font-display text-2xl mb-2">Location</h3>
            <p className="text-white/80 uppercase tracking-widest font-bold text-xs leading-relaxed">
              Full Circle Consciousness Clinic, Gurgaon
            </p>
          </div>
        </div>

        {/* PHILOSOPHY & LEGACY */}
        <div className="relative mb-32 bg-[#E5989B]/5 rounded-[4rem] p-12 md:p-24 overflow-hidden border border-[#E5989B]/10">
          <div className="absolute top-0 right-0 p-12 opacity-5 text-[#4A314D]">
            <Quote size={200} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl text-[#4A314D] mb-12">Bridging Spirituality <br />& Science</h2>
            <div className="space-y-8 font-serif text-lg md:text-2xl text-[#4A314D]/70 leading-relaxed italic">
              <p>
                Dr. N.K. Sharma’s teachings transcend the technicalities of healing. He serves as a guide for those seeking self-discovery and profound spiritual evolution.
              </p>
              <p>
                By anchoring ancient traditions in modern scientific understanding, he offers a comprehensive roadmap that addresses the totality of human experience—from cellular health to cosmic consciousness.
              </p>
              <p>
                His legacy as a mentor and source of inspiration has touched millions, illuminating the path toward a fulfilling and enlightened existence.
              </p>
            </div>
          </div>
        </div>

        {/* RECOGNITION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-5xl text-[#4A314D]">A Global Legacy</h2>
            <p className="text-lg text-[#4A314D]/70 leading-relaxed">
              As a world-renowned speaker and mentor, Dr. Sharma shares his insights across international conferences and workshops. His dedication to spreading enlightenment has earned him global respect, inspiring individuals to unlock their true potential.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col">
                <span className="text-4xl font-display text-[#B5838D]">Millions</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A314D]/50">Lives Touched</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-display text-[#B5838D]">Global</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4A314D]/50">Presence</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] border border-[#4A314D]/5 shadow-sm">
             <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-[#E5989B]/10 flex items-center justify-center text-[#E5989B]">
                 <Sparkles size={24} />
               </div>
               <h3 className="font-display text-2xl text-[#4A314D]">The Vision</h3>
             </div>
             <p className="text-[#4A314D]/70 leading-relaxed mb-6 italic">
               "Dr. Sharma is more than a teacher; he is a source of inspiration for those who seek to understand the universe through the lens of their own soul."
             </p>
             <Link 
               to="/appointment" 
               className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px] border-b-2 border-[#4A314D] pb-1 hover:text-[#B5838D] hover:border-[#B5838D] transition-all"
             >
               Book with the team <ExternalLink size={12} />
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DrNKSharma;
