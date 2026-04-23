import React from 'react';
import { useTina } from 'tinacms/dist/react';
import { PageBuilder } from '../components/PageBuilder';
import treeData from '../content/pages/inverted-tree.json';

const InvertedTree: React.FC = () => {
  const { data } = useTina({
    query: `{
      pages(relativePath: "inverted-tree.json") {
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
    variables: { relativePath: "inverted-tree.json" },
    data: { pages: treeData },
  });

  return (
    <div className="bg-cream min-h-screen">
      <PageBuilder blocks={data.pages.blocks} />
    </div>
  );
};

export default InvertedTree;
