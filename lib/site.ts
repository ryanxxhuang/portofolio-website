export const site = {
  name: 'Ryan Huang',
  role: 'Robotics product and program manager',
  url: 'https://ryanxhuang.com',
  email: 'ryanxhuang1212@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ching-yu-huang/',
  github: 'https://github.com/ryanxxhuang',
  location: 'Los Angeles, CA',
  revision: '2026-11',
  resume: '/resume/Ryan_Huang_Resume.pdf',
  repo: 'https://github.com/ryanxxhuang/portofolio-website',
  updated: 'November 2026',
  description:
    'Ryan Huang is a robotics product and program manager (UCLA Anderson MBA 2027) who solo-built an autonomous race car and ran infrastructure programs up to $3.3B.',
} as const;

export type Entry = {
  role: string;
  org: string;
  mark: string; // two-letter monogram
  start?: string; // YYYY-MM
  end?: string; // YYYY-MM, omitted while current
  dates: string;
  href?: string;
  impact?: string; // one line shown on hover (always shown on touch screens)
};

/** Resume-style data for the home page, ordered newest first. */
export const experience: Entry[] = [
  { role: 'Capstone team lead', org: 'Avride, UCLA Anderson MBA capstone', mark: 'Av', start: '2026-11', dates: 'Nov 2026', href: '/work/avride/', impact: 'Signed Avride as our partner; pricing and market-selection work for 1,000+ robots on 25+ campuses.' },
  { role: 'Graduate student researcher', org: 'UCLA Robot Intelligence Lab', mark: 'UR', start: '2026-10', dates: 'Oct 2026', href: '/work/uril/', impact: 'Proposed research on demonstration safety margins and physics-solver disagreement.' },
  { role: 'Founder and product lead', org: 'CMIS.ai', mark: 'CM', start: '2026-06', dates: 'Jun 2026', href: '/work/cmis/', impact: 'Built a vision pipeline that turns site photos into structured records; 2 pilot users lined up.' },
  { role: 'MBA intern, product and GTM', org: 'AGIBOT', mark: 'AG', start: '2026-05', end: '2026-07', dates: 'May – Jul 2026', href: '/work/agibot/', impact: 'Unitree benchmark, PRDs and a hardware-software roadmap, and the US go-to-market plan.' },
  { role: 'Product manager', org: 'James Tech Consulting Group, Zendesk partner', mark: 'JT', start: '2025-03', end: '2025-07', dates: 'Mar – Jul 2025', href: '/work/zendesk/', impact: 'Division revenue doubled in 5 months; BenQ integration reached 92% accuracy and saved $200K a month.' },
  { role: 'Technical program manager', org: 'China Engineering Consultants', mark: 'CE', start: '2024-06', end: '2025-02', dates: 'Jun 2024 – Feb 2025', href: '/work/infrastructure/', impact: 'Governance for a $3.3B railway program; one root-cause fix saved $1.5M and 12 months.' },
  { role: 'Senior project manager', org: 'Taoyuan City Government', mark: 'TY', start: '2020-08', end: '2024-05', dates: 'Aug 2020 – May 2024', href: '/work/infrastructure/', impact: 'Managed a $63M portfolio with 10% ($6.3M) savings; cut execution costs 15% across 3 programs.' },
];

export const projects: Entry[] = [
  { role: 'F1TENTH autonomous car', org: 'Solo build, from the parts list to MPC', mark: 'F1', start: '2026-01', end: '2026-05', dates: 'Jan – May 2026', href: '/work/f1tenth/', impact: '6 autonomy algorithms, about 5,000 lines of Python and C++, localization 4.47× faster on the GPU.' },
];

export const education: Entry[] = [
  { role: 'MBA', org: 'UCLA Anderson School of Management', mark: 'UA', dates: '2027', impact: 'Technology Management specialization. GRE 337.' },
  { role: 'MS in Computer Science, robotics', org: 'Georgia Institute of Technology', mark: 'GT', dates: 'From 2027', impact: 'Computational Perception and Robotics specialization.' },
  { role: 'MS in Civil Engineering', org: 'National Chiao Tung University', mark: 'CT', dates: '2020', impact: 'Co-authored a paper at the 17th World Conference on Earthquake Engineering.' },
  { role: 'BS in Civil Engineering', org: 'National Central University', mark: 'CU', dates: '2017' },
];

export const highlights = [
  { text: 'Solo-built an autonomous race car, from the parts list to model predictive control.', href: '/work/f1tenth/' },
  { text: 'Owned an AI support product from zero to launch; division revenue doubled in five months.', href: '/work/zendesk/' },
  { text: 'Ran governance for a $3.3B underground railway program and saved $1.5M and 12 months on one fix.', href: '/work/infrastructure/' },
  { text: "Benchmarked AGIBOT's humanoids against Unitree and built its US go-to-market plan.", href: '/work/agibot/' },
];
