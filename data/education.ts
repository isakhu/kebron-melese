export type EducationItem = {
  degree: string;
  field: string;
  institution: string;
  location: string;
  year?: string;
};

export const education: EducationItem[] = [
  {
    degree: 'Master of Science',
    field: 'Project Management',
    institution: 'Maryland International College',
    location: 'Ethiopia',
    year: 'January 2026',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Electrical & Computer Engineering',
    institution: 'Hawassa University',
    location: 'Ethiopia',
    year: 'June 2022',
  },
];