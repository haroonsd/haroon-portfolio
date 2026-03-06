/*
 * DESIGN: Bold Kinetic Modernism
 * Clients: Dark section with logo marquee + tabbed grid
 * Marquee for continuous scroll, tabs for India/Canada split
 */

import { useEffect, useRef, useState } from "react";

const canadianClients = [
  { name: "Rogers", category: "Telecom", color: "#E8001D" },
  { name: "Wireless DNA", category: "Rogers Dealer", color: "#1A1A2E" },
  { name: "The Plaza Hotel", category: "Hospitality", color: "#1A1A1A" },
  { name: "Crown Stone Inc.", category: "Construction", color: "#2D5016" },
  { name: "Tumbleweed Lounge", category: "Hospitality", color: "#8B4513" },
  { name: "Bhardwaj Law", category: "Legal", color: "#1A1A2E" },
  { name: "Nova Filsep", category: "Water Tech", color: "#0EA5E9" },
];

const indianClients = [
  { name: "Tech Mahindra", category: "Technology", color: "#E31837" },
  { name: "Encardio Rite", category: "Engineering", color: "#003087" },
  { name: "GIZ", category: "International Dev.", color: "#009B3A" },
  { name: "Govt. of India", category: "Government", color: "#FF9933" },
  { name: "OYO Homes", category: "Hospitality", color: "#EF2B2D" },
  { name: "Hindware Italian", category: "Home Products", color: "#C8A96E" },
  { name: "HCCB", category: "FMCG", color: "#E31837" },
  { name: "DLF Cyberhub", category: "Real Estate", color: "#003087" },
  { name: "Kohler", category: "Home Products", color: "#1A1A1A" },
  { name: "Skymet", category: "Weather Tech", color: "#0EA5E9" },
];

const allLogos = [...canadianClients, ...indianClients];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<"canada" | "india">("canada");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayedClients = activeTab === "canada" ? canadianClients : indianClients;

  return (
    <section id="clients" className="py-24 lg:py-32 bg-[#0F172A] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">04 — Clients</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-white mt-3 mb-4">
            Trusted by the Best
          </h2>
          <p className="text-white/50 font-['Outfit'] text-lg max-w-2xl">
            Working with leading brands across Canada and India — from global telecom giants to innovative startups.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div
        className={`mt-12 overflow-hidden transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex gap-6 marquee-track whitespace-nowrap">
          {[...allLogos, ...allLogos].map((client, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-3 glass-card rounded-xl px-5 py-3 flex-shrink-0"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: client.color }}
              />
              <span className="text-white font-semibold font-['Space_Grotesk'] text-sm whitespace-nowrap">
                {client.name}
              </span>
              <span className="text-white/40 text-xs font-['Outfit']">{client.category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabbed client grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16">
        {/* Tabs */}
        <div
          className={`flex gap-2 mb-8 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <button
            onClick={() => setActiveTab("canada")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold font-['Outfit'] transition-all duration-300 ${
              activeTab === "canada"
                ? "bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/30"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            🍁 Canadian Experience
          </button>
          <button
            onClick={() => setActiveTab("india")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold font-['Outfit'] transition-all duration-300 ${
              activeTab === "india"
                ? "bg-[#0EA5E9] text-white shadow-lg shadow-[#0EA5E9]/30"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            🇮🇳 Indian Experience
          </button>
        </div>

        {/* Client cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-700 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {displayedClients.map((client, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="bento-card glass-card rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-[#0EA5E9]/40 transition-all duration-300"
            >
              {/* Logo placeholder with initials */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold font-['Space_Grotesk'] text-lg shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${client.color}cc, ${client.color}88)`,
                }}
              >
                {client.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="text-white font-semibold font-['Space_Grotesk'] text-sm leading-tight">
                  {client.name}
                </div>
                <div className="text-white/40 text-xs font-['Outfit'] mt-0.5">{client.category}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
