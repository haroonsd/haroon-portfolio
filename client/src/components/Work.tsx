import Reveal from "@/components/Reveal";
import ProjectSlider from "@/components/ProjectSlider";

const projects = [
  {
    tag: "EVENT MARKETING · WIRELESS DNA",
    title: "Events don't run themselves. I do.",
    body: "Events specialist running Rogers and Chatr's retail presence at 3+ activations every quarter — and up to 3 booth setups in a single day. From the National Home Show (200+ activations) to the T.O. Food & Drink Fest and the Christmas Show, I own everything: floor plan placement, booth design, swag sourcing, contest mechanics, on-site execution, and post-event reporting. The brand experience starts the moment someone walks by our booth.",
    chips: ["National Home Show", "200+ Activations", "T.O. Food & Drink Fest", "Christmas Show"],
    images: [
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782946749/1769991755504_dbzluz.jpg",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782946749/1769991755935_xu8zxk.jpg",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782947473/WhatsApp_Image_2026-07-01_at_7.10.41_PM_w9nbez.jpg",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782947471/asdasdas_pnqd73.jpg",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782947471/WhatsApp_Image_2026-07-01_at_7.07.58_PM_nye5va.jpg",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782947474/WhatsApp_Image_2026-07-01_sadasdas7.07.58_PM_c8tjsa.jpg",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782947470/asdasd_rhp29y.jpg",
    ],
  },
  {
    tag: "AI-BUILT TOOL · WIRELESS DNA",
    title: "Built from scratch. Used every day.",
    body: "Visibility is a problem in any team. Glance fixes it for the Wireless DNA head office — giving managers a real-time view of everything their team is working on. Assign tasks, shift priorities, customize workflows, and track output without a single status meeting. We're actively shipping new modules: an Event ROI tracker and ROI calculators for Meta ads, SMS blasts, and e-blasts. Built with React + Supabase via AI-assisted development. Actually in daily use.",
    chips: ["React", "Supabase", "Vibe Coding", "Internal Tool"],
    images: [
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782948911/Screenshot_1_y2kt80.png",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782948907/Screenshot_2_wapco5.png",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782948908/Screenshot_3_jxja5u.png",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782948909/Screenshot_4_btorvt.png",
    ],
  },
  {
    tag: "PLATFORM BUILD · WIRELESS DNA",
    title: "30 sub-dealers. One place to manage everything.",
    body: "Sub-dealers needed a central hub — a place to grab assets, track co-op claims, enter contests, and not bother head office every time they needed a logo. The Partner Portal handles all of it. Built from scratch, used daily across the network.",
    chips: ["Web App", "Dealer Network", "Co-op Compliance"],
    images: [
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782949689/Screenshot_5_wqozkp.png",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782949691/Screenshot_6_fiqbjc.png",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782949692/Screenshot_7_tydt9p.png",
      "https://res.cloudinary.com/dchbuwhfz/image/upload/v1782949694/Screenshot_8_h3a3sk.png",
    ],
  },
];

const miniProjects = [
  {
    tag: "CRM & EMAIL · CORPORATE",
    title: "Email Campaigns & CRM",
    body: "300 corporate accounts managed across Dynamics 365, Klaviyo, and Mailchimp. Automated flows, segmented campaigns, HTML templates built in-house.",
  },
  {
    tag: "ORGANIC SOCIAL · ZERO BUDGET",
    title: "Organic Social Growth",
    body: "0 to 30K reach with no ad spend. Self-shot content, consistent scheduling, and copy that didn't sound like it was written by a committee.",
  },
];

const socialPlaceholders = [
  { label: "Event Recap — National Home Show", tag: "EVENTS" },
  { label: "Behind the Booth", tag: "BEHIND THE BRAND" },
  { label: "A Day in Marketing Ops", tag: "DAY IN THE LIFE" },
  { label: "Retail Marketing Tips", tag: "ORGANIC CONTENT" },
];

export default function Work() {
  return (
    <section id="work" data-nav="work" className="py-24 md:py-[120px] border-b border-[#1e1e1e]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-20">
          <Reveal label className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8a030] mb-6">
            SELECTED WORK
          </Reveal>
          <Reveal as="h2" className="font-['Syne'] font-bold text-[36px] md:text-[52px] tracking-[-1.5px] text-[#f0ede8] leading-[1.05] mb-6">
            Not just campaigns. <span className="text-[#e8a030]">Systems</span> that run.
          </Reveal>
          <Reveal as="p" delay={100} className="font-['Inter'] text-base text-[#6b6b6b] leading-[1.7] max-w-[560px]">
            Every project here started with a problem worth solving — whether that was a booth that needed to feel like a brand, a team that needed visibility, or a retailer network that needed a single source of truth.
          </Reveal>
        </div>

        {projects.map((p, i) => (
          <Reveal key={p.title} className="project-card mb-0.5" delay={i * 80}>
            <div className="flex flex-col md:flex-row" style={{ minHeight: "420px" }}>
              <div className="w-full md:w-[52%] p-9 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8a030] mb-5">{p.tag}</div>
                  <h3 className="font-['Syne'] font-bold text-[28px] md:text-[34px] tracking-[-1px] text-[#f0ede8] leading-[1.1] mb-5">{p.title}</h3>
                  <p className="font-['Inter'] text-base text-[#6b6b6b] leading-[1.7] mb-7">{p.body}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.chips.map((chip) => (
                    <span key={chip} className="font-['Syne_Mono'] text-[11px] tracking-[1.5px] uppercase text-[#6b6b6b] border border-[#2a2a2a] px-3 py-1.5">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[48%] min-h-[280px] border-t md:border-t-0 md:border-l border-[#1e1e1e] overflow-hidden">
                <ProjectSlider images={p.images} />
              </div>
            </div>
          </Reveal>
        ))}

        {/* Mini projects */}
        <div className="border-t border-[#1e1e1e] mt-20 pt-14">
          <Reveal label className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#6b6b6b] mb-8">
            MORE WORK
          </Reveal>
          <div className="flex flex-col md:flex-row gap-0.5">
            {miniProjects.map((m, i) => (
              <Reveal key={m.title} className="mini-card flex-1 p-9" delay={i * 80}>
                <div className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8a030] mb-4">{m.tag}</div>
                <h4 className="font-['Syne'] font-bold text-[22px] text-[#f0ede8] mb-3.5 tracking-[-0.5px]">{m.title}</h4>
                <p className="font-['Inter'] text-[15px] text-[#6b6b6b] leading-[1.65]">{m.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Social media videos */}
        <div className="border-t border-[#1e1e1e] mt-14 pt-14">
          <Reveal label className="font-['Syne_Mono'] text-[11px] tracking-[2px] uppercase text-[#6b6b6b] mb-3">
            SOCIAL CONTENT
          </Reveal>
          <Reveal as="h3" className="font-['Syne'] font-bold text-[26px] md:text-[34px] tracking-[-1px] text-[#f0ede8] leading-[1.1] mb-10">
            Content that <span className="text-[#e8a030]">moves</span>.
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialPlaceholders.map((v, i) => (
              <Reveal key={v.label} delay={i * 60} className="group relative border border-[#1e1e1e] bg-[#0d0d0d] overflow-hidden" style={{ aspectRatio: "9/16" }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4">
                  <div className="w-12 h-12 border border-[#e8a030]/40 flex items-center justify-center group-hover:border-[#e8a030] transition-colors duration-300">
                    <span className="text-[#e8a030] text-xl ml-0.5">▶</span>
                  </div>
                  <div className="text-center">
                    <div className="font-['Syne_Mono'] text-[9px] tracking-[2px] uppercase text-[#e8a030] mb-1.5">{v.tag}</div>
                    <div className="font-['Inter'] text-[11px] text-[#6b6b6b] leading-[1.5]">{v.label}</div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="font-['Syne_Mono'] text-[9px] text-[#2a2a2a] tracking-[1px] uppercase">Video coming soon</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
