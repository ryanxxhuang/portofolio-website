'use client';

import { useState } from 'react';

/** Loads the YouTube player only after a click. */
export default function VideoFacade({ id, title, note }: { id: string; title: string; note?: string }) {
  const [on, setOn] = useState(false);
  return (
    <figure className="m-0">
      <div className="relative aspect-video overflow-hidden rounded-lg bg-hover">
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
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
            <span className="absolute left-3 bottom-3 rounded-full bg-white/90 px-3 py-1 text-[13px] font-medium text-black">
              Play
            </span>
          </button>
        )}
      </div>
      <figcaption className="muted mt-2 text-[13px]">
        {title}
        {note ? `. ${note}` : ''}
      </figcaption>
    </figure>
  );
}
