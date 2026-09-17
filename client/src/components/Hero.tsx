import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "@/components/Reveal";

const HERO_VIDEO = "https://res.cloudinary.com/dchbuwhfz/video/upload/v1782940613/A_day_in_the_life_of_a_marketing_coordinator_in_Canada_Follow_for_more_toronto_worklifeba_lmvlcw.mp4";
const TAGLINE = "I build ai-powered marketing systems to automate business growth.";

const stats = [
  { value: "5+", label: "Years" },
  { value: "50+", label: "Retail Locations" },
  { value: "4", label: "Sales Channels" },
];

function ResumeViewer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 bg-[#17140e]/95 z-[100] flex flex-col">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-[#2a2520] shrink-0">
        <div className="flex items-center gap-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[2.5px] text-[#8a8278]">Haroon Siddiqui</span>
          <span className="text-[#e8490f]">·</span>
          <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[2.5px] text-[#8a8278]">Resume 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="/resume.pdf"
            download="Haroon-Siddiqui-Resume-2026.pdf"
            className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[1.5px] text-[#e8490f] hover:opacity-70 transition-opacity"
          >
            Download ↓
          </a>
          <button
            onClick={onClose}
            className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[1.5px] text-[#8a8278] hover:text-[#f4f1ea] transition-colors"
            aria-label="Close resume viewer"
          >
            Close ×
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-[#0d0a07]">
        <iframe
          src="/resume.pdf"
          title="Haroon Siddiqui Resume 2026"
          className="w-full h-full border-0"
        />
      </div>

      <div className="md:hidden flex items-center justify-center gap-4 py-4 border-t border-[#2a2520] shrink-0 bg-[#17140e]">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[1.5px] text-[#f4f1ea]"
        >
          Open in browser ↗
        </a>
        <span className="text-[#e8490f]">·</span>
        <a
          href="/resume.pdf"
          download="Haroon-Siddiqui-Resume-2026.pdf"
          className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[1.5px] text-[#e8490f]"
        >
          Download ↓
        </a>
      </div>
    </div>,
    document.body
  );
}

export default function Hero() {
  const [nameVisible, setNameVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setNameVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let i = 0;
    const type = () => {
      if (i < TAGLINE.length) {
        setTyped(TAGLINE.slice(0, ++i));
        timeoutRef.current = setTimeout(type, 40);
      } else {
        timeoutRef.current = setTimeout(() => setCursorOn(false), 2000);
      }
    };
    timeoutRef.current = setTimeout(type, 500);
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <>
      <section
        id="hero"
        data-nav="hero"
        className="relative min-h-screen flex items-center pt-20 border-b border-[#d0cab8]"
      >
        <div className="container max-w-[1400px] mx-auto px-6 md:px-12 py-20 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
            {/* Left */}
            <div className="md:flex-[0_0_58%] md:max-w-[58%] w-full">
              <Reveal label className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[2px] text-[#8a8278] mb-11 flex items-center gap-2.5">
                <span className="text-[#e8490f] text-[13px] leading-none">●</span>
                AVAILABLE FOR OPPORTUNITIES · TORONTO, ON
              </Reveal>

              <div
                className={`mb-8 leading-[0.88] transition-opacity duration-500 ${nameVisible ? "opacity-100" : "opacity-0"}`}
              >
                <div className="font-['Anton'] uppercase text-[#17140e] tracking-tight text-[52px] md:text-[clamp(52px,6.5vw,96px)]">
                  HAROON
                </div>
                <div className="font-['Anton'] uppercase text-[#17140e] tracking-tight text-[52px] md:text-[clamp(52px,6.5vw,96px)]">
                  SIDDIQU<span className="text-[#e8490f]">I</span>
                </div>
              </div>

              <div className="font-['Inter'] text-xl text-[#17140e] mb-14 min-h-[34px] leading-relaxed">
                <span>{typed}</span>
                <span className={`ml-px text-[#e8490f] ${cursorOn ? "tw-cursor" : "opacity-0"}`}>|</span>
              </div>

              <Reveal className="flex items-center mb-14">
                {stats.map((s, i) => (
                  <div key={s.label} className="flex items-center">
                    {i > 0 && <div className="w-px h-9 bg-[#e8490f]/30 mx-8 shrink-0" />}
                    <div>
                      <div className="font-['Anton'] text-2xl text-[#e8490f]">{s.value}</div>
                      <div className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[2px] text-[#8a8278] mt-1.5">{s.label}</div>
                    </div>
                  </div>
                ))}
              </Reveal>

              <Reveal className="flex gap-10 items-center" delay={150}>
                <a
                  href="#work"
                  onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="hero-link font-['Inter'] text-base text-[#17140e]"
                >
                  View My Work ↓
                </a>
                <button
                  onClick={() => setResumeOpen(true)}
                  className="hero-link font-['Inter'] text-base text-[#17140e] bg-transparent border-0 p-0 cursor-pointer"
                >
                  View Resume
                </button>
              </Reveal>
            </div>

            {/* Right: video */}
            <div className="flex-1 relative w-full">
              <div className="absolute -inset-20 pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at center, rgba(232,73,15,0.06) 0%, transparent 65%)" }} />
              <div className="relative z-10 w-full aspect-[4/5] bg-[#ede9e0] border border-[#d0cab8] overflow-hidden">
                <video
                  src={HERO_VIDEO}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-11 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-['IBM_Plex_Mono'] text-[10px] tracking-[3px] text-[#8a8278] uppercase">scroll</span>
          <div className="w-px h-10 bg-[#8a8278]" style={{ transformOrigin: "top center", animation: "lineGrow 2.2s ease-in-out infinite" }} />
        </div>
      </section>

      {resumeOpen && <ResumeViewer onClose={() => setResumeOpen(false)} />}
    </>
  );
}
