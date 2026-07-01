import Reveal from "@/components/Reveal";

const brands = [
  { name: "Rogers", logo: "https://logo.clearbit.com/rogers.com" },
  { name: "Chatr", logo: "https://logo.clearbit.com/chatrwireless.com" },
  { name: "Wireless DNA", logo: "https://logo.clearbit.com/wirelessdna.ca" },
  { name: "Skymet", logo: "https://logo.clearbit.com/skymetweather.com" },
  { name: "Gramcover", logo: "https://logo.clearbit.com/gramcover.com" },
  { name: "Tech Mahindra", logo: "https://logo.clearbit.com/techmahindra.com" },
  { name: "HCC Beverages", logo: "https://logo.clearbit.com/hccbeverages.com" },
  { name: "Designbox", logo: "https://logo.clearbit.com/designbox.ca" },
];

function BrandRow({ direction }: { direction: "left" | "right" }) {
  const list = direction === "left" ? brands : [...brands].reverse();
  return (
    <div className={direction === "left" ? "ticker-left" : "ticker-right"} style={{ display: "flex", width: "max-content" }}>
      {[0, 1].map((rep) => (
        <div key={rep} className="flex gap-3.5 shrink-0 mr-3.5">
          {list.map((brand) => (
            <div
              key={`${rep}-${brand.name}`}
              className="w-[150px] h-[68px] border border-[#1e1e1e] bg-[#0d0d0d] flex flex-col items-center justify-center gap-1.5 px-3 shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-7 w-auto max-w-[110px] object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <span className="font-['Syne_Mono'] text-[9px] text-[#6b6b6b] tracking-wider whitespace-nowrap">{brand.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Brands() {
  return (
    <section id="brands" className="py-18 border-b border-[#1e1e1e]">
      <Reveal label as="div" className="text-center font-['Syne_Mono'] text-[11px] tracking-[3px] text-[#6b6b6b] uppercase mb-12">
        BRANDS I'VE WORKED WITH
      </Reveal>
      <div className="ticker-outer overflow-hidden">
        <div className="mb-3.5">
          <BrandRow direction="left" />
        </div>
        <div>
          <BrandRow direction="right" />
        </div>
      </div>
    </section>
  );
}
