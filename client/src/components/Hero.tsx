/*
 * DESIGN: Bold Kinetic Modernism
 * Hero: Full-viewport dark section with profile image, animated headline
 * Background: Deep charcoal with teal/coral gradient orbs
 * Typography: Space Grotesk bold for headline, Outfit for body
 */

import { useEffect, useRef, useState } from "react";
import { ArrowDown, MapPin, Briefcase } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663392511065/AnQU8RMRgSGMUz5FaD6EEA/hero-bg-7vp9sWqNaDeLA3E9uqQBKh.webp";
const PROFILE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663392511065/AnQU8RMRgSGMUz5FaD6EEA/haroon-profile_082fac25.jpg";

const roles = ["Digital Marketer", "Content Strategist", "Growth Hacker", "Brand Builder"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 60 : 100;

    if (!isDeleting && displayed === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, speed);
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, isDeleting, roleIndex]);

  const scrollToWork = () => {
    document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "15+", label: "Clients Served" },
    { value: "9+", label: "Industries" },
    { value: "50+", label: "Campaigns Run" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-[#0F172A]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#0EA5E9]/10 border border-[#0EA5E9]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9] animate-pulse" />
              <span className="text-[#0EA5E9] text-sm font-medium font-['Outfit']">
                Available for new projects
              </span>
            </div>

            {/* Greeting */}
            <p className="text-white/60 text-lg font-['Outfit'] mb-2">
              Hello, I'm
            </p>

            {/* Name */}
            <h1 className="text-5xl lg:text-7xl font-bold font-['Space_Grotesk'] text-white leading-tight mb-4">
              Haroon
              <br />
              <span className="gradient-text">Siddiqui</span>
            </h1>

            {/* Typewriter role */}
            <div className="flex items-center gap-2 mb-6 h-10">
              <span className="text-xl lg:text-2xl font-medium font-['Outfit'] text-white/80">
                {displayed}
              </span>
              <span className="w-0.5 h-7 bg-[#0EA5E9] animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-white/65 text-base lg:text-lg font-['Outfit'] leading-relaxed max-w-xl mb-8">
              Full-stack marketer with <strong className="text-white">4+ years of experience</strong> driving
              growth for businesses across Canada and India. Specializing in Client Servicing,
              Digital Marketing, and AI-powered Growth Automation.
            </p>

            {/* Location & Role tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 text-white/60 text-sm font-['Outfit']">
                <MapPin size={14} className="text-[#0EA5E9]" />
                Toronto, Canada
              </span>
              <span className="w-px h-4 bg-white/20 self-center" />
              <span className="flex items-center gap-1.5 text-white/60 text-sm font-['Outfit']">
                <Briefcase size={14} className="text-[#0EA5E9]" />
                Digital Marketing Executive @ Wireless DNA
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToWork}
                className="btn-teal px-7 py-3.5 rounded-full text-base font-semibold font-['Outfit'] text-white inline-flex items-center gap-2"
              >
                View My Work
                <ArrowDown size={16} />
              </button>
              <a
                href="mailto:hsiddiqui.ind@gmail.com"
                className="px-7 py-3.5 rounded-full text-base font-semibold font-['Outfit'] text-white border border-white/20 hover:border-[#0EA5E9]/60 hover:bg-[#0EA5E9]/10 transition-all duration-300 inline-flex items-center gap-2"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#0EA5E9]/30 to-[#FF6B6B]/20 blur-2xl" />
              {/* Profile image container */}
              <div className="relative w-72 h-80 lg:w-96 lg:h-[480px] rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl bg-gradient-to-b from-[#1E293B] to-[#0F172A]">
                <img
                  src={PROFILE_IMG}
                  alt="Haroon Siddiqui"
                  className="w-full h-full object-cover object-center"
                  style={{ objectPosition: '50% 10%' }}
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
              </div>
              {/* Floating stat cards */}
              <div className="absolute -left-8 top-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-white">4+</div>
                <div className="text-xs text-white/60 font-['Outfit']">Years Exp.</div>
              </div>
              <div className="absolute -right-6 bottom-20 bg-[#0EA5E9]/20 backdrop-blur-md border border-[#0EA5E9]/30 rounded-2xl px-4 py-3 shadow-xl">
                <div className="text-2xl font-bold font-['Space_Grotesk'] text-[#0EA5E9]">15+</div>
                <div className="text-xs text-white/60 font-['Outfit']">Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-2xl px-5 py-5 text-center border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="text-4xl font-bold font-['Space_Grotesk'] text-[#0EA5E9] mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm font-['Outfit']">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs font-['Outfit'] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} className="text-white/30" />
      </div>
    </section>
  );
}
