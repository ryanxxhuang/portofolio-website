'use client';

import { useState } from 'react';

/** "Email" copies the address instead of opening a mail app; falls back to mailto. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="ul cursor-pointer bg-transparent p-0 text-inherit"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      title={email}
    >
      <span aria-live="polite">{copied ? 'Copied' : 'Email'}</span>
    </button>
  );
}
