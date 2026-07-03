export type SkillCategory = {
  title: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    title: 'Banking',
    items: ['Card Banking Operations', 'Payment Systems', 'Banking Operations', 'Business Analysis'],
  },
  {
    title: 'Documentation',
    items: ['BRD', 'FRD', 'Process Documentation', 'System Change Records'],
  },
  {
    title: 'Project Management',
    items: ['Project Planning', 'Stakeholder Management', 'Monitoring & Evaluation', 'Project Coordination'],
  },
  {
    title: 'Analytics',
    items: ['Microsoft Excel', 'SPSS', 'IBM Analytical Tools', 'Data Analysis', 'Trend Analysis', 'KPI/KRI Monitoring'],
  },
  {
    title: 'Leadership',
    items: ['Training & Knowledge Transfer', 'Communication', 'Problem Solving', 'Report Writing', 'Analytical Thinking'],
  },
];