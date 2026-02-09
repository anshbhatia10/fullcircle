import React from 'react';
import { Activity, Star, Zap, Heart } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Header */}
      <section className="pt-32 pb-16 px-6 text-center bg-cream relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-accent-orange uppercase tracking-widest font-black text-xs">A Pact of Consciousness</span>
          <h1 className="font-display text-6xl md:text-8xl text-dark-brown mt-6 mb-8">Mission!</h1>
          <p className="font-serif text-2xl md:text-3xl text-dark-brown/70 italic leading-relaxed">
            "You will always have a doctor who knows your full circle—clinically, spiritually and aesthetically."
          </p>
        </div>
      </section>

      {/* Main Philosophy Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
             <div className="relative group">
                <div className="absolute inset-0 bg-accent-orange/10 rounded-full blur-3xl transform -translate-x-8 translate-y-8"></div>
                <div className="bg-[#1D1614] p-1 rounded-t-full rounded-b-full shadow-2xl overflow-hidden relative border border-dark-brown/20">
                   <img 
                    src="https://media.discordapp.net/attachments/1450481798252466287/1461341860948873329/image.png?ex=696a342a&is=6968e2aa&hm=6a38fba618e1bcaf69e13e8e66babd20380d14ba9390d1b29e5472f5364f7458&=&format=webp&quality=lossless&width=1500&height=1480" 
                    alt="The Inverted Tree" 
                    className="w-full h-auto rounded-t-full rounded-b-full filter contrast-110"
                   />
                </div>
             </div>
             <div className="space-y-8">
                <h2 className="font-display text-5xl text-dark-brown">Integrative to Transcendental</h2>
                <div className="w-20 h-1 bg-accent-orange"></div>
                <p className="text-lg leading-relaxed text-dark-brown/80">
                  We expand the clinic's philosophy from integrative medicine to **transcendental medicine**, where the root of all illness is addressed at the deepest level—the soul.
                </p>
                <p className="text-lg leading-relaxed text-dark-brown/80">
                  We believe that true health is a state of harmony—a dynamic balance between mind, body, and spirit. We merge evidence-based rigor with time-tested wisdom like naturopathy, Ayurveda, and energy medicine.
                </p>
                <div className="p-8 bg-dark-brown text-cream rounded-3xl border-l-4 border-accent-orange">
                   <p className="font-serif italic text-xl">"Healing the subtle bodies heals the physical form."</p>
                </div>
             </div>
          </div>

          {/* Soul-Mind-Body Reversal */}
          <div className="mb-32">
            <div className="bg-white p-12 md:p-20 rounded-[4rem] border border-dark-brown/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Zap size={120} className="text-accent-orange" />
              </div>
              <h2 className="font-display text-4xl md:text-6xl text-dark-brown mb-10">Soul - Mind - Body</h2>
              <p className="text-accent-orange font-bold uppercase tracking-[0.2em] mb-8">A reversal of conventional thinking</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-dark-brown/80">
                <p>
                  Conventionally, we think "Mind Body Soul". At Full Circle, we reverse this. We understand that the illnesses and imbalances we experience in our physical bodies are often manifestations of deeper energetic or spiritual imprints carried by the soul.
                </p>
                <p>
                  Our subtle bodies carry the karmic imprints of diseases (**dis-ease**). Our mission is to treat the root cause of disease by healing these subtle bodies—the energetic layers of consciousness that surround and permeate the physical form.
                </p>
              </div>
            </div>
          </div>

          {/* Individual Care Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-blue-600" />
                </div>
                <h3 className="font-display text-3xl text-dark-brown">No Size Fits All!</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  We recognize each patient as a unique individual, not just a set of symptoms. Whether preventing disease or finding comfort during a difficult transition, our approach treats the whole person.
                </p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Activity size={24} className="text-red-600" />
                </div>
                <h3 className="font-display text-3xl text-dark-brown">USA Protocol</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  USA Board certified experts lead our clinical team, ensuring that every integrative treatment is backed by the highest standards of evidence-based rigor and critical care protocols.
                </p>
             </div>
             <div className="space-y-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Star size={24} className="text-purple-600" />
                </div>
                <h3 className="font-display text-3xl text-dark-brown">Antric Wisdom</h3>
                <p className="text-dark-brown/70 leading-relaxed">
                  We close the gap between patient and doctor through traditional systems that honor the "Consciousness" of the patient, making them an equal partner in the healing journey.
                </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Mission;