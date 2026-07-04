// ─── Types ────────────────────────────────────────────────────────────────────

export type CourseItem = {
  title: string;
  issued: string;
  skills: string[];
  credentialUrl?: string; // undefined = no link, no button shown
};

export type CertificationTrack = {
  kind: 'track';
  id: string;
  program: string;
  issuer: string;
  issuerLogo: 'coursera' | 'udemy' | 'alison' | 'mic';
  platform?: string;
  status: 'completed' | 'in-progress';
  courses: CourseItem[];
  credentialUrl?: string;
};

export type CertificationSingle = {
  kind: 'single';
  id: string;
  title: string;
  issuer: string;
  issuerLogo: 'coursera' | 'udemy' | 'alison' | 'mic';
  issued?: string;
  credentialId?: string;
  skills?: string[];
  status: 'completed' | 'in-progress';
  credentialUrl?: string; // undefined = no link, no button shown
};

export type CertificationEntry = CertificationTrack | CertificationSingle;

// ─── Data ─────────────────────────────────────────────────────────────────────

export const certifications: CertificationEntry[] = [
  // ── Google Project Management Professional Certificate ────────────────────
  {
    kind: 'track',
    id: 'google-pm',
    program: 'Google Project Management Professional Certificate',
    issuer: 'Coursera',
    issuerLogo: 'coursera',
    platform: 'Google Career Certificates',
    status: 'completed',
    courses: [
      {
        title: 'Foundations of Project Management',
        issued: 'Apr 2025',
        skills: ['Business Requirement Documentation (BRD)'],
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/ZHK84ABA1DFU',
      },
      {
        title: 'Project Initiation: Starting a Successful Project',
        issued: 'Apr 2025',
        skills: ['Project Planning', 'Business Requirement Documentation (BRD)'],
        // no URL — no button shown
      },
      {
        title: 'Project Planning: Putting It All Together',
        issued: 'May 2025',
        skills: ['Project Planning'],
        // no URL — no button shown
      },
      {
        title: 'Project Execution: Running the Project',
        issued: 'Jul 2025',
        skills: ['Change Management & Training', 'Monitoring & Evaluation Through Data'],
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/EWF53JUAM0SY',
      },
      {
        title: 'Agile Project Management',
        issued: 'Mar 2026',
        skills: ['Agile Methodologies', 'Scrum'],
        credentialUrl: 'https://coursera.org/share/8e4a9a1f993603f72a0fb824db89148f',
      },
    ],
  },

  // ── Computer Networks Simplified — Udemy ─────────────────────────────────
  {
    kind: 'single',
    id: 'udemy-networks',
    title: 'Computer Networks Simplified',
    issuer: 'Udemy',
    issuerLogo: 'udemy',
    issued: 'Feb 2024',
    status: 'completed',
    credentialUrl: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8a189ed4-2de8-4370-9780-a2da17a7080f.jpg',
  },

  // ── Data Entry Tools and Techniques — Alison ─────────────────────────────
  {
    kind: 'single',
    id: 'alison-data-entry',
    title: 'Data Entry Tools and Techniques',
    issuer: 'Alison',
    issuerLogo: 'alison',
    issued: 'Dec 2023',
    credentialId: '6173-28189056',
    skills: ['Data Entry', 'Microsoft Excel'],
    status: 'completed',
    // no link available — credential ID shown as text only
  },

  // ── MSc Project Management — In Progress ─────────────────────────────────
  {
    kind: 'single',
    id: 'msc-pm',
    title: 'MSc in Project Management',
    issuer: 'Maryland International College (MIC)',
    issuerLogo: 'mic',
    issued: 'Nov 2023 – Nov 2025',
    skills: ['Project Management', 'Monitoring & Evaluation', 'Agile Methodologies'],
    status: 'in-progress',
    // no link — display as text only
  },
];
