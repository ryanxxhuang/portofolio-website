export const site = {
  name: 'Ryan Huang',
  role: 'Robotics product and program manager',
  url: 'https://ryanxhuang.com',
  email: 'ryanxhuang1212@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ching-yu-huang/',
  github: 'https://github.com/ryanxxhuang',
  location: 'Los Angeles, CA',
  revision: '2026-11',
  resumes: {
    pm: '/resume/Ryan_Huang_Resume_PM.pdf',
    tpm: '/resume/Ryan_Huang_Resume_TPM.pdf',
  },
  description:
    'Ryan Huang is a robotics product and program manager (UCLA Anderson MBA 2027) who solo-built an autonomous race car and ran infrastructure programs up to $3.3B.',
} as const;

/** Resume-style data for the home page, ordered newest first. */
export const experience = [
  { role: 'Capstone team lead', org: 'Avride, UCLA Anderson MBA capstone', dates: 'Nov 2026 – now', href: '/work/avride/' },
  { role: 'Graduate student researcher', org: 'UCLA Robot Intelligence Lab', dates: 'Oct 2026 – now', href: '/work/uril/' },
  { role: 'Founder and product lead', org: 'CMIS.ai', dates: 'Jun 2026 – now', href: '/work/cmis/' },
  { role: 'MBA intern, product and GTM', org: 'AGIBOT', dates: 'May – Jul 2026', href: '/work/agibot/' },
  { role: 'Product manager', org: 'James Tech Consulting Group, Zendesk partner', dates: 'Mar – Jul 2025', href: '/work/zendesk/' },
  { role: 'Technical program manager', org: 'China Engineering Consultants', dates: 'Jun 2024 – Feb 2025', href: '/work/infrastructure/' },
  { role: 'Senior project manager', org: 'Taoyuan City Government', dates: 'Aug 2020 – May 2024', href: '/work/infrastructure/' },
];

export const projects = [
  { role: 'F1TENTH autonomous car', org: 'Solo build, from the parts list to MPC', dates: 'Jan – May 2026', href: '/work/f1tenth/' },
];

export const education = [
  { role: 'MBA', org: 'UCLA Anderson School of Management', dates: '2027' },
  { role: 'MS in Computer Science, robotics', org: 'Georgia Institute of Technology', dates: 'From 2027' },
  { role: 'MS in Civil Engineering', org: 'National Chiao Tung University', dates: '2020' },
  { role: 'BS in Civil Engineering', org: 'National Central University', dates: '2017' },
];

export const highlights = [
  'Solo-built an autonomous race car, from the parts list to model predictive control.',
  'Owned an AI support product from zero to launch; division revenue doubled in five months.',
  'Ran governance for a $3.3B underground railway program and saved $1.5M and 12 months on one fix.',
  "Benchmarked AGIBOT's humanoids against Unitree and built its US go-to-market plan.",
];
