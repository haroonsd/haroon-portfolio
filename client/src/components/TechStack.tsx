import Reveal from "@/components/Reveal";

const categories = [
  {
    label: "AUTOMATION & AI",
    tools: [
      { name: "n8n", logo: "https://cdn.simpleicons.org/n8n/e8490f" },
      { name: "Make", logo: "https://cdn.simpleicons.org/make/6d00cc" },
      { name: "Zapier", logo: "https://cdn.simpleicons.org/zapier/ff4a00" },
      { name: "Manychat", logo: "https://logo.clearbit.com/manychat.com" },
      { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic/17140e" },
      { name: "Vapi", logo: "https://logo.clearbit.com/vapi.ai" },
    ],
  },
  {
    label: "BUILD & DEPLOY",
    tools: [
      { name: "React", logo: "https://cdn.simpleicons.org/react/61dafb" },
      { name: "Supabase", logo: "https://cdn.simpleicons.org/supabase/3ecf8e" },
      { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify/00c7b7" },
      { name: "WordPress", logo: "https://cdn.simpleicons.org/wordpress/21759b" },
      { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96bf48" },
      { name: "Wix", logo: "https://cdn.simpleicons.org/wix/17140e" },
    ],
  },
  {
    label: "CRM & EMAIL",
    tools: [
      { name: "Mailchimp", logo: "https://cdn.simpleicons.org/mailchimp/ffe01b" },
      { name: "Klaviyo", logo: "https://cdn.simpleicons.org/klaviyo/17140e" },
      { name: "Dynamics 365", logo: "https://cdn.simpleicons.org/dynamics365/0078d4" },
      { name: "HubSpot", logo: "https://cdn.simpleicons.org/hubspot/ff7a59" },
    ],
  },
  {
    label: "ANALYTICS & ADS",
    tools: [
      { name: "GA4", logo: "https://cdn.simpleicons.org/googleanalytics/e37400" },
      { name: "Semrush", logo: "https://cdn.simpleicons.org/semrush/ff642d" },
      { name: "Meta Ads", logo: "https://cdn.simpleicons.org/meta/0082fb" },
      { name: "Search Console", logo: "https://cdn.simpleicons.org/googlesearchconsole/458cf5" },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="stack" data-nav="stack" className="py-24 md:py-[120px] border-b border-[#d0cab8]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="mb-18">
          <Reveal label className="font-['IBM_Plex_Mono'] text-[10px] tracking-[2.5px] uppercase text-[#8a8278] mb-2">
            // 05
          </Reveal>
          <Reveal label className="font-['IBM_Plex_Mono'] text-[11px] tracking-[2px] uppercase text-[#e8490f] mb-6">
            TOOLS & TECH
          </Reveal>
          <Reveal as="h2" className="font-['Anton'] text-[36px] md:text-[52px] tracking-tight text-[#17140e] leading-[1.05]">
            The stack I <span className="text-[#e8490f]">build</span> with.
          </Reveal>
        </div>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <div key={cat.label}>
              <Reveal label className="font-['IBM_Plex_Mono'] text-[10px] tracking-[2.5px] uppercase text-[#8a8278] mb-6">
                {cat.label}
              </Reveal>
              <div className="flex flex-wrap gap-3">
                {cat.tools.map((tool, ti) => (
                  <Reveal
                    key={tool.name}
                    className="flex items-center gap-3 border border-[#d0cab8] bg-[#ede9e0] px-4 py-3 min-w-[130px]"
                    delay={ci * 40 + ti * 30}
                  >
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-5 h-5 object-contain shrink-0"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0"; }}
                    />
                    <span className="font-['IBM_Plex_Mono'] text-[11px] text-[#17140e] tracking-wide whitespace-nowrap">{tool.name}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
