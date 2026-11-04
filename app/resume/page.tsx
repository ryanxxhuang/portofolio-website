import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Download Ryan Huang\'s resume for product manager or technical program manager roles.',
  alternates: { canonical: '/resume/' },
};

const versions = [
  {
    name: 'Product manager',
    file: site.resumes.pm,
    for: 'Robotics, autonomy and AI product roles. Leads with the robotics work and the product record.',
  },
  {
    name: 'Technical program manager',
    file: site.resumes.tpm,
    for: 'TPM and engineering program roles. Adds more of the program-delivery record: scheduling, governance, vendors.',
  },
];

const timeline = [
  ['2026 to now', 'Capstone team lead', 'UCLA Anderson with Avride'],
  ['2026 to now', 'Graduate student researcher', 'UCLA Robot Intelligence Lab'],
  ['2026 to now', 'Founder and product lead', 'CMIS.ai'],
  ['2026', 'MBA intern, product and GTM', 'AGIBOT'],
  ['2026', 'Solo build', 'F1TENTH autonomous car'],
  ['2025', 'Product manager', 'James Tech Consulting Group, Zendesk partner'],
  ['2024 to 2025', 'Technical program manager', 'China Engineering Consultants'],
  ['2020 to 2024', 'Senior project manager', 'Taoyuan City Government'],
];

export default function Resume() {
  return (
    <section className="sheet pt-14">
      <h1 className="t-h1">Resume</h1>
      <p className="t-lead t-muted mt-4 max-w-[54ch]">
        Two versions of the same record, each one page. Pick the one that matches the role.
      </p>

      <ul className="mt-10 max-w-[880px] p-0" style={{ listStyle: 'none' }}>
        {versions.map((v) => (
          <li key={v.name} className="rule-bottom grid items-center gap-x-8 gap-y-3 py-6 sm:grid-cols-[1fr_auto]">
            <div>
              <h2 className="t-h3">{v.name}</h2>
              <p className="t-muted mt-1 max-w-[56ch]">{v.for}</p>
            </div>
            <a className="btn btn-primary justify-self-start" href={v.file} download>
              Download PDF
            </a>
          </li>
        ))}
      </ul>

      <h2 className="t-h2 mt-20">At a glance</h2>
      <div className="mt-6 max-w-[880px] overflow-x-auto">
      <table className="w-full min-w-[520px] border-collapse text-left">
        <thead>
          <tr className="border-b-[1.5px] border-ink">
            <th className="py-2 pr-6 font-semibold [font-stretch:90%]">When</th>
            <th className="py-2 pr-6 font-semibold [font-stretch:90%]">Role</th>
            <th className="py-2 font-semibold [font-stretch:90%]">Where</th>
          </tr>
        </thead>
        <tbody>
          {timeline.map(([when, role, where]) => (
            <tr key={role + where} className="rule-bottom align-top">
              <td className="t-note py-3 pr-6 whitespace-nowrap">{when}</td>
              <td className="py-3 pr-6">{role}</td>
              <td className="t-muted py-3">{where}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <p className="t-note mt-4 max-w-[880px]">
        Education: UCLA Anderson MBA, June 2027. Georgia Tech MS in Computer Science, from spring 2027. MS and BS in
        civil engineering, Taiwan.
      </p>
    </section>
  );
}
