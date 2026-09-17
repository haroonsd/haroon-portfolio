import { useState } from "react";
import Reveal from "@/components/Reveal";

const brands = [
  { name: "Rogers", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951210/Rogers_vjbiuo.png" },
  { name: "Fido", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951205/fido_w0qvsk.png" },
  { name: "Chatr", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951202/chatr_nk4hfx.png" },
  { name: "Bhardwaj Law", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951200/Bhardwaj_Law_mhclz2.png" },
  { name: "Crown Stone", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951204/Crown_Stone_ktvqpq.png" },
  { name: "Coca-Cola", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951209/HCCB_awk1ay.png" },
  { name: "Tech Mahindra", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951214/Tech_Mahindra_fhrppm.png" },
  { name: "Skymet", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951212/Skymet_nlzqnt.png" },
  { name: "Gramcover", logo: "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782951207/Gramcover_qwhjwy.png" },
];

function BrandCard({ brand }: { brand: { name: string; logo: string } }) {
  const [err, setErr] = useState(false);

  return (
    <div className="w-[160px] h-[72px] border border-[#1e1e1e] bg-[#0d0d0d] flex items-center justify-center px-5 shrink-0">
      {!err ? (
        <img
          src={brand.logo}
          alt={brand.name}
          className="max-h-9 w-auto max-w-[130px] object-contain"
          onError={() => setErr(true)}
        />
      ) : (
        <span className="font-['Syne'] font-bold text-[13px] text-[#f0ede8] text-center leading-tight">{brand.name}</span>
      )}
    </div>
  );
}

function BrandRow({ direction }: { direction: "left" | "right" }) {
  const list = direction === "left" ? brands : [...brands].reverse();
  return (
    <div className={direction === "left" ? "ticker-left" : "ticker-right"} style={{ display: "flex", width: "max-content" }}>
      {[0, 1].map((rep) => (
        <div key={rep} className="flex gap-3 shrink-0 mr-3">
          {list.map((brand) => (
            <BrandCard key={`${rep}-${brand.name}`} brand={brand} />
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
        <div className="mb-3">
          <BrandRow direction="left" />
        </div>
        <div>
          <BrandRow direction="right" />
        </div>
      </div>
    </section>
  );
}
