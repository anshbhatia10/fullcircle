import React from 'react';
import { Heart, Activity, Star, Zap, ShieldCheck, Compass, Palette, Calendar, Circle } from 'lucide-react';

const IconMap: any = {
  Heart,
  Activity,
  Star,
  Zap,
  ShieldCheck,
  Compass,
  Palette,
  Calendar,
  Circle
};

// Simple Markdown renderer for the "body" field which was TinaMarkdown
const SimpleMarkdown = ({ content }: { content: any }) => {
  if (!content) return null;
  
  // If it's already a string, just render it
  if (typeof content === 'string') {
    return <p>{content}</p>;
  }

  // If it's the Tina JSON format for rich text
  if (content.children) {
    return (
      <>
        {content.children.map((child: any, i: number) => {
          if (child.type === 'p') {
            return (
              <p key={i}>
                {child.children.map((textChild: any, j: number) => (
                  <span key={j} style={{ fontStyle: textChild.italic ? 'italic' : 'normal', fontWeight: textChild.bold ? 'bold' : 'normal' }}>
                    {textChild.text}
                  </span>
                ))}
              </p>
            );
          }
          return null;
        })}
      </>
    );
  }

  return null;
};

export const PageBuilder = ({ blocks }: { blocks: any[] }) => {
  const getBlockType = (block: any) => {
    if (block?._template) {
      return block._template;
    }
    if (block?.__typename === 'PagesBlocksHero') {
      return 'hero';
    }
    if (block?.__typename === 'PagesBlocksContentSection') {
      return 'contentSection';
    }
    if (block?.__typename === 'PagesBlocksGrid') {
      return 'grid';
    }
    return null;
  };

  return (
    <>
      {blocks
        ? blocks.map((block, i) => {
            switch (getBlockType(block)) {
              case 'hero':
                return <Hero key={i} data={block} />;
              case 'contentSection':
                return <ContentSection key={i} data={block} />;
              case 'grid':
                return <IconGrid key={i} data={block} />;
              default:
                return null;
            }
          })
        : null}
    </>
  );
};

const Hero = ({ data }: { data: any }) => {
  return (
    <section className="pt-32 pb-16 px-6 text-center bg-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-accent-orange uppercase tracking-widest font-black text-xs">
          {data.tagline}
        </span>
        <h1 className="font-display text-6xl md:text-8xl text-dark-brown mt-6 mb-8">
          {data.title}
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-dark-brown/70 italic leading-relaxed">
          "{data.subtitle}"
        </p>
      </div>
    </section>
  );
};

const ContentSection = ({ data }: { data: any }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-accent-orange/10 rounded-full blur-3xl transform -translate-x-8 translate-y-8"></div>
            <div className="bg-[#1D1614] p-1 rounded-t-full rounded-b-full shadow-2xl overflow-hidden relative border border-dark-brown/20">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-auto rounded-t-full rounded-b-full filter contrast-110"
              />
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="font-display text-5xl text-dark-brown">
              {data.title}
            </h2>
            <div className="w-20 h-1 bg-accent-orange"></div>
            <div className="text-lg leading-relaxed text-dark-brown/80 space-y-4">
              <SimpleMarkdown content={data.body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IconGrid = ({ data }: { data: any }) => {
  return (
    <section className="py-20 px-6 bg-white border-t border-dark-brown/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.items &&
            data.items.map((item: any, i: number) => {
              const Icon = IconMap[item.icon] || Heart;
              return (
                <div key={i} className="space-y-6">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center">
                    <Icon size={24} className="text-accent-orange" />
                  </div>
                  <h3 className="font-display text-3xl text-dark-brown">
                    {item.title}
                  </h3>
                  <p className="text-dark-brown/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
