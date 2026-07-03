export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Card Banking Officer',
    organization: 'Cooperative Bank of Oromia',
    location: 'Ethiopia',
    period: 'February 2023 – Present',
    responsibilities: [
      'Conduct payment platform performance analysis to identify bottlenecks and support operational resilience.',
      'Prepare Business Requirement Documents (BRDs) and Functional Requirement Documents (FRDs) for banking system enhancements.',
      'Maintain comprehensive operational documentation and system change records to ensure consistency and compliance.',
      'Support banking system enhancement initiatives by aligning requirements with business objectives and technical constraints.',
      'Deliver targeted training sessions for branch and district staff on payment system procedures and best practices.',
      'Monitor KPIs and Key Risk Indicators (KRIs) to track operational performance and drive data-driven improvements.',
      'Collaborate with cross-functional stakeholders to gather requirements and coordinate project execution.',
      'Perform data analysis and trend analysis to support management reporting and decision-making.',
    ],
  },
];