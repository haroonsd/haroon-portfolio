import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-nav]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.getAttribute("data-nav") || "");
          }
        });
      },
      { threshold: 0.35, rootMargin: "-80px 0px 0px 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-5 md:px-12 md:py-7 transition-colors duration-300 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-[#1e1e1e]" : ""}`}>
      <a
        href="#hero"
        onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
        className="font-['Syne'] font-extrabold text-xl text-[#e8a030] tracking-tight"
      >
        HS
      </a>
      <div className="flex items-center gap-3.5 md:gap-9">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
            className={`nav-link ${active === link.href.slice(1) ? "active" : ""}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
