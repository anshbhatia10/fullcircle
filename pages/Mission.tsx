import React from 'react';
import { PageBuilder } from '../components/PageBuilder';
import missionData from '../content/pages/mission.json';

const Mission: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      <PageBuilder blocks={missionData.blocks} />
    </div>
  );
};

export default Mission;
