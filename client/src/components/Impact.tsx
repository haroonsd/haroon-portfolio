/*
 * DESIGN: Bold Kinetic Modernism
 * Impact: Light section with large numbers and key achievements
 * Bento-style grid with alternating card sizes
 */

import { useEffect, useRef, useState } from "react";
import { Rocket, Globe, Award, Users, BarChart2, Sparkles } from "lucide-react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663392511065/AnQU8RMRgSGMUz5FaD6EEA/cta-bg-gB3zkg8QeKAgPcchR3Vz7P.webp";

const bentoItems = [
  {
    type: "stat",
    value: "2M+",
    label: "Monthly website visitors managed (Skymet)",
    icon: <Globe size={24} />,
    color: "#0EA5E9",
    bg: "#F0F9FF",
    span: "col-span-1",
  },
  {
    type: "stat",
    value: "#1",
    label: "India's first AI-powered Weather Assistant App",
    icon: <Rocket size={24} />,
    color: "#FF6B6B",
    bg: "#FFF5F5",
    span: "col-span-1",
  },
  {
    type: "stat",
    value: "4+",
    label: "Years delivering measurable marketing results",
    icon: <Award size={24} />,
    color: "#8B5CF6",
    bg: "#F5F3FF",
    span: "col-span-1",
  },
  {
    type: "highlight",
    title: "Full-Stack Marketer",
    desc: "From strategy to execution — I handle the entire marketing lifecycle. No hand-holding needed.",
    icon: <Sparkles size={24} />,
    color: "#0EA5E9",
    bg: "#0F172A",
    span: "col-span-1 md:col-span-2",
    dark: true,
  },
  {
    type: "stat",
    value: "9+",
    label: "Industries served across Canada and India",
    icon: <BarChart2 size={24} />,
    color: "#10B981",
    bg: "#F0FDF4",
    span: "col-span-1",
  },
  {
    type: "stat",
    value: "15+",
    label: "Clients served with end-to-end marketing",
    icon: <Users size={24} />,
    color: "#F59E0B",
    bg: "#FFFBEB",
    span: "col-span-1",
  },
  {
    type: "highlight",
    title: "AI & Automation Native",
    desc: "Leveraging Zapier, Manychat, and AI tools to build scalable marketing systems that work 24/7.",
    icon: <Rocket size={24} />,
    color: "#FF6B6B",
    bg: "#FFF5F5",
    span: "col-span-1 md:col-span-2",
    dark: false,
  },
];

export default function Impact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="impact" className="py-24 lg:py-32 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">05.5 — Impact</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#0F172A] mt-3 mb-4">
            Numbers that speak
          </h2>
          <p className="text-[#64748B] font-['Outfit'] text-lg max-w-2xl">
            Real results from real campaigns. Here's a snapshot of the impact I've driven.
          </p>
        </div>

        {/* Bento Grid */}
        <div
          className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {bentoItems.map((item, i) => (
            <div
              key={i}
              className={`bento-card rounded-2xl p-6 border border-[#E2E8F0] ${item.span} ${
                item.dark ? "border-transparent" : ""
              }`}
              style={{ backgroundColor: item.bg }}
            >
              {item.type === "stat" ? (
                <div className="flex flex-col h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: item.color + "20", color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div
                    className="text-5xl font-bold font-['Space_Grotesk'] mb-2"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </div>
                  <div className="text-[#475569] text-sm font-['Outfit'] leading-relaxed">
                    {item.label}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: item.dark ? item.color + "30" : item.color + "20",
                      color: item.dark ? item.color : item.color,
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-xl font-bold font-['Space_Grotesk'] mb-2"
                    style={{ color: item.dark ? "#FFFFFF" : "#0F172A" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-['Outfit'] leading-relaxed"
                    style={{ color: item.dark ? "rgba(255,255,255,0.6)" : "#475569" }}
                  >
                    {item.desc}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
