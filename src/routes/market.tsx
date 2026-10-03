import { createFileRoute, Link } from "@tanstack/react-router";
import marketImg from "@/assets/market-interchange.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";

export const Route = createFileRoute("/market")({
  component: MarketPage,
  head: () => ({
    meta: [
      { title: "Greater Tampa Bay Commercial Real Estate Market Intelligence | Sun America Realty, LLC" },
      { name: "description", content: "Tampa Bay commercial real estate intelligence — Hillsborough, Pinellas, Pasco, Hernando, and Polk counties. I-275, I-75, I-4 corridor trends and acquisition windows." },
      { property: "og:title", content: "Greater Tampa Bay Market | Sun America Realty, LLC" },
      { property: "og:description", content: "Five counties. Three interstates. One market in motion." },
      { property: "og:url", content: "https://sunamericarealty.com/market" },
    ],
    links: [{ rel: "canonical", href: "https://sunamericarealty.com/market" }],
  }),
});

const STATS = [
  { v: "3.3M", l: "Tampa Bay MSA Population" },
  { v: "5", l: "Counties Covered" },
  { v: "45+", l: "Years Experience" },
  { v: "I-275 / I-75 / I-4", l: "Interstate Corridors" },
];

const COVERAGE = [
  {
    tag: "Urban Core",
    title: "Hillsborough County",
    body:
      "Tampa, Brandon, Plant City, Westshore. The convergence of I-75, I-275, and I-4. Port Tampa Bay, TPA airport, and the industrial spine that drives metro logistics. Infill, repositioning, and the deals that define basis for the rest of the metro.",
  },
  {
    tag: "Peninsula",
    title: "Pinellas County",
    body:
      "St. Petersburg, Clearwater, Gateway. Built-out and constrained — which is exactly why repositioning, infill, and adaptive reuse opportunities here trade at a different premium than the rest of the metro.",
  },
  {
    tag: "North",
    title: "Pasco County",
    body:
      "Wesley Chapel, Land O' Lakes, Zephyrhills, Dade City. The SR-54 spine, US-301, and I-75 north. 560,000+ residents trending to 700,000. This is where 45 years of market relationships live — and where the next wave of industrial and mixed-use is already under way.",
  },
  {
    tag: "Further North",
    title: "Hernando County",
    body:
      "I-75 through Brooksville. SR-50 east-west. The Suncoast Parkway opening the western edge. Lower land basis, expanding infrastructure, and the same demographic pressure that drove Pasco — one county and one cycle later.",
  },
  {
    tag: "I-4 East",
    title: "Polk County",
    body:
      "Lakeland, Plant City edge, and NW Polk along the I-4 logistics spine between Tampa and Orlando. One of the most active industrial absorption markets in the Southeast — and our coverage expands east with it.",
  },
];

function MarketPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate bg-[var(--brand-navy)]">
        <div className="absolute inset-0 -z-10">
          <img src={marketImg} alt="I-75 highway interchange aerial view" className="h-full w-full object-cover opacity-30" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/70 to-[var(--brand-navy)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase text-white leading-[0.95] max-w-4xl">
            Greater Tampa Bay Commercial Real Estate Market Intelligence
          </h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Five counties. Three interstates. One market in motion — from the Tampa core out through Pasco, Hernando, and Polk.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-6">
          <p>The Tampa Bay MSA is the second-largest metro in Florida and one of the fastest-growing in the country. The commercial anchors along I-275, I-75, and I-4 didn't happen by accident. Someone was at the table when those deals got done — and we've been working this market since 1980.</p>
          <p>Growth in Greater Tampa Bay moves outward in cycles. Hillsborough and Pinellas reach build-out; basis compresses; the pressure pushes north into Pasco and Hernando, east along I-4 into Polk, and west along the Suncoast Parkway. Different stages of the same cycle, all live at once. Land basis where infrastructure is still catching up is rational. The window for acquisition ahead of value creation is narrowing, not widening.</p>
          <p>What you won't find in a CoStar report: the landowners, the entitlement timelines, the retention pond constraints, the infrastructure gaps, and the political realities that determine whether your deal closes. That intelligence comes from 45 years in this market.</p>
          <p className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight pt-4">
            You don't have to figure this out from scratch. That work is already done.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s) => (
              <div key={s.l} className="text-center md:text-left md:border-l-2 md:border-[var(--brand-red)] md:pl-4 first:md:border-l-0 first:md:pl-0">
                <div className="font-display text-3xl md:text-4xl font-extrabold uppercase text-white leading-none">{s.v}</div>
                <div className="mt-2 font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading>The Five Submarkets</SectionHeading>
          <div className="mt-14 space-y-12">
            {COVERAGE.map((c, i) => (
              <div key={c.tag} className={`grid md:grid-cols-12 gap-6 md:gap-12 items-start ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <div className="md:col-span-4">
                  <h3 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] leading-[1.05]">{c.title}</h3>
                </div>
                <div className="md:col-span-8 border-t-2 md:border-t-0 md:border-l-2 border-[var(--brand-red)] pt-6 md:pt-0 md:pl-10">
                  <p className="font-body text-base md:text-lg text-[var(--brand-dark-gray)]/90 leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { to: "/markets/hillsborough", label: "Hillsborough" },
              { to: "/markets/pinellas", label: "Pinellas" },
              { to: "/markets/pasco", label: "Pasco County" },
              { to: "/markets/hernando", label: "Hernando County" },
              { to: "/markets/polk", label: "Polk County" },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="border-2 border-[var(--brand-navy)] hover:border-[var(--brand-red)] hover:text-[var(--brand-red)] text-[var(--brand-navy)] font-data text-sm font-semibold uppercase tracking-[0.2em] text-center py-5 transition-colors"
              >
                {c.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Your opportunity is here. Let's talk.</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}