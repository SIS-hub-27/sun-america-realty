type Props = {
  eyebrow?: string;
  children: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({ eyebrow, children, align = "left", light = false }: Props) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <div className={`font-data text-xs font-semibold uppercase tracking-[0.25em] ${light ? "text-[var(--brand-red)]" : "text-[var(--brand-red)]"}`}>
          {eyebrow}
        </div>
      )}
      <h2 className={`mt-3 font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.95] ${light ? "text-white" : "text-[var(--brand-navy)]"}`}>
        {children}
      </h2>
    </div>
  );
}