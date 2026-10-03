import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  format?: "comma" | "plain";
};

export function StatCounter({ value, suffix = "", prefix = "", label, duration = 1800, format = "comma" }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="font-display text-5xl md:text-6xl font-extrabold uppercase text-white leading-none">
        {prefix}{format === "plain" ? String(display) : display.toLocaleString()}{suffix}
      </div>
      <div className="mt-3 font-data text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
        {label}
      </div>
    </div>
  );
}