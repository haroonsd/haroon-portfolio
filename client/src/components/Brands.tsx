import Reveal from "@/components/Reveal";

const brands = ["Rogers", "Chatr", "Wireless DNA", "Skymet", "Gramcover", "Tech Mahindra", "HCC Beverages", "Designbox"];

function BrandRow({ direction }: { direction: "left" | "right" }) {
  const list = direction === "left" ? brands : [...brands].reverse();
  return (
    <div className={direction === "left" ? "ticker-left" : "ticker-right"} style={{ display: "flex", width: "max-content" }}>
      {[0, 1].map((rep) => (
        <div key={rep} className="flex gap-3.5 shrink-0 mr-3.5">
          {list.map((brand) => (
            <div
              key={`${rep}-${brand}`}
              className="w-[130px] h-10 border border-[#1e1e1e] flex items-center justify-center font-['Syne_Mono'] text-[10px] text-[#6b6b6b] shrink-0 tracking-wider"
            >
              {brand}
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
