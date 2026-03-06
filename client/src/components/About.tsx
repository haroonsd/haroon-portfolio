/*
 * DESIGN: Bold Kinetic Modernism
 * About: Light section with asymmetric layout
 * Left: Bio text with highlights; Right: Key facts + services
 */

import { useEffect, useRef, useState } from "react";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

export default function About() {
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

  const services = [
    { icon: <Target size={20} />, title: "Digital Marketing", desc: "End-to-end campaign strategy, execution, and optimization across all digital channels." },
    { icon: <Zap size={20} />, title: "Content Creation", desc: "Compelling copywriting, graphic design, and video content that converts audiences." },
    { icon: <Users size={20} />, title: "Client Servicing", desc: "Building and maintaining strong client relationships with clear communication and results." },
    { icon: <TrendingUp size={20} />, title: "Growth & Automation", desc: "AI-powered workflows and automation tools to scale marketing operations efficiently." },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">01 — About</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mt-8">
          {/* Left: Bio */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#0F172A] leading-tight mb-6">
              I turn marketing{" "}
              <span className="relative inline-block">
                <span className="gradient-text">complexity</span>
              </span>{" "}
              into clarity.
            </h2>
            <div className="space-y-4 text-[#475569] font-['Outfit'] text-base lg:text-lg leading-relaxed">
              <p>
                I'm a full-stack marketer who bridges the gap between strategy and execution. With over
                <strong className="text-[#0F172A]"> 4 years of hands-on experience</strong>, I've worked with
                agencies, startups, and enterprise brands across India and Canada — from Tech Mahindra and Rogers
                to boutique law firms and hospitality brands.
              </p>
              <p>
                My superpower is helping <strong className="text-[#0F172A]">B2B tech businesses</strong> explain
                their complex operations in a presentable, digestible way — turning boring case studies into
                captivating stories that position brands as thought leaders.
              </p>
              <p>
                Currently based in <strong className="text-[#0F172A]">Toronto, Canada</strong>, I'm pursuing
                my post-graduation in International Business Management at Fleming College while working as a
                Digital Marketing Executive at Wireless DNA Inc.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 space-y-3">
              <h3 className="text-sm font-semibold font-['Space_Grotesk'] text-[#0F172A] uppercase tracking-wider">Education</h3>
              <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold font-['Space_Grotesk'] text-[#0F172A] text-sm">PGDM — International Business Management</div>
                  <div className="text-[#64748B] text-sm font-['Outfit']">Fleming College · 2023–2024</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold font-['Space_Grotesk'] text-[#0F172A] text-sm">BBA — Business, Management & Marketing</div>
                  <div className="text-[#64748B] text-sm font-['Outfit']">Sharda University · 2017–2020</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Services */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#0F172A] mb-6">
              What I Do
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bento-card group flex gap-4 p-5 rounded-2xl border border-[#E2E8F0] bg-white hover:border-[#0EA5E9]/40 hover:bg-[#F0F9FF] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center text-[#0EA5E9] flex-shrink-0 group-hover:bg-[#0EA5E9] group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <div className="font-semibold font-['Space_Grotesk'] text-[#0F172A] mb-1">{service.title}</div>
                    <div className="text-[#64748B] text-sm font-['Outfit'] leading-relaxed">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white">
              <h4 className="text-sm font-semibold font-['Space_Grotesk'] uppercase tracking-wider text-white/60 mb-3">Certifications</h4>
              <div className="space-y-2">
                {[
                  "Facebook Marketing",
                  "Verified International Academic Qualifications",
                  "Excel: VLOOKUP and XLOOKUP for Beginners",
                  "Digital Marketing Tools: Campaign from Start to Finish",
                ].map((cert, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-['Outfit'] text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
