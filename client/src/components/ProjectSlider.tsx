import { useState, useEffect, useCallback } from "react";

interface Props {
  images: string[];
}

export default function ProjectSlider({ images }: Props) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (paused || images.length < 2) return;
    const id = setInterval(next, 3500);
    return () => clearInterval(id);
  }, [paused, next, images.length]);

  return (
    <div
      className="relative w-full h-full min-h-[260px] overflow-hidden group cursor-pointer"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f4f1ea]/85 border border-[#d0cab8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hover:border-[#e8490f]"
            aria-label="Previous"
          >
            <span className="text-[#17140e] text-base leading-none">←</span>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#f4f1ea]/85 border border-[#d0cab8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 hover:border-[#e8490f]"
            aria-label="Next"
          >
            <span className="text-[#17140e] text-base leading-none">→</span>
          </button>
        </>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === current ? "w-5 bg-[#e8490f]" : "w-1.5 bg-[#f4f1ea]/70"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pause indicator */}
      {paused && images.length > 1 && (
        <div className="absolute top-3 right-3 z-10">
          <span className="font-['IBM_Plex_Mono'] text-[9px] tracking-[1.5px] uppercase text-[#8a8278] bg-[#f4f1ea]/85 px-2 py-1">PAUSED</span>
        </div>
      )}
    </div>
  );
}
