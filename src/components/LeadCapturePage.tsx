import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";

export type Question = {
  prompt: string;
  options: string[];
};

export type ContentBlock = {
  title: string;
  body: string;
};

export type ClosingCTA = {
  text: string;
  buttonLabel: string;
  to: string;
};

export type LeadCaptureProps = {
  slug: string;
  hero: { headline: string; body: string };
  questions: [Question, Question, Question];
  gate: { headline: string; subhead: string; buttonLabel: string };
  gated: {
    headline: string;
    blocks: ContentBlock[];
    closingCtas: ClosingCTA[];
  };
};

export function LeadCapturePage({
  slug,
  hero,
  questions,
  gate,
  gated,
}: LeadCaptureProps) {
  const [step, setStep] = useState(0); // 0..2 questions, 3 = email gate
  const [answers, setAnswers] = useState<string[]>(["", "", ""]);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const gatedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (unlocked && gatedRef.current) {
      gatedRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [unlocked]);

  const pickAnswer = (value: string) => {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
    setStep(step + 1);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const answersText = questions
        .map((q, i) => `${q.prompt} — ${answers[i]}`)
        .join(" | ");
      const pageSource =
        typeof window !== "undefined" ? window.location.pathname : `/${slug}`;
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "lead-capture",
          source: slug,
          email,
          answers: answersText,
          page_source: pageSource,
        }).toString(),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setUnlocked(true);
    } catch {
      setError(
        "Something went wrong. Email us directly at info@sunamericarealty.com",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* PUBLIC HERO — fully crawlable */}
      <section className="bg-[var(--brand-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <h1 className="font-display text-4xl md:text-7xl font-extrabold uppercase leading-[0.95] max-w-4xl">
            {hero.headline}
          </h1>
          <p className="mt-6 font-body text-base md:text-lg text-white/85 leading-relaxed max-w-3xl">
            {hero.body}
          </p>
        </div>
      </section>

      {/* QUESTION FLOW + GATE */}
      {!unlocked && (
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {step < 3 ? (
              <div>
                <div className="font-data text-xs font-semibold uppercase tracking-[0.25em] text-[var(--brand-red)]">
                  Question {step + 1} of 3
                </div>
                <h2 className="mt-3 font-display text-3xl md:text-5xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">
                  {questions[step].prompt}
                </h2>
                <div className="mt-8 grid gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pickAnswer(opt)}
                      className="text-left border-2 border-[var(--brand-navy)]/20 hover:border-[var(--brand-red)] hover:bg-[var(--brand-light-gray)] px-6 py-4 font-body text-base md:text-lg text-[var(--brand-dark-gray)] transition-colors min-h-11"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="mt-8 font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/70 hover:text-[var(--brand-red)]"
                  >
                    ← Back
                  </button>
                )}
              </div>
            ) : (
              <div className="border-l-4 border-[var(--brand-red)] bg-[var(--brand-light-gray)] p-8 md:p-12">
                <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">
                  {gate.headline}
                </h2>
                <p className="mt-4 font-body text-base md:text-lg text-[var(--brand-dark-gray)] leading-relaxed">
                  {gate.subhead}
                </p>
                <form onSubmit={onSubmit} className="mt-8 grid gap-4">
                  <label htmlFor={`${slug}-email`} className="sr-only">
                    Email address
                  </label>
                  <input
                    id={`${slug}-email`}
                    name="email"
                    type="email"
                    required
                    maxLength={255}
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border-2 border-[oklch(0.85_0_0)] bg-white px-4 py-4 font-body text-base text-[var(--brand-dark-gray)] focus:border-[var(--brand-navy)] focus:outline-none min-h-11"
                  />
                  <CTAButton variant="primary" arrow={false} disabled={submitting}>
                    {submitting ? "Sending…" : gate.buttonLabel}
                  </CTAButton>
                  {error && (
                    <p className="font-body text-sm text-[var(--brand-red)]">{error}</p>
                  )}
                </form>
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-6 font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/70 hover:text-[var(--brand-red)]"
                >
                  ← Back
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* GATED CONTENT — rendered for SEO but visually hidden until unlock */}
      <section
        ref={gatedRef}
        className={unlocked ? "bg-white" : "sr-only"}
        aria-hidden={!unlocked}
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">
            {gated.headline}
          </h2>
          <div className="mt-12 space-y-10">
            {gated.blocks.map((b) => (
              <div key={b.title} className="border-t-2 border-[var(--brand-red)] pt-6">
                <h3 className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">
                  {b.title}
                </h3>
                <p className="mt-4 font-body text-base md:text-lg text-[var(--brand-dark-gray)]/90 leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 space-y-6">
            {gated.closingCtas.map((c) => (
              <div
                key={c.buttonLabel}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-[var(--brand-light-gray)] p-6 md:p-8"
              >
                <p className="font-display text-lg md:text-2xl font-extrabold uppercase text-[var(--brand-navy)]">
                  {c.text}
                </p>
                <Link
                  to={c.to}
                  className="inline-flex items-center justify-center gap-2 font-data font-semibold uppercase tracking-[0.15em] text-sm px-7 py-4 bg-[var(--brand-red)] text-white hover:bg-[oklch(0.44_0.18_24.5)] min-h-11"
                >
                  {c.buttonLabel} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}