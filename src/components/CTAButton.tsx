import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "secondary-light";

const base =
  "inline-flex items-center justify-center gap-2 font-data font-semibold uppercase tracking-[0.15em] text-sm px-7 py-4 transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-[var(--brand-red)] text-white hover:bg-[oklch(0.44_0.18_24.5)]",
  secondary: "border-2 border-[var(--brand-navy)] text-[var(--brand-navy)] hover:bg-[var(--brand-navy)] hover:text-white",
  "secondary-light": "border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy)]",
};

type Props = {
  to?: string;
  href?: string;
  variant?: Variant;
  children: React.ReactNode;
  arrow?: boolean;
  className?: string;
} & Omit<ComponentProps<"button">, "children">;

export function CTAButton({ to, href, variant = "primary", children, arrow = true, className = "", ...rest }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type="submit" className={cls} {...rest}>
      {inner}
    </button>
  );
}