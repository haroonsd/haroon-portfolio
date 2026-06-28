import { type ElementType, type ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  label?: boolean;
  delay?: number;
  style?: React.CSSProperties;
  [key: string]: unknown;
}

export default function Reveal({ children, as: Tag = "div", className = "", label = false, delay = 0, style, ...rest }: RevealProps) {
  const { ref, visible } = useScrollReveal(0.1);

  return (
    <Tag
      ref={ref}
      className={`${label ? "reveal-label" : "reveal"} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
