
// Import React to resolve 'React' namespace error for ReactNode
import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
}