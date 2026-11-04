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
};

/** Resume-style data for the home page, ordered newest first. */
export const experience: Entry[] = [
  { role: 'Capstone team lead', org: 'Avride, UCLA Anderson MBA capstone', mark: 'Av', start: '2026-11', dates: 'Nov 2026', href: '/work/avride/' },
  { role: 'Graduate student researcher', org: 'UCLA Robot Intelligence Lab', mark: 'UR', start: '2026-10', dates: 'Oct 2026', href: '/work/uril/' },
  { role: 'Founder and product lead', org: 'CMIS.ai', mark: 'CM', start: '2026-06', dates: 'Jun 2026', href: '/work/cmis/' },
  { role: 'MBA intern, product and GTM', org: 'AGIBOT', mark: 'AG', start: '2026-05', end: '2026-07', dates: 'May – Jul 2026', href: '/work/agibot/' },
  { role: 'Product manager', org: 'James Tech Consulting Group, Zendesk partner', mark: 'JT', start: '2025-03', end: '2025-07', dates: 'Mar – Jul 2025', href: '/work/zendesk/' },
  { role: 'Technical program manager', org: 'China Engineering Consultants', mark: 'CE', start: '2024-06', end: '2025-02', dates: 'Jun 2024 – Feb 2025', href: '/work/infrastructure/' },
  { role: 'Senior project manager', org: 'Taoyuan City Government', mark: 'TY', start: '2020-08', end: '2024-05', dates: 'Aug 2020 – May 2024', href: '/work/infrastructure/' },
];

export const projects: Entry[] = [
  { role: 'F1TENTH autonomous car', org: 'Solo build, from the parts list to MPC', mark: 'F1', start: '2026-01', end: '2026-05', dates: 'Jan – May 2026', href: '/work/f1tenth/' },
];

export const education: Entry[] = [
  { role: 'MBA', org: 'UCLA Anderson School of Management', mark: 'UA', dates: '2027' },
  { role: 'MS in Computer Science, robotics', org: 'Georgia Institute of Technology', mark: 'GT', dates: 'From 2027' },
  { role: 'MS in Civil Engineering', org: 'National Chiao Tung University', mark: 'CT', dates: '2020' },
  { role: 'BS in Civil Engineering', org: 'National Central University', mark: 'CU', dates: '2017' },
];

export const highlights = [
  { text: 'Solo-built an autonomous race car, from the parts list to model predictive control.', href: '/work/f1tenth/' },
  { text: 'Owned an AI support product from zero to launch; division revenue doubled in five months.', href: '/work/zendesk/' },
  { text: 'Ran governance for a $3.3B underground railway program and saved $1.5M and 12 months on one fix.', href: '/work/infrastructure/' },
  { text: "Benchmarked AGIBOT's humanoids against Unitree and built its US go-to-market plan.", href: '/work/agibot/' },
];
