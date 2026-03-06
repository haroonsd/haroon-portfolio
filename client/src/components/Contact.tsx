/*
 * DESIGN: Bold Kinetic Modernism
 * Contact: Dark CTA section with contact card and social links
 * Big headline + contact details + social icons
 */

import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Instagram, MessageCircle, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Contact() {
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

  const contactMethods = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "hsiddiqui.ind@gmail.com",
      href: "mailto:hsiddiqui.ind@gmail.com",
      color: "#0EA5E9",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+1 437 440 8586",
      href: "tel:+14374408586",
      color: "#10B981",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "haroon-siddiqui786",
      href: "https://www.linkedin.com/in/haroon-siddiqui786",
      color: "#0A66C2",
    },
    {
      icon: <Instagram size={20} />,
      label: "Instagram",
      value: "@haroon_siddiqui",
      href: "https://instagram.com",
      color: "#E1306C",
    },
    {
      icon: <MessageCircle size={20} />,
      label: "WhatsApp",
      value: "+1 437 440 8586",
      href: "https://wa.me/14374408586",
      color: "#25D366",
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">07 — Contact</span>
        </div>

        {/* Main CTA block */}
        <div
          className={`mt-8 rounded-3xl overflow-hidden transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            background: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F172A 100%)",
          }}
        >
          <div className="relative p-10 lg:p-16">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0EA5E9]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF6B6B]/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Big text */}
              <div>
                <h2 className="text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-white leading-tight mb-6">
                  Let's build
                  <br />
                  something{" "}
                  <span className="gradient-text">great</span>
                  <br />
                  together.
                </h2>
                <p className="text-white/60 font-['Outfit'] text-lg leading-relaxed mb-8 max-w-md">
                  Whether you need a full marketing strategy, content creation, or just want to chat about
                  growing your brand — I'm here for it.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:hsiddiqui.ind@gmail.com"
                    className="btn-teal px-8 py-4 rounded-full text-base font-semibold font-['Outfit'] text-white inline-flex items-center gap-2"
                  >
                    Send Me an Email
                    <ArrowUpRight size={18} />
                  </a>
                  <a
                    href="https://wa.me/14374408586"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full text-base font-semibold font-['Outfit'] text-white border border-white/20 hover:border-[#25D366]/60 hover:bg-[#25D366]/10 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    WhatsApp Me
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>

              {/* Right: Contact methods */}
              <div className="space-y-3">
                {contactMethods.map((method, i) => (
                  <a
                    key={i}
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-2xl glass-card hover:border-white/20 transition-all duration-300 group"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: method.color + "33", color: method.color }}
                    >
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white/40 text-xs font-['Outfit'] uppercase tracking-wider">{method.label}</div>
                      <div className="text-white font-medium font-['Outfit'] text-sm truncate">{method.value}</div>
                    </div>
                    <ExternalLink size={14} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
