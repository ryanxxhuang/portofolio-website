import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Kind = 'work' | 'log';

export interface WorkMeta {
  slug: string;
  title: string;
  summary: string;
  role: string;
  org?: string;
  period: string;
  year: string;
  order: number;
  stack?: string[];
  links?: { label: string; href: string }[];
  stats?: { value: string; label: string }[];
}

export interface LogMeta {
  slug: string;
  title: string;
  summary: string;
  date: string; // YYYY-MM, used for sorting
  displayDate: string;
  project?: string; // work slug
}

const root = path.join(process.cwd(), 'content');

function files(kind: Kind) {
  const dir = path.join(root, kind);
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
}

function read(kind: Kind, slug: string) {
  const raw = fs.readFileSync(path.join(root, kind, `${slug}.mdx`), 'utf8');
  return matter(raw);
}

export function getWork(): WorkMeta[] {
  return files('work')
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      return { slug, ...(read('work', slug).data as Omit<WorkMeta, 'slug'>) };
    })
    .sort((a, b) => a.order - b.order);
}

export function getLog(): LogMeta[] {
  return files('log')
    .map((f) => {
      const slug = f.replace(/\.mdx$/, '');
      return { slug, ...(read('log', slug).data as Omit<LogMeta, 'slug'>) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : a.title.localeCompare(b.title)));
}

export function getSource(kind: Kind, slug: string) {
  const { content, data } = read(kind, slug);
  return { content, data };
}
