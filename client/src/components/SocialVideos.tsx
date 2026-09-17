import { useState, useRef, useEffect, useCallback } from "react";
import Reveal from "@/components/Reveal";

const VIDEOS = [
  { src: "https://res.cloudinary.com/dchbuwhfz/video/upload/v1783309923/Derek_here_Get_ready_for_Oktoberfest_this_Friday_at_Tumbleweed_Lounge_We_ve_got_Paulan_gkcati.mp4", label: "Oktoberfest @ Tumbleweed" },
  { src: "https://res.cloudinary.com/dchbuwhfz/video/upload/v1783309923/Get_Your_Senorita_to_Try_This_Margarita_Sip_into_summer_with_our_Blue_Margarita_at_Tumblewe_lcluze.mp4", label: "Blue Margarita Reel" },
  { src: "https://res.cloudinary.com/dchbuwhfz/video/upload/v1783309923/Boom_Boom_Bazooka_by_biblicallyaccuratekira__Ready_for_a_shot_that_packs_a_punch_Kyra_s_servi_iob1qm.mp4", label: "Boom Boom Bazooka" },
  { src: "https://res.cloudinary.com/dchbuwhfz/video/upload/v1783309923/Dive_into_a_blend_of_Tequila_Blanco_Campari_and_Zesty_Citrus_for_the_Siesta_A_cocktail_that_s_acibjt.mp4", label: "The Siesta Cocktail" },
  { src: "https://res.cloudinary.com/dchbuwhfz/video/upload/v1783309923/Have_you_tried_tumbleweed_lounge_yet_Located_inside_The_Plaza_Hotel_this_downtown_gem_has_s_fvqcup.mp4", label: "Tumbleweed Lounge" },
];

function MuteIcon({ muted }: { muted: boolean }) {
  return muted ? (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#8a8278" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  ) : (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8490f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 5L6 9H2v6h4l5 4V5z"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
    </svg>
  );
}

export default function SocialVideos() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const prevActiveRef = useRef<number | null>(null);

  const applyPlayback = useCallback((idx: number | null) => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === idx) {
        v.muted = muted;
        v.play().catch(() => {});
      } else {
        v.pause();
        v.currentTime = 0;
      }
    });
    prevActiveRef.current = idx;
  }, [muted]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoRefs.current.forEach(v => v?.pause());
          setActiveIdx(null);
        } else {
          setActiveIdx(prev => prev ?? 0);
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    applyPlayback(activeIdx);
  }, [activeIdx, applyPlayback]);

  useEffect(() => {
    if (activeIdx === null) return;
    const v = videoRefs.current[activeIdx];
    if (v) v.muted = muted;
  }, [muted, activeIdx]);

  const handleClick = (i: number) => {
    setActiveIdx(prev => (prev === i ? null : i));
  };

  return (
    <section id="social" data-nav="social" className="py-24 md:py-[120px] border-b border-[#d0cab8]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-14">
          <Reveal label className="font-['IBM_Plex_Mono'] text-[10px] tracking-[2.5px] uppercase text-[#8a8278] mb-2">
            // 03
          </Reveal>
          <Reveal label className="font-['IBM_Plex_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8490f] mb-6">
            SOCIAL CONTENT
          </Reveal>
          <Reveal as="h2" className="font-['Anton'] text-[36px] md:text-[52px] tracking-tight text-[#17140e] leading-[1.05] mb-4">
            Content that <span className="text-[#e8490f]">moves</span>.
          </Reveal>
          <Reveal as="p" delay={80} className="font-['Inter'] text-base text-[#8a8278] leading-[1.7] max-w-[480px]">
            Social media videos produced for clients — scripted, shot, and edited in-house. Tap any video to play. One at a time.
          </Reveal>
        </div>

        <div ref={sectionRef} className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: "none" }}>
          {VIDEOS.map((video, i) => {
            const isActive = i === activeIdx;
            return (
              <div
                key={video.src}
                className={`relative shrink-0 overflow-hidden cursor-pointer transition-all duration-300 border ${isActive ? "border-[#e8490f]" : "border-[#d0cab8] hover:border-[#c5bfaf]"}`}
                style={{ width: "220px", aspectRatio: "9/16" }}
                onClick={() => handleClick(i)}
              >
                <video
                  ref={el => { videoRefs.current[i] = el; }}
                  src={video.src}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />

                {/* Inactive overlay */}
                <div className={`absolute inset-0 bg-[#17140e]/45 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                  <div className="w-11 h-11 border border-[#e8490f]/70 bg-[#f4f1ea]/10 flex items-center justify-center">
                    <span className="text-[#e8490f] text-lg ml-1">▶</span>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[9px] tracking-[1.5px] uppercase text-[#f4f1ea]/70 text-center px-4 leading-[1.6]">{video.label}</span>
                </div>

                {/* Active: mute button + label */}
                {isActive && (
                  <>
                    <button
                      onClick={e => { e.stopPropagation(); setMuted(m => !m); }}
                      className="absolute top-3 right-3 w-8 h-8 bg-[#f4f1ea]/90 border border-[#d0cab8] hover:border-[#e8490f] flex items-center justify-center z-10 transition-colors duration-200"
                      aria-label={muted ? "Unmute" : "Mute"}
                    >
                      <MuteIcon muted={muted} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#17140e]/80 to-transparent pt-8 pb-3 px-3 pointer-events-none">
                      <span className="font-['IBM_Plex_Mono'] text-[9px] tracking-[1.5px] uppercase text-[#f4f1ea]/90">{video.label}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e8490f]" />
                  </>
                )}

                {/* Index indicator */}
                <div className="absolute top-3 left-3 font-['IBM_Plex_Mono'] text-[9px] tracking-[1px] text-[#f4f1ea]/60">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            );
          })}
        </div>

        <Reveal className="mt-6 flex items-center gap-2" delay={100}>
          <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-[2px] uppercase text-[#8a8278]">← scroll to see all</span>
        </Reveal>
      </div>
    </section>
  );
}
