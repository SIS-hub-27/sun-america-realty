import { createFileRoute, Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import marketImg from "@/assets/market-interchange.jpg";

const SITE_URL = "https://sunamerica.lovable.app";

export const Route = createFileRoute("/markets/pinellas")({
  component: PinellasPage,
  head: () => ({
    meta: [
      { title: "Pinellas County Commercial Real Estate Broker | St. Petersburg, Clearwater, Gateway | Sun America Realty, LLC" },
      { name: "description", content: "Commercial real estate brokerage in Pinellas County, FL — St. Petersburg, Clearwater, and the Gateway business district. Infill, repositioning, and adaptive reuse in Tampa Bay's built-out peninsula." },
      { property: "og:title", content: "Pinellas County, FL Commercial Real Estate | Sun America Realty, LLC" },
      { property: "og:description", content: "Built-out and constrained — which is exactly why repositioning, infill, and adaptive reuse here trade at a different premium." },
      { property: "og:url", content: `${SITE_URL}/markets/pinellas` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/markets/pinellas` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Market", item: `${SITE_URL}/market` },
            { "@type": "ListItem", position: 3, name: "Pinellas County", item: `${SITE_URL}/markets/pinellas` },
          ],
        }),
      },
    ],
  }),
});

function PinellasPage() {
  return (
    <>
      <section className="relative isolate bg-[var(--brand-navy)]">
        <div className="absolute inset-0 -z-10">
          <img src={marketImg} alt="Aerial of St. Petersburg and the Gateway business district in Pinellas County, Florida" className="h-full w-full object-cover opacity-30" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/70 to-[var(--brand-navy)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link to="/" className="hover:text-[var(--brand-red)]">Home</Link> <span className="mx-2">/</span> <Link to="/market" className="hover:text-[var(--brand-red)]">Market</Link> <span className="mx-2">/</span> <span className="text-white/80">Pinellas County</span>
          </nav>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-extrabold uppercase text-white leading-[0.95] max-w-4xl">Pinellas County, Florida.</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Part of Greater Tampa Bay. Built-out and constrained. The peninsula where repositioning, not raw land, is the entire game.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-6">
          <p>Pinellas is the most densely populated county in Florida and effectively built out. St. Petersburg, Clearwater, the Gateway business district, and the Beach communities — there is almost no greenfield commercial land. That constraint is the opportunity.</p>
          <p>Capital that wants Tampa Bay exposure but can't compete on industrial land basis in Hillsborough or Pasco plays differently here. Adaptive reuse of older office and flex inventory. Repositioning of underperforming retail. Master lease structures on Class B and C buildings near transit and the St. Pete urban core. Owner-user opportunities in tight medical and professional submarkets.</p>
          <p>What we cover here: infill and repositioning across St. Petersburg and Clearwater, Gateway-area office and flex repositioning, owner-user and master lease opportunities, and value-add buildings at a basis the urban core supports.</p>
          <p className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight pt-4">
            In Pinellas, you're not buying land — you're buying basis on assets that already exist.
          </p>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Pinellas opportunity?</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}