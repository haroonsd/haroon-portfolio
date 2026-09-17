import Reveal from "@/components/Reveal";

const PROFILE_IMG = "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782945695/WhatsApp_Image_2026-07-01_at_6.40.18_PM_qwcnse.jpg";

const aboutStats = [
  { value: "India → Canada", label: "Journey" },
  { value: "5 Years", label: "Experience" },
  { value: "Builder + Marketer", label: "What I Am" },
];

export default function About() {
  return (
    <section id="about" data-nav="about" className="py-24 md:py-[120px] border-b border-[#1e1e1e]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <Reveal className="w-full md:flex-[0_0_36%] min-h-[320px] md:min-h-[480px] max-h-[560px] bg-[#111111] border border-[#1e1e1e] overflow-hidden">
            <img src={PROFILE_IMG} alt="Haroon Siddiqui" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
          </Reveal>

          <div className="flex-1 pt-2 w-full">
            <Reveal label className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8a030] mb-6">
              THE PERSON BEHIND IT
            </Reveal>

            <Reveal as="h2" className="font-['Syne'] font-bold text-[26px] md:text-[38px] tracking-[-1px] text-[#f0ede8] leading-[1.15] max-w-[480px] mb-10">
              I didn't choose marketing and tech. They just kept following me.
            </Reveal>

            <Reveal>
              <p className="font-['Inter'] text-base text-[#f0ede8] leading-[1.8] mb-6">
                I'm Haroon — a marketing operations professional who ended up building AI tools because nobody else was going to. Over the past 5 years across agency life in India and retail marketing in Toronto, I've learned that the best campaigns run on great systems, and the best systems are built by people who understand the campaign.
              </p>
              <p className="font-['Inter'] text-base text-[#f0ede8] leading-[1.8] mb-6">
                At Wireless DNA, I run marketing for Rogers and Chatr across 50+ retail stores, 30 sub-dealer partners, and everything in between. I've stood in event venues at 7am setting up booths and also stayed up building internal tools at midnight. Both feel the same to me — a problem worth fixing.
              </p>
              <p className="font-['Inter'] text-base text-[#f0ede8] leading-[1.8] mb-12">
                I'm at my best inside a startup or a fast-moving team where the job description is a rough starting point, not a ceiling.
              </p>
            </Reveal>

            <Reveal className="flex items-center border-t border-[#1e1e1e] pt-10" delay={100}>
              {aboutStats.map((s, i) => (
                <div key={s.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-9 bg-[#e8a030]/35 mx-9 shrink-0" />}
                  <div>
                    <div className="font-['Syne'] font-bold text-xl text-[#e8a030] mb-1.5">{s.value}</div>
                    <div className="font-['Syne_Mono'] text-[11px] uppercase tracking-[2px] text-[#6b6b6b]">{s.label}</div>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
