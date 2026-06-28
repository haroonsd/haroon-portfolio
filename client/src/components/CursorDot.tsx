import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot || window.matchMedia("(max-width: 768px)").matches) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;
      dot.style.transform = `translate(${cx}px, ${cy}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const grow = () => { dot.style.width = "24px"; dot.style.height = "24px"; dot.style.opacity = "0.3"; };
    const shrink = () => { dot.style.width = "8px"; dot.style.height = "8px"; dot.style.opacity = "0.6"; };

    const targets = document.querySelectorAll("a, button, .project-card, .mini-card");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return <div id="cursor-dot" ref={dotRef} />;
}
