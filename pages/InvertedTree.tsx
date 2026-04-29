import React from 'react';
import { PageBuilder } from '../components/PageBuilder';
import treeData from '../content/pages/inverted-tree.json';

const InvertedTree: React.FC = () => {
  const data = { pages: treeData };

  return (
    <div className="bg-cream min-h-screen">
      <PageBuilder blocks={data.pages.blocks} />
    </div>
  );
};

export default InvertedTree;
