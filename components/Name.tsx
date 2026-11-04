/** Hovering the name reveals the Chinese name. */
export default function Name() {
  return (
    <h1 className="name m-0 text-[20px] font-semibold tracking-[-0.01em]" aria-label="Ryan Huang (黃慶宇)">
      <span className="en" aria-hidden>
        Ryan Huang
      </span>
      <span className="zh" aria-hidden>
        黃慶宇
      </span>
    </h1>
  );
}
