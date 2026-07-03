export type ProjectItem = {
  title: string;
  category: string;
  timeline: string;
  overview: string;
  challenge: string;
  responsibilities: string[];
  solution: string;
  tools: string[];
  value: string;
  lessons: string[];
  imageAlt: string;
};

export const projects: ProjectItem[] = [
  {
    title: 'Payment Platform Performance Analysis',
    category: 'Operational Excellence',
    timeline: 'Ongoing',
    overview: 'An analytical review of transaction workflows, system capacity, and service availability for the card payment platform.',
    challenge: 'Identify friction points affecting payment authorization, settlement timelines, and transaction throughput.',
    responsibilities: [
      'Gather metrics from payment processing systems and analyze daily platform trends.',
      'Evaluate incident reports and performance logs to prioritize improvement actions.',
      'Coordinate with technology and operations teams to align platform performance objectives.',
    ],
    solution: 'Developed a performance dashboard and recommendation report to support operational decisions and platform stabilization efforts.',
    tools: ['Microsoft Excel', 'SPSS', 'IBM analytical tools'],
    value: 'Established a structured performance review practice that improves transparency and supports system reliability.',
    lessons: ['Structured data enables faster decision making.', 'Stakeholder alignment is critical for implementation success.'],
    imageAlt: 'Placeholder dashboard for payment platform analysis',
  },
  {
    title: 'Business Requirement Documentation (BRD)',
    category: 'Requirements Management',
    timeline: 'Recent initiative',
    overview: 'Delivered a formal BRD for an internal banking initiative focused on card operations and service optimization.',
    challenge: 'Translate stakeholder goals into clear business requirements while preserving operational priorities.',
    responsibilities: [
      'Create the BRD structure, including objectives, scope, and success criteria.',
      'Interview stakeholders and validate requirements with bank operations leadership.',
      'Capture regulatory, operational, and customer-facing requirements for the solution.',
    ],
    solution: 'Produced an executive-ready BRD that enabled consensus across business, technical, and compliance stakeholders.',
    tools: ['Microsoft Excel', 'IBM analytical tools'],
    value: 'Reduced requirement ambiguity and accelerated validation cycles for the banking project.',
    lessons: ['Clear requirements save time in later phases.', 'Cross-functional review ensures completeness.'],
    imageAlt: 'Placeholder document layout for BRD',
  },
  {
    title: 'Functional Requirement Documentation (FRD)',
    category: 'Solution Design',
    timeline: 'Internal project',
    overview: 'Prepared FRDs to define how banking systems will support new card banking workflows and operational controls.',
    challenge: 'Convert business requirements into technically actionable functional specifications.',
    responsibilities: [
      'Define detailed use cases, process flows, and data requirements.',
      'Align functional scope with banking system capabilities and constraints.',
      'Collaborate with developers and system analysts to validate design assumptions.',
    ],
    solution: 'Delivered precise FRDs that guided system configuration and testing efforts.',
    tools: ['Microsoft Excel', 'IBM analytical tools'],
    value: 'Enabled predictable execution and reduced rework during system enhancement.',
    lessons: ['Detail supports testing and implementation.', 'Functional and business teams must review jointly.'],
    imageAlt: 'Placeholder architecture diagram for FRD',
  },
  {
    title: 'Banking System Enhancement',
    category: 'Change Management',
    timeline: 'Current responsibility',
    overview: 'Support banking system improvements by evaluating requirements, documenting workflows, and monitoring release readiness.',
    challenge: 'Ensure that system changes preserve operational continuity and regulatory compliance.',
    responsibilities: [
      'Review enhancement requests and align them with business priorities.',
      'Document process impacts for operations, risk, and customer service.',
      'Support release preparation with operational readiness assessments.',
    ],
    solution: 'Created an operational readiness framework for banking system enhancements that supports both technical implementation and staff readiness.',
    tools: ['Microsoft Excel', 'IBM analytical tools'],
    value: 'Improved release quality and reduced training gaps during system updates.',
    lessons: ['Operational readiness is part of every system change.', 'Documentation ensures consistent handoff.'],
    imageAlt: 'Placeholder workflow for system enhancement',
  },
  {
    title: 'Staff Training and Operational Documentation',
    category: 'Capability Building',
    timeline: 'Ongoing',
    overview: 'Designed training material and process documentation to elevate branch and district staff performance.',
    challenge: 'Standardize knowledge transfer for complex card banking workflows across multiple teams.',
    responsibilities: [
      'Develop training collateral and procedural documentation.',
      'Deliver training sessions for branch and district staff.',
      'Capture feedback to refine operational procedures.',
    ],
    solution: 'Introduced structured training and documentation to support consistent execution and service quality.',
    tools: ['Microsoft Excel', 'SPSS'],
    value: 'Strengthened operational competence and reduced issue resolution time.',
    lessons: ['Training is most effective when grounded in real workflows.', 'Documentation must be easy to consume and update.'],
    imageAlt: 'Placeholder training presentation for staff learning',
  },
];