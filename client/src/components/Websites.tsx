import Reveal from "@/components/Reveal";

const sites = [
  {
    label: "ROGERS · WIRELESS DNA",
    name: "connectwithrogers.ca",
    url: "https://connectwithrogers.ca",
    screenshot: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1783903848/cwr_fulvxa.png",
  },
  {
    label: "CHATR · WIRELESS DNA",
    name: "connectwithchatr.ca",
    url: "https://connectwithchatr.ca",
    screenshot: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1783903848/cwc_stdwws.png",
  },
  {
    label: "SPORTS ACADEMY",
    name: "thefootballschool.ca",
    url: "https://thefootballschool.ca",
    screenshot: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1783903848/TFS_ss_r8qa5d.png",
  },
];

export default function Websites() {
  return (
    <section id="websites" data-nav="websites" className="py-24 md:py-[120px] border-b border-[#d0cab8]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <Reveal label className="font-['IBM_Plex_Mono'] text-[10px] tracking-[2.5px] uppercase text-[#8a8278] mb-2">
            // 02
          </Reveal>
          <Reveal label className="font-['IBM_Plex_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8490f] mb-6">
            BUILDS & LAUNCHES
          </Reveal>
          <Reveal as="h2" className="font-['Anton'] text-[36px] md:text-[52px] tracking-tight text-[#17140e] leading-[1.05] mb-4">
            Sites I <span className="text-[#e8490f]">shipped</span>.
          </Reveal>
          <Reveal as="p" delay={80} className="font-['Inter'] text-base text-[#8a8278] leading-[1.7] max-w-[500px]">
            Client websites and landing pages built from scratch — using React, Lovable, and AI-assisted development.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {sites.map((site, i) => (
            <Reveal key={site.name} delay={i * 80}>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#d0cab8] bg-[#ede9e0] overflow-hidden hover:border-[#e8490f]/50 transition-colors duration-300"
              >
                {/* Screenshot */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
                  <img
                    src={site.screenshot}
                    alt={site.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#17140e]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[2px] border border-[#e8490f] text-[#e8490f] px-5 py-2.5 bg-[#f4f1ea]">
                      Visit Website ↗
                    </span>
                  </div>
                </div>

                {/* Info bar */}
                <div className="px-5 py-4 border-t border-[#d0cab8] flex items-center justify-between">
                  <div>
                    <div className="font-['IBM_Plex_Mono'] text-[9px] uppercase tracking-[2px] text-[#8a8278] mb-1">{site.label}</div>
                    <div className="font-['Inter'] text-[13px] text-[#17140e]">{site.name}</div>
                  </div>
                  <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[1.5px] text-[#e8490f] group-hover:opacity-70 transition-opacity shrink-0 ml-4">
                    ↗
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
