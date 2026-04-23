import React from 'react';
import { tinaField, useTina } from 'tinacms/dist/react';
import { PageBuilder } from '../components/PageBuilder';
import partnersData from '../content/pages/partners.json';

const Partners: React.FC = () => {
  const { data } = useTina({
    query: `{
      pages(relativePath: "partners.json") {
        title
        cta {
          title
          description
        }
        blocks {
          __typename
          ... on PagesBlocksHero {
            tagline
            title
            subtitle
          }
          ... on PagesBlocksContentSection {
            title
            body
            image
          }
          ... on PagesBlocksGrid {
            items {
              title
              description
              icon
            }
          }
        }
      }
    }`,
    variables: { relativePath: "partners.json" },
    data: { pages: partnersData },
  });

  return (
    <div className="bg-[#FAF3F0] min-h-screen">
      <PageBuilder blocks={data.pages.blocks} />
      
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="p-20 bg-[#4A314D] text-[#FAF3F0] rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
           <div className="relative z-10">
             <h2 data-tina-field={tinaField(data.pages.cta, 'title')} className="font-display text-5xl md:text-7xl mb-8">{data.pages.cta?.title}</h2>
             <p data-tina-field={tinaField(data.pages.cta, 'description')} className="max-w-4xl mx-auto text-xl leading-relaxed opacity-80 italic font-serif">
               "{data.pages.cta?.description}"
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
