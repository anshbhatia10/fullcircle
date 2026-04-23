import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { PageBuilder } from '../components/PageBuilder';
import missionData from '../content/pages/mission.json';

const Mission: React.FC = () => {
  const { data } = useTina({
    query: `{
      pages(relativePath: "mission.json") {
        title
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
    variables: { relativePath: "mission.json" },
    data: { pages: missionData },
  });

  return (
    <div className="bg-cream min-h-screen">
      <PageBuilder blocks={data.pages.blocks} />
    </div>
  );
};

export default Mission;
