/*
 * DESIGN: Bold Kinetic Modernism
 * Footer: Minimal dark footer with copyright and quick links
 */

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0F1E] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center text-white font-bold text-xs font-['Space_Grotesk']">
              HS
            </div>
            <span className="text-white/60 font-['Space_Grotesk'] text-sm font-medium">
              Haroon Siddiqui
            </span>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6">
            {[
              { label: "About", href: "#about" },
              { label: "Work", href: "#work" },
              { label: "Skills", href: "#skills" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-white/40 hover:text-white/80 text-sm font-['Outfit'] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-white/30 text-xs font-['Outfit']">
            © {new Date().getFullYear()} Haroon Siddiqui. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
