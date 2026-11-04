'use client';

import { useState } from 'react';

/** Loads the YouTube player only after a click, so the page stays light. */
export default function VideoFacade({ id, title, note }: { id: string; title: string; note?: string }) {
  const [on, setOn] = useState(false);
  return (
    <figure className="m-0">
      <div className="figure-frame relative aspect-video overflow-hidden">
        {on ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setOn(true)}
            className="group absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Play video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover grayscale-[35%] transition group-hover:grayscale-0"
            />
            <span className="absolute left-3 bottom-3 inline-flex items-center gap-2 bg-ink px-3 py-1.5 text-[14px] font-semibold text-paper">
              <svg width="10" height="12" viewBox="0 0 10 12" aria-hidden>
                <path d="M0 0l10 6-10 6z" fill="currentColor" />
              </svg>
              Play
            </span>
          </button>
        )}
      </div>
      <figcaption className="t-note mt-2">
        {title}
        {note ? `. ${note}` : ''}
      </figcaption>
    </figure>
  );
}
