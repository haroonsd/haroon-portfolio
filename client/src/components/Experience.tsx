/*
 * DESIGN: Bold Kinetic Modernism
 * Experience: Alternating timeline with dark/light contrast
 * Left-aligned timeline with teal connector line
 */

import { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Wireless DNA Inc.",
    role: "Digital Marketing Executive",
    period: "Dec 2024 – Present",
    location: "North York, Ontario, Canada",
    type: "Full-time",
    color: "#0EA5E9",
    highlights: [
      "Leading digital marketing strategy for a Rogers Authorized Dealer",
      "Managing social media campaigns, content creation, and brand communications",
      "Driving customer acquisition and retention through targeted digital campaigns",
    ],
    tags: ["Social Media", "Rogers Campaigns", "Content Strategy"],
  },
  {
    company: "Self-Employed",
    role: "Marketing Consultant",
    period: "Dec 2023 – Present",
    location: "Toronto, Ontario, Canada",
    type: "Consulting",
    color: "#FF6B6B",
    highlights: [
      "Handling end-to-end marketing operations for a 30-year-old Law Firm",
      "Growth marketing for a Water Filtration Company startup",
      "Digital strategy for an 11-year-old Insurance agent",
      "Brand building for a 50-year-old Astrologer",
    ],
    tags: ["Consulting", "Multi-Industry", "End-to-End Marketing"],
  },
  {
    company: "The Plaza Hotel",
    role: "Marketing Coordinator",
    period: "Jun 2024 – Nov 2024",
    location: "Kamloops, British Columbia, Canada",
    type: "Full-time",
    color: "#8B5CF6",
    highlights: [
      "Coordinated marketing activities for a premium hotel property",
      "Managed social media presence and content calendar",
      "Supported event marketing and promotional campaigns",
    ],
    tags: ["Hospitality", "Social Media", "Event Marketing"],
  },
  {
    company: "Crown Stone Inc.",
    role: "Marketing Assistant",
    period: "Sep 2023 – May 2024",
    location: "Toronto, Ontario, Canada",
    type: "Full-time",
    color: "#10B981",
    highlights: [
      "Developed sales strategies to optimize client acquisition and retention via cold-calling",
      "Oversaw end-to-end website development, SEO, and social media content marketing",
      "Created email marketing campaigns using Klaviyo with Zapier automation",
      "Formulated contractor onboarding procedures aligned with company objectives",
    ],
    tags: ["SEO", "Email Marketing", "Klaviyo", "Zapier"],
  },
  {
    company: "Skymet",
    role: "Manager — Marketing (Digital & PR)",
    period: "Dec 2022 – Aug 2023",
    location: "Noida, India",
    type: "Full-time",
    color: "#F59E0B",
    highlights: [
      "Directed rebranding efforts to redefine brand positioning with #BeyondWeather ethos",
      "Led development of India's 1st AI-powered Weather Assistant Mobile App",
      "Implemented SEO strategies for a website with 2 million monthly visitors",
      "Coordinated with PR agencies for successful launch of yearly weather forecasts",
    ],
    tags: ["Rebranding", "AI App Launch", "SEO", "PR"],
  },
  {
    company: "Designbox",
    role: "BD & Client Servicing Manager",
    period: "Jun 2020 – Nov 2022",
    location: "Delhi, India",
    type: "Full-time",
    color: "#0EA5E9",
    highlights: [
      "Managed new and existing business accounts including Kohler, OYO Homes, DLF Cyberhub",
      "Handled client calls, meetings, presentations, and negotiations for Indian and international clients",
      "Led digital marketing for the brand and developed pitch ideas and presentations",
      "Brand portfolio: Ecollat, Techtonic, and Designbox",
    ],
    tags: ["Client Servicing", "Business Development", "B2B"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#F8FAFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">03 — Experience</span>
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#0F172A] mt-3 mb-4">
            Career Journey
          </h2>
          <p className="text-[#64748B] font-['Outfit'] text-lg max-w-2xl">
            From Delhi to Toronto — a journey of growth, learning, and delivering results across industries.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0EA5E9] via-[#0EA5E9]/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`relative pl-16 lg:pl-24 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 lg:left-6 top-6 w-5 h-5 rounded-full border-2 border-white shadow-lg flex items-center justify-center"
                  style={{ backgroundColor: exp.color }}
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="bento-card bg-white rounded-2xl border border-[#E2E8F0] p-6 lg:p-8 hover:border-[#0EA5E9]/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="tag-pill text-white text-xs"
                          style={{ backgroundColor: exp.color }}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-['Space_Grotesk'] text-[#0F172A]">
                        {exp.role}
                      </h3>
                      <div className="text-[#0EA5E9] font-semibold font-['Outfit'] text-base">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-[#64748B] font-['Outfit'] lg:text-right flex-shrink-0">
                      <span className="flex items-center gap-1.5 lg:justify-end">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 lg:justify-end">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-[#475569] text-sm font-['Outfit'] leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9] mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="tag-pill bg-[#F1F5F9] text-[#475569]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
