/*
 * DESIGN: Bold Kinetic Modernism
 * Skills: Dark section with animated skill bars and tool grid
 * Two columns: Core skills + Software tools
 */

import { useEffect, useRef, useState } from "react";

const coreSkills = [
  { name: "Digital Marketing Strategy", level: 95, color: "#0EA5E9" },
  { name: "Social Media Management", level: 92, color: "#0EA5E9" },
  { name: "Content Creation & Copywriting", level: 90, color: "#38BDF8" },
  { name: "Graphic Design (Canva Pro)", level: 85, color: "#38BDF8" },
  { name: "Client Servicing & Account Management", level: 95, color: "#0EA5E9" },
  { name: "Project Management", level: 88, color: "#38BDF8" },
  { name: "Email Marketing & Automation", level: 82, color: "#0EA5E9" },
  { name: "SEO & Web Optimization", level: 78, color: "#38BDF8" },
  { name: "Video Editing", level: 75, color: "#0EA5E9" },
  { name: "AI Growth & Automation", level: 80, color: "#38BDF8" },
];

const toolCategories = [
  {
    category: "Project Management",
    tools: ["Notion", "Asana", "ClickUp", "Jira", "Monday.com"],
    color: "#8B5CF6",
  },
  {
    category: "Marketing & Analytics",
    tools: ["Google Ads", "Meta Ads", "Meta Business Suite", "Google Analytics", "Google Search Console", "Semrush"],
    color: "#0EA5E9",
  },
  {
    category: "Content & Design",
    tools: ["Canva Pro", "Veed", "Clipchamp", "Microsoft Office"],
    color: "#FF6B6B",
  },
  {
    category: "Automation & CRM",
    tools: ["Zapier", "Manychat", "Klaviyo", "Mailchimp"],
    color: "#10B981",
  },
  {
    category: "Web & eCommerce",
    tools: ["WordPress", "Wix", "Shopify"],
    color: "#F59E0B",
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimated(true), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#0F172A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">06 — Skills</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-white mt-3 mb-4">
            Tools & Expertise
          </h2>
          <p className="text-white/50 font-['Outfit'] text-lg max-w-2xl">
            A full-stack marketing toolkit built over 4+ years across agencies, startups, and enterprise brands.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Skill bars */}
          <div
            className={`transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-6">Core Competencies</h3>
            <div className="space-y-5">
              {coreSkills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-white/80 text-sm font-['Outfit']">{skill.name}</span>
                    <span className="text-white/40 text-xs font-['Space_Grotesk'] font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animated ? `${skill.level}%` : "0%",
                        backgroundColor: skill.color,
                        transitionDelay: `${i * 80}ms`,
                        boxShadow: `0 0 8px ${skill.color}60`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tool categories */}
          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-6">Software & Tools</h3>
            <div className="space-y-5">
              {toolCategories.map((cat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />
                    <span className="text-white/60 text-xs font-semibold font-['Space_Grotesk'] uppercase tracking-wider">
                      {cat.category}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool, j) => (
                      <span
                        key={j}
                        className="tag-pill text-white/80 border"
                        style={{
                          backgroundColor: `${cat.color}15`,
                          borderColor: `${cat.color}30`,
                          color: cat.color === "#FF6B6B" ? "#FF9999" : cat.color === "#0EA5E9" ? "#7DD3FC" : cat.color === "#8B5CF6" ? "#C4B5FD" : cat.color === "#10B981" ? "#6EE7B7" : "#FCD34D",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div
          className={`mt-12 glass-card rounded-2xl p-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h3 className="text-sm font-semibold font-['Space_Grotesk'] text-white/60 uppercase tracking-wider mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: "English", level: "Native/Fluent", color: "#0EA5E9" },
              { lang: "Hindi", level: "Native", color: "#FF6B6B" },
              { lang: "Urdu", level: "Native", color: "#8B5CF6" },
              { lang: "French", level: "Elementary", color: "#10B981" },
            ].map((l, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
                <span className="text-white font-semibold font-['Space_Grotesk'] text-sm">{l.lang}</span>
                <span className="text-white/40 text-xs font-['Outfit']">({l.level})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
