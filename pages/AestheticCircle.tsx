import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Droplets, ScanFace, HeartPulse, Leaf, Wand2, ArrowRight } from 'lucide-react';
import { useTina, tinaField } from 'tinacms/dist/react';
import aestheticData from '../content/pages/aesthetic-circle.json';

const AestheticCircle: React.FC = () => {
  const { data } = useTina({
    query: `{
      aesthetics(relativePath: "aesthetic-circle.json") {
        tagline
        title
        subtitle
        assessmentLabel
        assessmentHighlights {
          title
          description
        }
        synergyCard {
          title
          description
          scienceLabel
          scienceTitle
          natureLabel
          natureTitle
        }
        scienceSection {
          tagline
          title
          items {
            title
            description
          }
        }
        natureSection {
          tagline
          title
          items {
            title
            description
          }
        }
        packageDeal {
          badge
          title
          quote
          bundleLabel
          bundleDescription
          primaryCtaLabel
          primaryCtaPath
          secondaryCtaLabel
          secondaryCtaPath
        }
        services {
          title
          description
          image
        }
      }
    }`,
    variables: { relativePath: "aesthetic-circle.json" },
    data: { aesthetics: aestheticData },
  });

  const {
    tagline,
    title,
    subtitle,
    services,
    assessmentLabel,
    assessmentHighlights,
    synergyCard,
    scienceSection,
    natureSection,
    packageDeal,
  } = data.aesthetics;
  const mainService = services[0] || { title: "Aesthetic Skin Assessment", description: "Our comprehensive skin analysis looks beyond the surface." };

  return (
    <div className="bg-cream min-h-screen pt-32 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span data-tina-field={tinaField(data.aesthetics, 'tagline')} className="uppercase tracking-widest font-black text-xs text-accent-orange mb-3 block">{tagline}</span>
          <h1 data-tina-field={tinaField(data.aesthetics, 'title')} className="font-display text-5xl md:text-8xl text-dark-brown mt-4 mb-6 leading-tight">{title}</h1>
          <p data-tina-field={tinaField(data.aesthetics, 'subtitle')} className="max-w-3xl mx-auto text-dark-brown/70 font-serif italic text-xl md:text-2xl leading-relaxed">
            {subtitle}
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 items-start">
          <div className="lg:col-span-7 bg-white rounded-[3rem] p-10 md:p-14 border border-dark-brown/5 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-accent-orange flex items-center justify-center">
                <ScanFace size={32} />
              </div>
              <div data-tina-field={tinaField(services[0])}>
                <p data-tina-field={tinaField(data.aesthetics, 'assessmentLabel')} className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">{assessmentLabel}</p>
                <h2 data-tina-field={tinaField(services[0], 'title')} className="font-display text-4xl text-dark-brown">{mainService.title}</h2>
              </div>
            </div>
            <p data-tina-field={tinaField(services[0], 'description')} className="text-dark-brown/70 text-lg leading-relaxed mb-10">
              {mainService.description}
            </p>
            <div data-tina-field={tinaField(data.aesthetics, 'assessmentHighlights')} className="space-y-6 text-dark-brown/80">
              {assessmentHighlights?.map((highlight: any, i: number) => (
                <div key={i} className="flex gap-4 items-start">
                  {i % 2 === 0 ? <Sparkles className="text-accent-orange shrink-0 mt-1" size={20} /> : <Droplets className="text-accent-orange shrink-0 mt-1" size={20} />}
                  <p>
                    <span data-tina-field={tinaField(highlight, 'title')} className="font-black uppercase tracking-widest text-xs block mb-1">{highlight.title}</span>
                    <span data-tina-field={tinaField(highlight, 'description')} className="text-sm">{highlight.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-bronze-dark text-cream rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div>
              <h3 data-tina-field={tinaField(synergyCard, 'title')} className="font-display text-4xl mb-6 relative z-10 leading-tight">{synergyCard?.title}</h3>
              <p data-tina-field={tinaField(synergyCard, 'description')} className="text-cream/70 leading-relaxed relative z-10 mb-10 italic font-serif text-lg">
                {synergyCard?.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <p data-tina-field={tinaField(synergyCard, 'scienceLabel')} className="text-[10px] uppercase tracking-widest font-black text-accent-orange mb-2">{synergyCard?.scienceLabel}</p>
                <p data-tina-field={tinaField(synergyCard, 'scienceTitle')} className="font-bold text-cream">{synergyCard?.scienceTitle}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
                <p data-tina-field={tinaField(synergyCard, 'natureLabel')} className="text-[10px] uppercase tracking-widest font-black text-accent-orange mb-2">{synergyCard?.natureLabel}</p>
                <p data-tina-field={tinaField(synergyCard, 'natureTitle')} className="font-bold text-cream">{synergyCard?.natureTitle}</p>
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
                <p data-tina-field={tinaField(scienceSection, 'tagline')} className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">{scienceSection?.tagline}</p>
                <h3 data-tina-field={tinaField(scienceSection, 'title')} className="font-display text-3xl text-dark-brown">{scienceSection?.title}</h3>
              </div>
            </div>
            <div data-tina-field={tinaField(scienceSection, 'items')} className="space-y-6 text-dark-brown/70">
              {scienceSection?.items?.map((item: any, i: number) => (
                <div key={i} className="flex gap-4 items-start">
                  {i % 2 === 0 ? <Wand2 className="text-accent-orange shrink-0 mt-1" size={20} /> : <Sparkles className="text-accent-orange shrink-0 mt-1" size={20} />}
                  <p className="text-sm leading-relaxed">
                    <span data-tina-field={tinaField(item, 'title')} className="font-bold text-dark-brown">{item.title}:</span>{" "}
                    <span data-tina-field={tinaField(item, 'description')}>{item.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 md:p-14 border border-dark-brown/5 shadow-sm">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center">
                <Leaf size={28} />
              </div>
              <div>
                <p data-tina-field={tinaField(natureSection, 'tagline')} className="text-[10px] uppercase tracking-widest font-black text-dark-brown/40 mb-1">{natureSection?.tagline}</p>
                <h3 data-tina-field={tinaField(natureSection, 'title')} className="font-display text-3xl text-dark-brown">{natureSection?.title}</h3>
              </div>
            </div>
            <div data-tina-field={tinaField(natureSection, 'items')} className="space-y-6 text-dark-brown/70">
              {natureSection?.items?.map((item: any, i: number) => (
                <div key={i} className="flex gap-4 items-start">
                  {i % 2 === 0 ? <Sparkles className="text-accent-orange shrink-0 mt-1" size={20} /> : <Droplets className="text-accent-orange shrink-0 mt-1" size={20} />}
                  <p className="text-sm leading-relaxed">
                    <span data-tina-field={tinaField(item, 'title')} className="font-bold text-dark-brown">{item.title}:</span>{" "}
                    <span data-tina-field={tinaField(item, 'description')}>{item.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-bronze-dark text-cream rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span data-tina-field={tinaField(packageDeal, 'badge')} className="uppercase tracking-widest font-black text-xs text-accent-orange mb-4 block">{packageDeal?.badge}</span>
              <h2 data-tina-field={tinaField(packageDeal, 'title')} className="font-display text-5xl md:text-7xl mb-8 leading-tight">{packageDeal?.title}</h2>
              <p data-tina-field={tinaField(packageDeal, 'quote')} className="text-cream/70 text-xl leading-relaxed mb-10 italic font-serif">
                "{packageDeal?.quote}"
              </p>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-cream/80">
                <p data-tina-field={tinaField(packageDeal, 'bundleLabel')} className="font-black uppercase tracking-widest text-[10px] text-accent-orange mb-3">{packageDeal?.bundleLabel}</p>
                <p data-tina-field={tinaField(packageDeal, 'bundleDescription')} className="text-sm leading-relaxed">
                  {packageDeal?.bundleDescription}
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Link
                to={packageDeal?.primaryCtaPath || "/appointment"}
                className="px-10 py-6 rounded-full bg-cream text-bronze-dark text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-orange hover:text-white transition-all text-center shadow-xl transform hover:-translate-y-1"
              >
                {packageDeal?.primaryCtaLabel}
              </Link>
              <Link
                to={packageDeal?.secondaryCtaPath || "/screening-circle"}
                className="px-10 py-6 rounded-full border border-white/20 text-cream text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-colors text-center"
              >
                {packageDeal?.secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AestheticCircle;
