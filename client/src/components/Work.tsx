/*
 * DESIGN: Bold Kinetic Modernism
 * Work: Light section with bento-grid work cards
 * Filterable by category with smooth transitions
 * Uses Unsplash images for visual richness
 */

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Play, Image, FileText, Megaphone, Smartphone, Mail } from "lucide-react";

const workItems = [
  {
    id: 1,
    title: "Rogers Spring Event — iPhone 16 Campaign",
    client: "Rogers / Wireless DNA",
    category: "Social Media",
    type: "Graphic Design",
    description: "End-to-end social media campaign for Rogers Spring Event featuring iPhone 16 at $19.50/mo. Copywriting, design, and posting across all channels.",
    tags: ["Rogers", "Campaign", "Graphic Design"],
    color: "#E8001D",
    bgColor: "#FFF5F5",
    icon: <Megaphone size={20} />,
    size: "large",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    id: 2,
    title: "Happy Holi — Rogers Campaign",
    client: "Rogers",
    category: "Social Media",
    type: "Copywriting",
    description: "Festive campaign celebrating Holi with Rogers brand messaging. Culturally resonant copywriting and visual design.",
    tags: ["Rogers", "Festive", "Copywriting"],
    color: "#FF6B6B",
    bgColor: "#FFF5F5",
    icon: <Image size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 3,
    title: "Rogers Chinese New Year 2025 — Galaxy S25",
    client: "Rogers",
    category: "Social Media",
    type: "Graphic Design",
    description: "Year of the Snake campaign featuring Samsung Galaxy S25 pre-order. Bilingual cultural campaign design.",
    tags: ["Rogers", "Chinese NY", "Samsung"],
    color: "#E8001D",
    bgColor: "#FFF5F5",
    icon: <Smartphone size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 4,
    title: "Tumbleweed Lounge — Instagram Reels",
    client: "Tumbleweed Lounge",
    category: "Video Content",
    type: "Reels Production",
    description: "Full-service Instagram Reels production: ideation, filming, editing, and posting for a Kamloops bar/lounge. Drove significant engagement growth.",
    tags: ["Reels", "Video", "Bar & Lounge"],
    color: "#8B4513",
    bgColor: "#FFF8F0",
    icon: <Play size={20} />,
    size: "large",
    image: "https://images.unsplash.com/photo-1574096079513-d8259312b785?w=600&q=80",
  },
  {
    id: 5,
    title: "Nova Filsep — Water Purification Campaigns",
    client: "Nova Filsep",
    category: "Social Media",
    type: "Content Strategy",
    description: "Educational social media campaigns highlighting water contamination statistics and Nova Filsep solutions. Built brand awareness from scratch.",
    tags: ["Water Tech", "Educational", "Content"],
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    icon: <FileText size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 6,
    title: "Tumbleweed — Happy Canada Day Contest",
    client: "Tumbleweed Lounge",
    category: "Social Media",
    type: "Campaign",
    description: "Contest alert campaign for Canada Day at Tumbleweed Lounge. Post a selfie, tag on story, win 1+1 on beers. High engagement rate.",
    tags: ["Canada Day", "Contest", "Engagement"],
    color: "#FF0000",
    bgColor: "#FFF5F5",
    icon: <Megaphone size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 7,
    title: "Bhardwaj Law — News Content Strategy",
    client: "Bhardwaj Law",
    category: "Content",
    type: "Copywriting",
    description: "Latest news content strategy for a 30-year-old law firm. Engaging legal news posts to build thought leadership and community trust.",
    tags: ["Legal", "News", "Copywriting"],
    color: "#1A1A2E",
    bgColor: "#F8F8FF",
    icon: <FileText size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 8,
    title: "Tumbleweed — Predict & Win / Matchday",
    client: "Tumbleweed Lounge",
    category: "Social Media",
    type: "Event Marketing",
    description: "Sports event marketing campaigns for NHL Oilers vs Panthers matchday with live screening promotions at 405 Victoria Street.",
    tags: ["Sports", "NHL", "Event"],
    color: "#FF6B00",
    bgColor: "#FFF8F0",
    icon: <Megaphone size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 9,
    title: "Skymet — AI Weather App Launch",
    client: "Skymet",
    category: "Campaign",
    type: "PR & Marketing",
    description: "Led the launch of India's first AI-powered Weather Assistant Mobile App. Cross-functional coordination, PR outreach, and media coverage.",
    tags: ["AI", "App Launch", "PR"],
    color: "#0EA5E9",
    bgColor: "#F0F9FF",
    icon: <Megaphone size={20} />,
    size: "large",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    id: 10,
    title: "Crown Stone — Email Marketing Automation",
    client: "Crown Stone Inc.",
    category: "Email Marketing",
    type: "Automation",
    description: "End-to-end email marketing campaigns using Klaviyo with Zapier automation for customer engagement and conversion rate optimization.",
    tags: ["Klaviyo", "Zapier", "Email"],
    color: "#10B981",
    bgColor: "#F0FDF4",
    icon: <Mail size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 11,
    title: "Rogers New Year New Gear Campaign",
    client: "Rogers / Wireless DNA",
    category: "Social Media",
    type: "Graphic Design",
    description: "New Year campaign featuring iPhone 15 Pro deals. Multi-format social media assets for Rogers Authorized Dealer with strong conversion focus.",
    tags: ["Rogers", "New Year", "iPhone"],
    color: "#E8001D",
    bgColor: "#FFF5F5",
    icon: <Smartphone size={20} />,
    size: "medium",
    image: null,
  },
  {
    id: 12,
    title: "Oktoberfest Campaigns",
    client: "Tumbleweed Lounge",
    category: "Social Media",
    type: "Event Marketing",
    description: "Oktoberfest event promotion with limited-time offers and festive visual design for bar/lounge audience. Drove foot traffic and engagement.",
    tags: ["Oktoberfest", "Event", "Bar"],
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    icon: <Megaphone size={20} />,
    size: "medium",
    image: null,
  },
];

const categories = ["All", "Social Media", "Video Content", "Content", "Campaign", "Email Marketing"];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeFilter === "All"
    ? workItems
    : workItems.filter((w) => w.category === activeFilter);

  return (
    <section id="work" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">05 — Work</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-3">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-[#0F172A] mb-4">
                Selected Work
              </h2>
              <p className="text-[#64748B] font-['Outfit'] text-lg max-w-2xl">
                Copywriting, Graphic Design, Social Media Management, Video Content, and Campaign Strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Filter tabs */}
        <div
          className={`mt-8 flex flex-wrap gap-2 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium font-['Outfit'] transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#0F172A] text-white shadow-md"
                  : "bg-[#F1F5F9] text-[#64748B] hover:bg-[#E2E8F0]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div
          className={`mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              className={`bento-card rounded-2xl border border-[#E2E8F0] overflow-hidden group cursor-pointer hover:border-[#0EA5E9]/40 hover:shadow-xl transition-all duration-300 ${
                item.size === "large" ? "md:col-span-2" : ""
              }`}
              style={{ backgroundColor: item.bgColor }}
            >
              {/* Image if available */}
              {item.image && (
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className="absolute top-3 right-3 tag-pill text-white text-xs"
                    style={{ backgroundColor: item.color + "cc" }}
                  >
                    {item.type}
                  </div>
                </div>
              )}

              {/* Card content */}
              <div className="p-6">
                {!item.image && (
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.icon}
                    </div>
                    <span
                      className="tag-pill text-white text-xs"
                      style={{ backgroundColor: item.color + "cc" }}
                    >
                      {item.type}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-bold font-['Space_Grotesk'] text-[#0F172A] leading-tight mb-1">
                  {item.title}
                </h3>
                <div className="text-sm font-medium font-['Outfit'] mb-3" style={{ color: item.color }}>
                  {item.client}
                </div>

                <p className="text-[#475569] text-sm font-['Outfit'] leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, j) => (
                    <span key={j} className="tag-pill bg-white/80 text-[#475569] border border-[#E2E8F0]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
