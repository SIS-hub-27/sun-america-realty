import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import marketImg from "@/assets/market-interchange.jpg";

const SITE_URL = "https://sunamericarealty.com";

export const Route = createFileRoute("/markets/polk")({
  component: PolkPage,
  head: () => ({
    meta: [
      { title: "Polk County Commercial Land Broker | I-4 Corridor & NW Polk | Sun America Realty, LLC" },
      { name: "description", content: "Commercial land brokerage in Polk County, FL — northwest Polk along the I-4 corridor between Tampa and Orlando. Logistics, industrial, and mixed-use sites." },
      { property: "og:title", content: "Polk County, FL Commercial Land | Sun America Realty, LLC" },
      { property: "og:description", content: "The expanding edge of our coverage — NW Polk on the I-4 logistics corridor between Tampa and Orlando." },
      { property: "og:url", content: `${SITE_URL}/markets/polk` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/markets/polk` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Market", item: `${SITE_URL}/market` },
            { "@type": "ListItem", position: 3, name: "Polk County", item: `${SITE_URL}/markets/polk` },
          ],
        }),
      },
    ],
  }),
});

function PolkPage() {
  return (
    <>
      <section className="relative isolate bg-[var(--brand-navy)]">
        <div className="absolute inset-0 -z-10">
          <img src={marketImg} alt="Aerial view of the I-4 corridor in Polk County, Florida" className="h-full w-full object-cover opacity-30" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/70 to-[var(--brand-navy)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link to="/" className="hover:text-[var(--brand-red)]">Home</Link> <span className="mx-2">/</span> <Link to="/market" className="hover:text-[var(--brand-red)]">Market</Link> <span className="mx-2">/</span> <span className="text-white/80">Polk County</span>
          </nav>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-extrabold uppercase text-white leading-[0.95] max-w-4xl">Polk County, Florida.</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Part of Greater Tampa Bay. Northwest Polk and the I-4 logistics spine between Tampa and Orlando.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-6">
          <p>The I-4 corridor between Tampa and Orlando is one of the most active logistics and industrial absorption markets in the Southeast. Northwest Polk sits in the middle of it — within reach of Lakeland, Plant City, and the Tampa MSA, with land basis that still pencils.</p>
          <p>Our footprint is expanding east into NW Polk because the same growth migrating up I-75 through Pasco is migrating along I-4 through Polk. The fundamentals — population, freight volume, infrastructure investment — line up.</p>
          <p>What we cover here: industrial and logistics land along the I-4 corridor, mixed-use parcels at expanding municipal edges, and acreage positioned ahead of the next round of distribution and manufacturing absorption.</p>
          <p className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight pt-4">
            If your deal is in NW Polk, the conversation belongs here.
          </p>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Polk County opportunity?</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}