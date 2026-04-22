import React, { useEffect, useState } from 'react';
import { Heart, Activity, Star, Compass, Zap, ShieldCheck } from 'lucide-react';
import { client, urlFor } from '../lib/sanity';

interface ServiceData {
  title: string;
  category: string;
  description: string;
  features: string[];
  image?: any;
}

const Services: React.FC = () => {
  const [services, setServices] = useState<ServiceData[]>([]);

  useEffect(() => {
    client.fetch('*[_type == "service"]').then((res) => {
      if (res && res.length > 0) {
        setServices(res);
      }
    }).catch(err => console.error("Sanity fetch error:", err));
  }, []);

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

  // Default content if Sanity is empty
  const defaultServices: ServiceData[] = [
    {
      title: "Preventive & Wellness Care",
      category: "Foundation",
      description: "Prevention is the cornerstone of our practice. Our team works with you to build a personalized wellness plan centered on Naturopathy and Ayurvedic principles of diet and lifestyle.",
      features: [
        "Cutting-edge Nadi gear to detect exact Dosha percentages.",
        "Curated diets and nutrition based on constitution results.",
        "Daily routines, herbal remedies, Yoga, and Pranayama."
      ],
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
    },
    {
        title: "Acute & Interventional Care",
        category: "Intervention",
        description: "Our board-certified oncologist and intensivist provide expert care for critical conditions, ensuring the highest standard of medical treatment when you need it most.",
        features: [
            "State-of-the-art diagnostics and interventional procedures.",
            "Stabilization integrated with supportive integrative therapies.",
            "Compassionate critical care with a human-centered approach."
        ],
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1920&auto=format&fit=crop"
    },
    {
        title: "Spiritual & Chronic Care",
        category: "Transcendence",
        description: "Focus shifts to healing beyond the physical. From end-stage renal disease to metastatic cancer, we offer therapies to soothe the mind and spirit.",
        features: [
            "Reiki, Past-Life Regression, and Energy Healing.",
            "Sound healing, Mantras, Gita verses, and Simple Pranayama.",
            "Holotropic breathing to address karmic imprints."
        ],
        image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1920&auto=format&fit=crop"
    }
  ];

  const displayServices = services.length > 0 ? services : defaultServices;

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
                            src={service.image?.asset ? urlFor(service.image).url() : (typeof service.image === 'string' ? service.image : '')} 
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
