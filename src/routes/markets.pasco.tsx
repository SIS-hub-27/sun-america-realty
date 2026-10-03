import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import marketImg from "@/assets/market-interchange.jpg";

const SITE_URL = "https://sunamericarealty.com";

export const Route = createFileRoute("/markets/pasco")({
  component: PascoPage,
  head: () => ({
    meta: [
      { title: "Pasco County Commercial Land Broker | I-75, SR-54, SR-52 | Sun America Realty, LLC" },
      { name: "description", content: "Commercial land for sale and brokerage in Pasco County, FL — Wesley Chapel, Land O' Lakes, Zephyrhills, Dade City. I-75, SR-54, SR-52, and US-301 corridors." },
      { property: "og:title", content: "Pasco County, FL Commercial Land | Sun America Realty, LLC" },
      { property: "og:description", content: "The I-75 corridor from SR-54 north through Dade City. Brokerage, entitlements, and deal structure." },
      { property: "og:url", content: `${SITE_URL}/markets/pasco` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/markets/pasco` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Market", item: `${SITE_URL}/market` },
            { "@type": "ListItem", position: 3, name: "Pasco County", item: `${SITE_URL}/markets/pasco` },
          ],
        }),
      },
    ],
  }),
});

function PascoPage() {
  return (
    <>
      <section className="relative isolate bg-[var(--brand-navy)]">
        <div className="absolute inset-0 -z-10">
          <img src={marketImg} alt="Aerial view of I-75 interchange in Pasco County, Florida" className="h-full w-full object-cover opacity-30" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/70 to-[var(--brand-navy)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link to="/" className="hover:text-[var(--brand-red)]">Home</Link> <span className="mx-2">/</span> <Link to="/market" className="hover:text-[var(--brand-red)]">Market</Link> <span className="mx-2">/</span> <span className="text-white/80">Pasco County</span>
          </nav>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-extrabold uppercase text-white leading-[0.95] max-w-4xl">Pasco County, Florida.</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Part of Greater Tampa Bay. I-75. SR-54. SR-52. US-301. Where the metro's growth presses north.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-6">
          <p>Pasco County crossed 560,000 residents and is projected past 700,000 within fifteen years. Workforce growth is running roughly 37% over the last decade — the fastest in the Tampa Bay metro. The growth is moving north along I-75 and east along SR-54.</p>
          <p>South Pasco — Wesley Chapel and Land O' Lakes — absorbed the first wave. Basis there has compressed. East Pasco — Dade City, Zephyrhills, and the US-301 corridor — is the next leg, with rational land basis and entitlements that are still navigable.</p>
          <p>What we cover here: industrial sites along Blanton Road, infill in downtown Dade City, mixed-use development parcels at the interchanges, and unentitled road-frontage land sitting next to entitled inventory.</p>
          <p className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight pt-4">
            If your opportunity sits in Pasco County, the conversation has already started here.
          </p>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading>Pasco at a Glance</SectionHeading>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { v: "560K+", l: "Residents (2024)" },
              { v: "700K", l: "Projected 2040" },
              { v: "37%", l: "10-Year Workforce Growth" },
              { v: "I-75", l: "Full Interchange Access" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-[var(--brand-red)] pl-4">
                <div className="font-display text-4xl font-extrabold uppercase text-[var(--brand-navy)]">{s.v}</div>
                <div className="mt-2 font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Have a Pasco site in mind?</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}