import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setSubmitting(true);
    console.log("Portfolio contact form submission:", {
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    });
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message sent — I'll get back to you soon.");
      e.currentTarget.reset();
    }, 600);
  };

  return (
    <section id="contact" data-nav="contact" className="py-24 md:py-[120px] border-t border-[#e8a030]">
      <div className="container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-18">
          <Reveal as="h2" className="font-['Syne'] font-bold text-[36px] md:text-[52px] tracking-[-1.5px] text-[#f0ede8] mb-6 leading-[1.05]">
            Let's make something worth talking about.
          </Reveal>
          <Reveal as="p" className="font-['Inter'] text-lg text-[#6b6b6b] leading-[1.7] max-w-[500px] mx-auto mb-10" delay={80}>
            Whether you have a role in mind, a project that needs someone who gets both strategy and execution, or just want to see if we think the same way — the conversation costs nothing.
          </Reveal>

          <Reveal className="flex justify-center items-center gap-3 flex-wrap" delay={150}>
            <a href="tel:+14374408586" className="font-['Inter'] text-base text-[#f0ede8] hero-link">+1 (437) 440-8586</a>
            <span className="text-[#e8a030]">·</span>
            <a href="mailto:hsiddiqui.ind@gmail.com" className="font-['Inter'] text-base text-[#f0ede8] hero-link">hsiddiqui.ind@gmail.com</a>
            <span className="text-[#e8a030]">·</span>
            <a href="https://linkedin.com/in/haroon-siddiqui786" target="_blank" rel="noopener noreferrer" className="font-['Inter'] text-base text-[#f0ede8] hero-link">linkedin.com/in/haroon-siddiqui786</a>
          </Reveal>
        </div>

        <Reveal as="form" onSubmit={handleSubmit} className="max-w-[600px] mx-auto" delay={100}>
          <div className="mb-7">
            <label className="block font-['Syne_Mono'] text-[11px] uppercase tracking-[2px] text-[#6b6b6b] mb-2.5">Your Name</label>
            <input type="text" name="name" className="form-input" required />
          </div>
          <div className="mb-7">
            <label className="block font-['Syne_Mono'] text-[11px] uppercase tracking-[2px] text-[#6b6b6b] mb-2.5">Your Email</label>
            <input type="email" name="email" className="form-input" required />
          </div>
          <div className="mb-10">
            <label className="block font-['Syne_Mono'] text-[11px] uppercase tracking-[2px] text-[#6b6b6b] mb-2.5">What's On Your Mind?</label>
            <textarea name="message" rows={5} className="form-input" required />
          </div>
          <button type="submit" className="submit-btn" disabled={submitting}>
            {submitting ? "Sending…" : "Send it →"}
          </button>
        </Reveal>

        <div className="text-center mt-24 pt-10 border-t border-[#1e1e1e]">
          <span className="font-['Syne_Mono'] text-[11px] text-[#6b6b6b] tracking-[2px] uppercase">
            HAROON SIDDIQUI · TORONTO, ON · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
