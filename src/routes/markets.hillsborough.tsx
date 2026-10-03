import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import marketImg from "@/assets/market-interchange.jpg";

const SITE_URL = "https://sunamerica.lovable.app";

export const Route = createFileRoute("/markets/hillsborough")({
  component: HillsboroughPage,
  head: () => ({
    meta: [
      { title: "Hillsborough County Commercial Real Estate Broker | Tampa, Brandon, Plant City | Sun America Realty, LLC" },
      { name: "description", content: "Commercial real estate brokerage in Hillsborough County, FL — Tampa, Brandon, Plant City, and Westshore. I-75, I-275, and I-4 corridor sites; port and airport logistics; urban infill and repositioning." },
      { property: "og:title", content: "Hillsborough County, FL Commercial Real Estate | Sun America Realty, LLC" },
      { property: "og:description", content: "The urban core of Tampa Bay. Where I-75, I-275, and I-4 converge — and where metro basis gets set." },
      { property: "og:url", content: `${SITE_URL}/markets/hillsborough` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/markets/hillsborough` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Market", item: `${SITE_URL}/market` },
            { "@type": "ListItem", position: 3, name: "Hillsborough County", item: `${SITE_URL}/markets/hillsborough` },
          ],
        }),
      },
    ],
  }),
});

function HillsboroughPage() {
  return (
    <>
      <section className="relative isolate bg-[var(--brand-navy)]">
        <div className="absolute inset-0 -z-10">
          <img src={marketImg} alt="Aerial of downtown Tampa and the I-275 / I-4 interchange in Hillsborough County, Florida" className="h-full w-full object-cover opacity-30" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/70 to-[var(--brand-navy)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link to="/" className="hover:text-[var(--brand-red)]">Home</Link> <span className="mx-2">/</span> <Link to="/market" className="hover:text-[var(--brand-red)]">Market</Link> <span className="mx-2">/</span> <span className="text-white/80">Hillsborough County</span>
          </nav>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-extrabold uppercase text-white leading-[0.95] max-w-4xl">Hillsborough County, Florida.</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            The urban core of Greater Tampa Bay. Where I-75, I-275, and I-4 converge — and where metro basis gets set.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-6">
          <p>Hillsborough is the engine of Greater Tampa Bay — 1.5M+ residents, Port Tampa Bay, Tampa International Airport, and the convergence of three interstates within a single county. It's the basis-setter for the rest of the metro.</p>
          <p>For commercial real estate, that means two distinct lanes. The urban core — downtown Tampa, Westshore, Channel District, Ybor — trades on infill scarcity and adaptive reuse. The eastern and southern edges — Brandon, Plant City, Riverview, Apollo Beach — are absorbing the metro's industrial and logistics demand, with land basis still rational relative to the core.</p>
          <p>What we cover here: industrial and logistics sites along the I-75 / I-4 spine, mixed-use and infill in the urban core, owner-user and value-add buildings, and assemblage opportunities at the metro's eastern absorption frontier.</p>
          <p className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight pt-4">
            If your deal sits in Hillsborough, you're working the most active commercial market in the state.
          </p>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Hillsborough opportunity?</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}