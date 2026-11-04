'use client';

import { useState } from 'react';
import { Check, Mail } from './Icons';

/** "Email" copies the address instead of opening a mail app; falls back to mailto. */
export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      className="link-i cursor-pointer bg-transparent p-0 text-inherit"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(email);
          setCopied(true);
          setTimeout(() => setCopied(false), 1800);
        } catch {
          window.location.href = `mailto:${email}`;
        }
      }}
      title={`Copy ${email}`}
    >
      {copied ? <Check className="text-[#16a34a]" /> : <Mail />}
      <span className="ul" aria-live="polite">
        {copied ? 'Copied to clipboard' : 'Email'}
      </span>
    </button>
  );
}
