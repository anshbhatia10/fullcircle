import React from 'react';
import { ShieldCheck, Heart, Sparkles, Activity, Globe, Award, BookOpen, Quote, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import ownerImage from '../PHOTO-2026-04-05-16-06-43.jpg';

const DrPrernaKumar: React.FC = () => {
  return (
    <div className="bg-[#FAF3F0] min-h-screen pt-32 pb-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#B5838D]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <span className="text-[#8E5D52] uppercase tracking-widest font-black text-xs mb-4 block italic">Founder & Medical Director</span>
              <h1 className="font-display text-6xl md:text-8xl text-[#4A314D] mb-8 leading-none">
                Dr. Prerna <br />
                <span className="italic text-[#B5838D]">Kumar</span>
              </h1>
              <p className="text-xl text-[#4A314D]/80 font-serif italic leading-relaxed mb-8">
                "Bridging the gap between advanced clinical science and the holistic essence of human wellness."
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="bg-[#4A314D] text-[#FAF3F0] px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Internist</div>
                <div className="bg-[#B5838D] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Nephrologist</div>
                <div className="bg-[#8E5D52] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">Transplant Specialist</div>
              </div>
              <Link 
                to="/appointment" 
                className="inline-flex items-center gap-4 bg-[#4A314D] text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#8E5D52] transition-all shadow-xl transform hover:-translate-y-1"
              >
                <Calendar size={18} />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#B5838D]/15 rounded-full blur-2xl"></div>
              <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full overflow-hidden border-[12px] border-white shadow-2xl transition-all duration-700 hover:scale-[1.02]">
                <img 
                  src={ownerImage} 
                  alt="Dr. Prerna Kumar" 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-[#4A314D]/5 max-w-[180px] z-10 hidden md:block">
                <div className="flex items-center gap-2 text-[#8E5D52] mb-2">
                  <ShieldCheck size={16} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Certified</span>
                </div>
                <p className="font-display text-lg text-[#4A314D]">American Board Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* ACADEMIC EXCELLENCE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white p-10 rounded-[3rem] border border-[#4A314D]/5 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#B5838D]/10 flex items-center justify-center text-[#B5838D] mb-6 group-hover:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <h3 className="font-display text-2xl text-[#4A314D] mb-4">Clinical Training</h3>
            <p className="text-[#4A314D]/70 text-sm leading-relaxed">
              Internal Medicine residency at Montefiore Medical Center, Albert Einstein College of Medicine, Bronx, NY.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-[#4A314D]/5 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#B5838D]/10 flex items-center justify-center text-[#B5838D] mb-6 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <h3 className="font-display text-2xl text-[#4A314D] mb-4">Specialization</h3>
            <p className="text-[#4A314D]/70 text-sm leading-relaxed">
              DM in Nephrology from the University of Iowa, followed by advanced Fellowship in Transplant Nephrology.
            </p>
          </div>
          <div className="bg-white p-10 rounded-[3rem] border border-[#4A314D]/5 shadow-sm hover:shadow-xl transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-[#B5838D]/10 flex items-center justify-center text-[#B5838D] mb-6 group-hover:scale-110 transition-transform">
              <BookOpen size={24} />
            </div>
            <h3 className="font-display text-2xl text-[#4A314D] mb-4">Academic Tenure</h3>
            <p className="text-[#4A314D]/70 text-sm leading-relaxed">
              Served as Assistant Professor of Medicine and Surgery in Transplant Nephrology at the University of Illinois, Chicago.
            </p>
          </div>
        </div>

        {/* DETAILED BIO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
           <div className="lg:col-span-7 space-y-8">
              <h2 className="font-display text-5xl text-[#4A314D]">A Journey of Global Excellence</h2>
              <div className="prose prose-stone max-w-none text-[#4A314D]/70 space-y-6 font-sans text-lg leading-relaxed">
                <p>
                  Dr. Prerna Kumar is a distinguished Internist and Nephrologist with an illustrious career spanning some of the most prestigious medical institutions in the United States and India. Her academic journey began at SDUMC, Rajiv Gandhi University, Karnataka (2008), before she moved to New York to pursue her specialization.
                </p>
                <p>
                  With a deep-seated commitment to clinical excellence, she completed her Internal Medicine graduation at Montefiore Medical Centre, Albert Einstein College of Medicine. Her pursuit of mastery in kidney health led her to the University of Iowa for her DM in Nephrology, followed by an intensive year of fellowship training in Transplant Nephrology.
                </p>
                <p>
                  Before returning to her roots in India, Dr. Kumar shared her expertise as an Assistant Professor of Medicine and Surgery at the University of Illinois, Chicago. Today, she brings this wealth of international experience to Full Circle, where she focuses on solving complex diagnostic problems and managing chronic illnesses with a preventive mindset.
                </p>
              </div>
           </div>
           <div className="lg:col-span-5 bg-[#4A314D] text-[#FAF3F0] p-12 rounded-[4rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <h3 className="font-display text-3xl mb-8 border-b border-white/10 pb-4 text-[#B5838D]">Areas of Expertise</h3>
              <ul className="space-y-6">
                {[
                  { title: "Adult Medicine", desc: "Complex diagnostic problem solving and acute illness management." },
                  { title: "Hypertension", desc: "Advanced management of high blood pressure and its systemic effects." },
                  { title: "Kidney Disease", desc: "Comprehensive care for chronic kidney conditions and transplant patients." },
                  { title: "Preventive Care", desc: "Holistic strategies to maintain long-term health and prevent chronic disease." }
                ].map((item, i) => (
                  <li key={i} className="group">
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-1 group-hover:text-[#E5989B] transition-colors">{item.title}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </li>
                ))}
              </ul>
           </div>
        </div>

        {/* HOLISTIC PHILOSOPHY */}
        <div className="relative bg-[#B5838D] rounded-[4rem] p-12 md:p-24 overflow-hidden border border-[#E5989B]/10 text-white text-center">
          <div className="absolute top-0 left-0 p-12 opacity-10 rotate-180">
            <Quote size={200} />
          </div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Medical Philosophy</span>
            <h2 className="font-display text-4xl md:text-7xl mb-12 leading-tight">Beyond Clinical <br /><span className="italic opacity-80">Boundaries</span></h2>
            <div className="space-y-8 font-serif text-xl md:text-3xl leading-relaxed italic opacity-90">
              <p>
                Dr. Kumar believes that true healing is a holistic journey. Beyond the clinical protocols, she is a dedicated practitioner of yoga and meditation, advocating for spiritual well-being as a cornerstone of health.
              </p>
              <p>
                In her practice, she integrates the rigorous evidence-based standards of the West with the ancient wisdom of holistic wellness, ensuring that every patient is treated as a complete soul, not just a set of symptoms.
              </p>
            </div>
            
            <div className="mt-16 flex flex-wrap justify-center gap-12 border-t border-white/10 pt-16">
              <div className="flex flex-col items-center">
                <Activity className="mb-4 text-[#E5989B]" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Scientific Rigor</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="mb-4 text-[#E5989B]" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Holistic Insight</span>
              </div>
              <div className="flex flex-col items-center">
                <Heart className="mb-4 text-[#E5989B]" />
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">Compassionate Care</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DrPrernaKumar;
