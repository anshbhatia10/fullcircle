import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Star, Heart, Compass, ShieldCheck, Zap, User, Scan, Fingerprint, Eye, GraduationCap, MapPin, Sparkles, Flower, Gem, Clock } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-cream min-h-screen flex flex-col overflow-x-hidden pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center px-6">
          <div className="relative flex flex-col items-center justify-center mb-16">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[480px] md:h-[480px] lg:w-[580px] lg:h-[580px] rounded-full bg-peach z-0 pointer-events-none transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col items-center select-none cursor-default">
              <h1 className="font-display text-[6.5rem] md:text-[13rem] lg:text-[16rem] leading-[0.7] text-dark-brown tracking-tighter mix-blend-multiply transition-all duration-500">Full</h1>
              <h1 className="font-display text-[6.5rem] md:text-[13rem] lg:text-[16rem] leading-[0.7] text-dark-brown tracking-tighter mix-blend-multiply italic -mt-4 md:-mt-10 transition-all duration-500">Circle</h1>
            </div>
          </div>
          <div className="absolute bottom-10 md:bottom-16 flex flex-col items-center">
             <div className="w-[1.5px] h-12 md:h-16 bg-dark-brown/40 mb-8"></div>
             <p className="font-sans text-[11px] md:text-lg font-black uppercase tracking-[0.4em] text-dark-brown text-center px-10 leading-relaxed max-w-2xl">
               USA Protocol Meets Antric Wisdom
             </p>
          </div>
        </div>
      </section>

      {/* 2. STATIC DIVIDER */}
      <section className="relative w-full border-y border-dark-brown/10">
        <div className="bg-[#1D1614] py-4 md:py-6 flex justify-center items-center">
           <div className="flex items-center space-x-3 md:space-x-16 px-4 z-10">
              <span className="font-sans text-[9px] md:text-xs lg:text-sm font-black text-cream tracking-[0.3em] uppercase opacity-80">Prevention</span>
              <div className="w-1 h-1 rounded-full bg-blue-600/40"></div>
              <span className="font-sans text-[9px] md:text-xs lg:text-sm font-black text-cream tracking-[0.3em] uppercase italic opacity-80">Intervention</span>
              <div className="w-1 h-1 rounded-full bg-red-600/40"></div>
              <span className="font-sans text-[9px] md:text-xs lg:text-sm font-black text-cream tracking-[0.3em] uppercase opacity-80">Transition</span>
           </div>
        </div>
      </section>

      {/* 3. MISSION & HARMONY */}
      <section className="bg-cream py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
             <div className="space-y-8">
                <span className="text-accent-orange uppercase tracking-widest font-black text-xs">Mission!</span>
                <h2 className="font-display text-5xl md:text-7xl text-dark-brown">A state of harmony</h2>
                <p className="text-xl text-dark-brown/80 leading-relaxed font-serif italic">
                  "We believe that true health is a state of harmony—a dynamic balance between mind, body, and spirit."
                </p>
                <p className="text-lg text-dark-brown/70 leading-relaxed">
                  Our clinic is founded on the principle of integrative medicine, where the best of both worlds come together. We merge the evidence-based rigor of conventional allopathic medicine with the profound, time-tested wisdom of traditional healing systems like naturopathy, Ayurveda, and energy medicine.
                </p>
             </div>
             <div className="bg-[#1D1614] p-12 rounded-[3rem] text-cream border border-dark-brown/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-orange/10 rounded-full blur-3xl group-hover:bg-accent-orange/20 transition-all"></div>
                <h3 className="font-display text-4xl mb-6">No Size Fits All!</h3>
                <p className="text-cream/70 leading-relaxed mb-8">
                  We recognize that each patient is a unique individual, not just a set of symptoms. Whether seeking to prevent disease or find comfort during a transition, our approach is designed to treat the whole person.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center">
                    <Compass size={20} className="text-accent-orange" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cream/60">Unique Constitutions (Dosha)</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. ONE STOP SHOP */}
      <section className="bg-dark-brown text-cream py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="font-display text-6xl mb-6">One Stop Shop!</h2>
          <p className="font-serif text-2xl text-accent-orange italic">
            "Know your physical age, soul age, screen age!"
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-accent-orange/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Scan size={32} className="text-accent-orange" />
            </div>
            <h3 className="font-display text-3xl mb-4">Medical Scan</h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Age appropriate protocol based.<br/>
              <span className="font-bold uppercase tracking-wider text-[10px] text-accent-orange mt-2 block">(PCP, Primary Care Physician Concept)</span>
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Eye size={32} className="text-blue-400" />
            </div>
            <h3 className="font-display text-3xl mb-4">Aura Scan</h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Visualizing the subtle energy field to detect imbalances before they manifest physically.
              <br/>
              <span className="font-bold uppercase tracking-wider text-[10px] text-blue-400 mt-2 block">Show my Aura Scan!</span>
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Fingerprint size={32} className="text-purple-400" />
            </div>
            <h3 className="font-display text-3xl mb-4">Nadi Scan</h3>
            <p className="text-sm text-cream/70 leading-relaxed">
              Ancient pulse diagnosis technology to accurately determine your Dosha and constitution.
              <br/>
              <span className="font-bold uppercase tracking-wider text-[10px] text-purple-400 mt-2 block">Show my Nadi Scan!</span>
            </p>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="bg-clay/30 py-32 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">The Pillars</span>
          <h2 className="font-display text-6xl text-dark-brown mt-4">Our Services!</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-10 rounded-[3rem] border border-dark-brown/5 shadow-sm">
            <Heart size={32} className="text-blue-500 mb-6" strokeWidth={1.5} />
            <h3 className="font-display text-3xl mb-4">Preventive & Wellness</h3>
            <p className="text-sm text-dark-brown/70 leading-relaxed">
              Personalized plans centered on Naturopathy and Ayurveda. We utilize cutting-edge **Nadi gear** for exact Dosha testing and curated nutrition, Yoga, and Pranayama for physical strength and mental clarity.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-10 rounded-[3rem] border border-dark-brown/5 shadow-sm">
            <Activity size={32} className="text-red-500 mb-6" strokeWidth={1.5} />
            <h3 className="font-display text-3xl mb-4">Acute & Interventional</h3>
            <p className="text-sm text-dark-brown/70 leading-relaxed">
              Led by our board-certified oncologist and intensivist. We utilize state-of-the-art diagnostics and procedures to stabilize conditions while integrating supportive therapies for faster recovery.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-10 rounded-[3rem] border border-dark-brown/5 shadow-sm">
            <Star size={32} className="text-purple-500 mb-6" strokeWidth={1.5} />
            <h3 className="font-display text-3xl mb-4">Spiritual & Chronic</h3>
            <p className="text-sm text-dark-brown/70 leading-relaxed">
              Addressing the deepest level—the soul. From renal disease to cancer, we offer **Reiki**, past-life regression, sound healing, and holotropic breathing to help find peace and acceptance.
            </p>
          </div>
        </div>
      </section>

      {/* 5.5 HOLISTIC DIMENSIONS (NEW) */}
      <section className="bg-dark-brown text-cream py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="mb-16 text-center">
              <h2 className="font-display text-5xl md:text-6xl mb-6">Need of the Hour</h2>
              <p className="text-xl text-accent-orange italic font-serif">"Conglomeration of Western & Eastern Medicine"</p>
              <p className="max-w-3xl mx-auto mt-8 text-cream/70 leading-relaxed">
                 A holistic approach to health and medicine is fundamental to understanding and effectively working with all dimensions. This integration offers advantages such as <strong>cost-effectiveness</strong>, <strong>quicker recovery</strong>, and improved response in treating chronic and immune-mediated diseases.
              </p>
              <p className="max-w-2xl mx-auto mt-4 text-[10px] uppercase tracking-widest text-cream/40">
                To ensure safe and effective fusion, proper history-taking and understanding of pharmacology in both systems are crucial.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-white/5 p-10 rounded-[3rem] border border-white/10">
                 <h3 className="font-display text-3xl mb-8 flex items-center gap-3">
                   <Sparkles className="text-accent-orange" />
                   Subtle Body Healing
                 </h3>
                 <div className="flex flex-wrap gap-3">
                    {['Breathwork', 'Sound Healing', 'Yoga', 'Vedas', 'Chanting', 'Music', 'Shamanic', 'Psytrance!'].map(item => (
                       <span key={item} className="px-4 py-2 rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider hover:bg-accent-orange hover:border-accent-orange transition-colors cursor-default">{item}</span>
                    ))}
                 </div>
                 <p className="mt-8 text-sm text-cream/60 leading-relaxed">
                   We utilize tools like <strong>Akashic Reading</strong>, <strong>Medical Astrology</strong>, and <strong>Past Life Regression (PLR)</strong> to understand untreated diseases and karmic imprints.
                 </p>
              </div>
              <div className="space-y-6 text-center md:text-left">
                 <p className="font-display text-4xl leading-tight">
                   "From the Vedas to the Future."
                 </p>
                 <p className="text-cream/70 italic text-lg">
                   Highlighting how our holistic and aesthetic services contribute to long-term well-being and anti-aging.
                 </p>
                 <div className="inline-block border border-accent-orange/50 px-6 py-3 rounded-xl">
                    <p className="text-accent-orange font-bold text-xs uppercase tracking-widest">Personalized Treatment Plans</p>
                 </div>
                 <p className="text-sm text-cream/50">In a world of one-size-fits-all, people appreciate a tailored approach.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 6. SOUL-MIND-BODY SECTION */}
      <section className="relative py-32 px-6 flex flex-col items-center bg-cream text-dark-brown border-t border-dark-brown/5">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-20">
          <div className="md:col-span-4 text-center md:text-left">
             <h2 className="font-display text-5xl md:text-7xl text-dark-brown mb-6 tracking-tight">Soul Mind Body</h2>
             <p className="text-accent-orange font-bold uppercase tracking-[0.2em] text-[10px] mb-6">A reversal of conventional thinking</p>
             <p className="text-dark-brown/70 text-lg leading-relaxed">
                We understand that illnesses and imbalances in the physical body are often manifestations of deeper energetic imprints carried by the soul. Our subtle bodies carry the karmic imprints of diseases (**dis-ease**).
             </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
             <div className="relative w-64 h-80 bg-dark-brown/5 rounded-t-full rounded-b-full p-1 border border-dark-brown/10 overflow-hidden shadow-2xl">
                <img 
                  src="https://media.discordapp.net/attachments/1450481798252466287/1461341860948873329/image.png?ex=696d7fea&is=696c2e6a&hm=f88eba656c279146ed1a937ff899d7bcf911985eaabf8df28936c310f86b4a99&=&format=webp&quality=lossless&width=1500&height=1480" 
                  alt="The Inverted Tree" 
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
          <div className="md:col-span-4">
             <div className="bg-white p-10 rounded-[2.5rem] border border-dark-brown/10 shadow-lg">
                <h3 className="font-display text-3xl mb-4">Transcendental Root</h3>
                <p className="text-dark-brown/70 text-sm leading-relaxed">
                  Our mission is to treat the root cause by healing the subtle bodies—the energetic layers of consciousness that permeate the physical form.
                </p>
             </div>
          </div>
        </div>

        <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-dark-brown/10 pt-16">
          <div className="space-y-4">
            <h4 className="font-display text-2xl text-accent-orange uppercase">Hinduism (Gita)</h4>
            <p className="text-sm text-dark-brown/60 leading-relaxed italic">The material universe is an eternal, upside-down tree (Ashvattha) with roots in the heavens. Liberation comes by understanding its illusory nature.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-display text-2xl text-accent-orange uppercase">Ayurveda</h4>
            <p className="text-sm text-dark-brown/60 leading-relaxed italic">The physical body is an inverted tree; the head is the trunk and the limbs are branches. Energy flows from the head—the source of consciousness.</p>
          </div>
        </div>

        <div className="w-full mt-16 text-center border-t border-dark-brown/5 pt-8">
          <p className="font-sans text-[10px] text-dark-brown/50 uppercase tracking-[0.3em] max-w-4xl mx-auto px-6 italic">
            "Essentially, it's a concept of reversed structure, often signifying illusion, detachment, or reversed logic."
          </p>
        </div>
      </section>

      {/* 6.5 SCHEDULING & SPECIALS (NEW) */}
      <section className="bg-clay/20 py-32 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-accent-orange uppercase tracking-widest font-black text-xs"> Logistics</span>
                <h2 className="font-display text-5xl text-dark-brown mt-4">Consultation Protocols</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="bg-white p-8 rounded-[2rem] border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Activity className="text-blue-500" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">General Medicine</h3>
                  </div>
                  <p className="text-3xl font-display mb-2">Walk-ins</p>
                  <p className="text-xs text-dark-brown/60 uppercase tracking-widest">Kidney Check-ups & Acute Illness</p>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border-l-4 border-green-600 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Flower className="text-green-600" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">Ayurvedic</h3>
                  </div>
                  <p className="text-3xl font-display mb-2">Appointment Only</p>
                  <p className="text-xs text-dark-brown/60 uppercase tracking-widest">Nadi Pariksha & Dosha Analysis</p>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border-l-4 border-purple-500 shadow-sm relative overflow-hidden hover:shadow-md transition-all">
                  <div className="absolute top-0 right-0 p-4 opacity-10"><Gem size={64} /></div>
                  <div className="flex items-center gap-4 mb-4">
                    <Gem className="text-purple-500" />
                    <h3 className="font-bold text-lg uppercase tracking-wider">Aesthetic</h3>
                  </div>
                  <p className="text-3xl font-display mb-2">Appointment Only</p>
                  <p className="text-xs text-dark-brown/60 uppercase tracking-widest mb-4">Anti-aging & Long-term well-being</p>
                  <div className="bg-purple-50 text-purple-800 px-4 py-2 rounded-lg text-[10px] font-bold uppercase inline-block leading-tight">
                    Includes Free Spiritual Check-up<br/>(Meditation & Chakra Blockage)
                  </div>
                </div>
            </div>

            {/* WOMEN'S WEEKEND BANNER */}
            <div className="bg-peach/30 rounded-[3rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-dark-brown/5 shadow-xl">
                <div className="flex-1">
                  <span className="bg-accent-orange text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Special Event</span>
                  <h3 className="font-display text-4xl md:text-5xl text-dark-brown mb-6">Women's Special Weekend</h3>
                  <p className="text-dark-brown/80 text-lg leading-relaxed mb-8">
                    From <strong>pelvic floor incontinence</strong> to <strong>collagen boost</strong> and <strong>aesthetic bikini</strong> treatments. Join us @ Full Circle for a weekend dedicated to feminine health and radiance.
                  </p>
                  <Link to="/appointment" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] border-b-2 border-dark-brown pb-1 hover:text-accent-orange hover:border-accent-orange transition-all">
                    Book Your Spot <Clock size={14} />
                  </Link>
                </div>
                <div className="w-full md:w-1/3 aspect-square bg-white rounded-full flex items-center justify-center p-8 text-center border border-white shadow-xl relative">
                  <div className="absolute inset-0 border-[1px] border-dark-brown/10 rounded-full m-4"></div>
                  <div>
                      <Heart size={40} className="text-accent-orange mx-auto mb-4" />
                      <p className="font-display text-2xl italic text-dark-brown">"Holistic & Aesthetic"</p>
                  </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* 7. MEDICAL LEADERSHIP (Unified Profile) */}
      <section className="bg-cream py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="text-accent-orange uppercase tracking-widest font-black text-xs mb-6">The Founder</span>
            <h2 className="font-display text-6xl text-dark-brown mb-16">Medical Leadership</h2>

            <div className="bg-[#1D1614] text-cream p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden border border-dark-brown/10 w-full">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/10 rounded-full blur-3xl"></div>
               
               <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                   {/* Left Col: Intro & Vision */}
                   <div className="lg:col-span-5 flex flex-col justify-between h-full">
                       <div>
                           <div className="flex items-center gap-6 mb-8">
                               <div className="w-20 h-20 bg-cream text-dark-brown rounded-full flex items-center justify-center shrink-0">
                                  <User size={40} />
                               </div>
                               <div>
                                 <h3 className="font-display text-4xl md:text-5xl text-cream leading-none mb-2">Dr. Prerna Kumar</h3>
                                 <p className="text-xs uppercase tracking-widest text-accent-orange font-bold">Founder & Transplant Nephrologist</p>
                               </div>
                           </div>
                           <p className="font-serif italic text-xl md:text-2xl text-cream/90 mb-8 leading-relaxed">
                              "Relocating to India with a far-fetched vision to propagate the concept of conglomeration of Eastern and Western medicine."
                           </p>
                           <div className="p-6 bg-white/5 rounded-2xl border border-white/10 mt-8">
                              <p className="text-[10px] uppercase tracking-widest text-accent-orange mb-2">The Mission</p>
                              <p className="italic text-cream/60 text-xs leading-relaxed">
                                "To treat the root cause by healing the subtle bodies—the energetic layers of consciousness that permeate the physical form."
                              </p>
                           </div>
                       </div>
                   </div>

                   {/* Right Col: Bio & Details */}
                   <div className="lg:col-span-7 space-y-6 text-cream/70 text-sm md:text-base leading-relaxed border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-12 pt-12 lg:pt-0">
                        <p>
                          Dr. Prerna Kumar is a <strong>medical gem</strong> in adult medicine, adept at solving complex diagnostic problems, managing acute illness, and multisystem pathology.
                        </p>
                        <p>
                          A seasoned physician and abecedarian, she completed her graduation in Internal Medicine from <strong>Montefiore Medical Centre, Albert Einstein College of Medicine, Bronx NY</strong>. Her clinical acumen is of exceptional standards with precise and meticulous diagnostic and therapeutic skills.
                        </p>
                        <p>
                          She pursued her super specialisation (DM) in Nephrology from the <strong>University of Iowa</strong>, followed by a fellowship in Transplant Nephrology. She has also served as Assistant Professor of Medicine and Surgery in the Department of Transplant Nephrology at the <strong>University of Illinois, Chicago</strong>.
                        </p>
                        <p>
                          Her expertise lies in <strong>Hypertension, Chronic Kidney Disease (CKD)</strong>, and guiding patients requiring kidney and pancreatic transplants.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                            <div className="bg-white/5 p-4 rounded-xl flex items-start gap-4">
                                <MapPin size={20} className="text-accent-orange mt-1" />
                                <div>
                                    <h4 className="text-cream font-bold mb-1 text-sm">Experience</h4>
                                    <p className="text-xs text-cream/50">Univ of Illinois (Chicago), Univ of Iowa, Montefiore (NY)</p>
                                </div>
                            </div>
                            <div className="bg-white/5 p-4 rounded-xl flex items-start gap-4">
                                <GraduationCap size={20} className="text-accent-orange mt-1" />
                                <div>
                                    <h4 className="text-cream font-bold mb-1 text-sm">Education</h4>
                                    <p className="text-xs text-cream/50">SDUMC (Rajiv Gandhi Univ), Albert Einstein College of Medicine</p>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
            </div>
        </div>
      </section>

      {/* 8. CTA TO PLEDGE */}
      <section className="py-32 bg-dark-brown text-cream text-center relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <Zap size={400} className="text-cream absolute -top-20 -left-20" />
         </div>
         <div className="relative z-10 max-w-4xl mx-auto px-6">
            <span className="text-accent-orange uppercase tracking-widest font-black text-xs mb-6 block">The Living Legacy</span>
            <h2 className="font-display text-7xl text-cream mb-10 leading-tight">The Art of Dying</h2>
            <p className="font-serif italic text-2xl text-cream/80 mb-12">"My body is a temple; when I leave it, I leave the doors open for someone else to find shelter."</p>
            <Link to="/pledge" className="inline-flex items-center gap-4 bg-cream text-dark-brown px-16 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-accent-orange transition-all shadow-xl">
              <ShieldCheck size={20} />
              <span>Sign the Circle</span>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;