import React from 'react';
import { Heart, Activity, Star, Compass, Zap, ShieldCheck } from 'lucide-react';
import { useTina } from "tinacms/dist/react";
import servicesContent from '../content/services.json';

interface ServiceData {
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

const Services: React.FC = (props) => {
  const { data } = useTina({
    query: `{
      services(relativePath: "services.json") {
        items {
          title
          category
          description
          features
          image
        }
      }
    }`,
    variables: {},
    data: { services: { items: servicesContent } },
  });

  const getIcon = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('foundation') || cat.includes('preventive')) return <Heart size={14} />;
    if (cat.includes('intervention') || cat.includes('acute')) return <ShieldCheck size={14} />;
    if (cat.includes('transcendence') || cat.includes('spiritual')) return <Zap size={14} />;
    return <Compass size={14} />;
  };

  const getIconLarge = (category: string) => {
      const cat = category.toLowerCase();
      if (cat.includes('foundation') || cat.includes('preventive')) return <Compass size={120} className="text-blue-500 relative z-10" strokeWidth={1} />;
      if (cat.includes('intervention') || cat.includes('acute')) return <Activity size={120} className="text-red-500 relative z-10" strokeWidth={1} />;
      if (cat.includes('transcendence') || cat.includes('spiritual')) return <Star size={120} className="text-purple-500 relative z-10" strokeWidth={1} />;
      return <Compass size={120} className="text-blue-500 relative z-10" strokeWidth={1} />;
  };

  const getBgColor = (category: string) => {
      const cat = category.toLowerCase();
      if (cat.includes('foundation') || cat.includes('preventive')) return 'bg-blue-100 text-blue-800';
      if (cat.includes('intervention') || cat.includes('acute')) return 'bg-red-100 text-red-800';
      if (cat.includes('transcendence') || cat.includes('spiritual')) return 'bg-purple-100 text-purple-800';
      return 'bg-bronze-light text-bronze-dark';
  };

  const getDotColor = (category: string) => {
    const cat = category.toLowerCase();
    if (cat.includes('foundation') || cat.includes('preventive')) return 'bg-blue-600';
    if (cat.includes('intervention') || cat.includes('acute')) return 'bg-red-600';
    if (cat.includes('transcendence') || cat.includes('spiritual')) return 'bg-purple-600';
    return 'bg-dark-brown';
  };

  const displayServices: ServiceData[] = data.services.items;

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
          {displayServices.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className={`space-y-8 ${index % 2 !== 0 ? 'order-1 lg:order-2' : ''}`}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest ${getBgColor(service.category)}`}>
                        {getIcon(service.category)}
                        <span>{service.category}</span>
                    </div>
                    <h2 className="font-display text-5xl text-dark-brown">{service.title}</h2>
                    <p className="text-lg text-dark-brown/80 leading-relaxed">
                        {service.description}
                    </p>
                    <div className="bg-white p-8 rounded-3xl border border-blue-50 shadow-sm space-y-4">
                        {service.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-4">
                                <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${getDotColor(service.category)}`}></div>
                                <p className={`text-sm ${fIndex === 0 ? 'font-bold text-dark-brown' : 'text-dark-brown/70'}`}>{feature}</p>
                            </div>
                        ))}
                    </div>
                  </div>
                  <div className={`bg-bronze-dark rounded-[3rem] aspect-square flex items-center justify-center p-12 relative overflow-hidden group ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                        <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full h-full object-cover grayscale" 
                        />
                    </div>
                    {getIconLarge(service.category)}
                  </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
