import type { Metadata } from 'next';
import WorkList from '@/components/WorkList';
import { getWork } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies: an autonomous race car, humanoid robots, delivery robots, AI products and large infrastructure programs.',
  alternates: { canonical: '/work/' },
};

export default function WorkIndex() {
  return (
    <section className="sheet pt-14">
      <h1 className="t-h1">Work</h1>
      <p className="t-lead t-muted mt-4 max-w-[52ch]">
        Robotics first, then the product and program work that taught me how to ship.
      </p>
      <div className="mt-10">
        <WorkList items={getWork()} />
      </div>
    </section>
  );
}
