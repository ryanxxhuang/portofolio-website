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

/** Top-level pages, in "sheet" order for the footer title block. */
export const sheets = [
  { href: '/', label: 'Home' },
  { href: '/work/', label: 'Work' },
  { href: '/log/', label: 'Build log' },
  { href: '/resume/', label: 'Resume' },
] as const;
