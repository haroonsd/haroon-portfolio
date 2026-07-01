import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

const HERO_VIDEO = "https://res.cloudinary.com/dchbuwhfz/video/upload/v1782940613/A_day_in_the_life_of_a_marketing_coordinator_in_Canada_Follow_for_more_toronto_worklifeba_lmvlcw.mp4";
const TAGLINE = "I build ai-powered marketing systems to automate business growth.";

const stats = [
  { value: "5+", label: "Years" },
  { value: "50+", label: "Retail Locations" },
  { value: "4", label: "Sales Channels" },
];

export default function Hero() {
  const [nameVisible, setNameVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
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
    <section
      id="hero"
      data-nav="hero"
      className="relative min-h-screen flex items-center pt-20 border-b border-[#1e1e1e]"
    >
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12 py-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">
          {/* Left */}
          <div className="md:flex-[0_0_58%] md:max-w-[58%] w-full">
            <Reveal label className="font-['Syne_Mono'] text-[11px] uppercase tracking-[2px] text-[#6b6b6b] mb-11 flex items-center gap-2.5">
              <span className="text-[#e8a030] text-[13px] leading-none">●</span>
              AVAILABLE FOR OPPORTUNITIES · TORONTO, ON
            </Reveal>

            <div
              className={`mb-8 leading-[0.88] transition-opacity duration-500 ${nameVisible ? "opacity-100" : "opacity-0"}`}
            >
              <div className="font-['Syne'] font-extrabold uppercase text-[#f0ede8] tracking-[-3px] text-[52px] md:text-[clamp(52px,6.5vw,96px)]">
                HAROON
              </div>
              <div className="font-['Syne'] font-extrabold uppercase text-[#f0ede8] tracking-[-3px] text-[52px] md:text-[clamp(52px,6.5vw,96px)]">
                SIDDIQU<span className="text-[#e8a030]">I</span>
              </div>
            </div>

            <div className="font-['Inter'] text-xl text-[#f0ede8] mb-14 min-h-[34px] leading-relaxed">
              <span>{typed}</span>
              <span className={`ml-px text-[#e8a030] ${cursorOn ? "tw-cursor" : "opacity-0"}`}>|</span>
            </div>

            <Reveal className="flex items-center mb-14">
              {stats.map((s, i) => (
                <div key={s.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-9 bg-[#e8a030]/35 mx-8 shrink-0" />}
                  <div>
                    <div className="font-['Syne'] font-bold text-2xl text-[#e8a030]">{s.value}</div>
                    <div className="font-['Syne_Mono'] text-[11px] uppercase tracking-[2px] text-[#6b6b6b] mt-1.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal className="flex gap-10 items-center" delay={150}>
              <a href="#work" onClick={(e) => { e.preventDefault(); document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" }); }} className="hero-link font-['Inter'] text-base text-[#f0ede8]">
                View My Work ↓
              </a>
              <a href="mailto:hsiddiqui.ind@gmail.com?subject=Resume%20Request" className="hero-link font-['Inter'] text-base text-[#f0ede8]">
                Download Resume
              </a>
            </Reveal>
          </div>

          {/* Right: video */}
          <div className="flex-1 relative w-full">
            <div className="absolute -inset-20 pointer-events-none z-0" style={{ background: "radial-gradient(ellipse at center, rgba(232,160,48,0.055) 0%, transparent 65%)" }} />
            <div className="relative z-10 w-full aspect-[4/5] bg-[#111111] border border-[#1e1e1e] overflow-hidden">
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
        <span className="font-['Syne_Mono'] text-[10px] tracking-[3px] text-[#6b6b6b] uppercase">scroll</span>
        <div className="w-px h-10 bg-[#6b6b6b]" style={{ transformOrigin: "top center", animation: "lineGrow 2.2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}
