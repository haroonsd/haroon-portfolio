import Reveal from "@/components/Reveal";

const skills = [
  {
    tag: "CAMPAIGNS & CHANNELS",
    title: "Full-channel marketing ops",
    body: "Co-op advertising, retail marketing, organic social, copywriting, brand positioning",
  },
  {
    tag: "CRM & EMAIL",
    title: "The inbox is not dead",
    body: "Microsoft Dynamics 365, Klaviyo, Mailchimp, HTML email design, lead flows",
  },
  {
    tag: "AI & AUTOMATION",
    title: "If it's repetitive, it's automated",
    body: "n8n, Make.com, Zapier, Manychat, Vapi.ai, Claude, Lovable, Cursor",
  },
  {
    tag: "BUILDING & VIBE CODING",
    title: "From idea to deployed",
    body: "React, Supabase, Netlify, WordPress, Wix, Shopify, landing pages, internal tools",
  },
  {
    tag: "ANALYTICS & TRACKING",
    title: "Numbers tell the story",
    body: "Google Analytics, Search Console, Semrush, Meta Business Suite, conversion tracking",
  },
  {
    tag: "EVENTS & ON-GROUND",
    title: "The booth is the brand",
    body: "Trade shows, activations, booth design, floor planning, swag, vendor coordination",
  },
];

export default function Skills() {
  return (
    <section id="skills" data-nav="skills" className="py-24 md:py-[120px] border-b border-[#1e1e1e]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-18">
          <Reveal label className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8a030] mb-6">
            WHAT I BRING
          </Reveal>
          <Reveal as="h2" className="font-['Syne'] font-bold text-[36px] md:text-[52px] tracking-[-1.5px] text-[#f0ede8] leading-[1.05]">
            A marketer who <span className="text-[#e8a030]">builds</span>. A builder who <span className="text-[#e8a030]">markets</span>.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
          {skills.map((s, i) => (
            <Reveal key={s.title} className="skill-card p-8" delay={i * 60}>
              <div className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8a030] mb-4">{s.tag}</div>
              <div className="font-['Syne'] font-bold text-xl text-[#f0ede8] mb-3.5">{s.title}</div>
              <div className="font-['Inter'] text-sm text-[#6b6b6b] leading-relaxed">{s.body}</div>
              <div className="w-10 h-px bg-[#e8a030] mt-7" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
