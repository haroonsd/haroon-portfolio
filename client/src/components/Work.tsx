import Reveal from "@/components/Reveal";

const projects = [
  {
    tag: "EVENT MARKETING · WIRELESS DNA",
    title: "200 activations. Three shows. One team.",
    body: "Running the booth is the easy part. The hard part is making sure 200 individual conversations at the National Home Show, the T.O. Food & Drink Fest, and the Christmas Show all feel like they came from the same brand. Floor plan placement, booth design, swag, contests, on-site execution — all of it.",
    chips: ["National Home Show", "T.O. Food & Drink Fest", "Christmas Show"],
    visual: "Event Photos — Coming Soon",
  },
  {
    tag: "AI-BUILT TOOL · WIRELESS DNA",
    title: "Built from scratch. Used every day.",
    body: "When your team is spread across 50+ locations and nobody knows what anyone else is working on, you build something. Glance is a React and Supabase-powered task management app that does exactly what the name says — gives everyone a glance at what's happening across the business. Built using AI-assisted development. Actually in use.",
    chips: ["React", "Supabase", "Vibe Coding", "Internal Tool"],
    visual: "Glance App Screenshot — Coming Soon",
  },
  {
    tag: "PLATFORM BUILD · WIRELESS DNA",
    title: "30 stores. One place to manage everything.",
    body: "Sub-dealers needed a central hub — a place to grab assets, track co-op claims, enter contests, and not bother head office every time they needed a logo. The Partner Portal handles all of it. Built from scratch, used daily across the network.",
    chips: ["Web App", "Dealer Network", "Co-op Compliance"],
    visual: "Partner Portal Screenshot — Coming Soon",
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
            Every project here started with a problem worth solving — whether that was a booth that needed to feel like a brand, a team that needed to see what everyone was building, or a retailer that needed leads on autopilot.
          </Reveal>
        </div>

        {projects.map((p, i) => (
          <Reveal key={p.title} className="project-card mb-0.5" delay={i * 80}>
            <div className="flex flex-col md:flex-row min-h-[400px]">
              <div className="w-full md:w-[55%] p-9 md:p-12 flex flex-col justify-between">
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
              <div className="w-full md:w-[45%] min-h-[200px] bg-[#0d0d0d] border-t md:border-t-0 md:border-l border-[#1e1e1e] flex items-center justify-center">
                <span className="font-['Syne_Mono'] text-[11px] text-[#6b6b6b] tracking-[2px] text-center p-6 leading-[2.4]">
                  [ {p.visual} ]
                </span>
              </div>
            </div>
          </Reveal>
        ))}

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
      </div>
    </section>
  );
}
