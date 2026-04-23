import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, ShieldCheck, Stethoscope, Sparkles, Wind, ArrowRight } from 'lucide-react';
import { useTina, tinaField } from 'tinacms/dist/react';
import pcpData from '../content/pages/full-circle-pcp.json';

const IconMap: any = {
  Stethoscope,
  Flower2,
  ShieldCheck
};

const FullCirclePCP: React.FC = () => {
  const { data } = useTina({
    query: `{
      pcp(relativePath: "full-circle-pcp.json") {
        tagline
        title
        subtitle
        features {
          title
          description
          icon
        }
      }
    }`,
    variables: { relativePath: "full-circle-pcp.json" },
    data: { pcp: pcpData },
  });

  const { tagline, title, subtitle, features } = data.pcp;

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span data-tina-field={tinaField(data.pcp, 'tagline')} className="uppercase tracking-widest font-black text-xs text-accent-orange mb-3 block">{tagline}</span>
          <h1 data-tina-field={tinaField(data.pcp, 'title')} className="font-display text-5xl md:text-8xl text-dark-brown mt-4 mb-6 leading-tight">{title}</h1>
          <p data-tina-field={tinaField(data.pcp, 'subtitle')} className="max-w-3xl mx-auto text-dark-brown/70 font-serif italic text-xl md:text-2xl leading-relaxed">
            {subtitle}
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
          {features && features.map((feature: any, i: number) => {
            const Icon = IconMap[feature.icon] || Stethoscope;
            return (
              <div key={i} className={`rounded-[3rem] p-12 shadow-xl transition-all group ${i === 1 ? 'bg-bronze-dark text-white relative overflow-hidden' : 'bg-white border border-dark-brown/5 shadow-sm hover:shadow-xl'}`}>
                {i === 1 && <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform ${i === 1 ? 'bg-white/10 text-white' : i === 0 ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-accent-orange'}`}>
                  <Icon size={32} />
                </div>
                <h3 data-tina-field={tinaField(feature, 'title')} className={`font-display text-4xl mb-4 relative z-10 ${i === 1 ? 'text-white' : 'text-dark-brown'}`}>{feature.title}</h3>
                <p data-tina-field={tinaField(feature, 'description')} className={`text-sm leading-relaxed font-sans relative z-10 ${i === 1 ? 'text-cream/60' : 'text-dark-brown/60'}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
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
