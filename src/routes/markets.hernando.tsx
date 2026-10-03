import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import marketImg from "@/assets/market-interchange.jpg";

const SITE_URL = "https://sunamericarealty.com";

export const Route = createFileRoute("/markets/hernando")({
  component: HernandoPage,
  head: () => ({
    meta: [
      { title: "Hernando County Commercial Land Broker | I-75 & SR-50 | Sun America Realty, LLC" },
      { name: "description", content: "Commercial land brokerage in Hernando County, FL — Brooksville, Spring Hill, and the SR-50 corridor north of Tampa along I-75." },
      { property: "og:title", content: "Hernando County, FL Commercial Land | Sun America Realty, LLC" },
      { property: "og:description", content: "Lower land basis, expanding infrastructure, same demographic tailwinds as Pasco — one county north." },
      { property: "og:url", content: `${SITE_URL}/markets/hernando` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/markets/hernando` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            { "@type": "ListItem", position: 2, name: "Market", item: `${SITE_URL}/market` },
            { "@type": "ListItem", position: 3, name: "Hernando County", item: `${SITE_URL}/markets/hernando` },
          ],
        }),
      },
    ],
  }),
});

function HernandoPage() {
  return (
    <>
      <section className="relative isolate bg-[var(--brand-navy)]">
        <div className="absolute inset-0 -z-10">
          <img src={marketImg} alt="Aerial of I-75 and SR-50 in Hernando County, Florida" className="h-full w-full object-cover opacity-30" width={1600} height={900} />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-navy)]/70 to-[var(--brand-navy)]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <nav aria-label="Breadcrumb" className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            <Link to="/" className="hover:text-[var(--brand-red)]">Home</Link> <span className="mx-2">/</span> <Link to="/market" className="hover:text-[var(--brand-red)]">Market</Link> <span className="mx-2">/</span> <span className="text-white/80">Hernando County</span>
          </nav>
          <h1 className="mt-5 font-display text-5xl md:text-7xl font-extrabold uppercase text-white leading-[0.95] max-w-4xl">Hernando County, Florida.</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Part of Greater Tampa Bay. I-75 north through Brooksville. SR-50 east-west. Lower basis, same growth pressure.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-6">
          <p>The growth pressure pushing Pasco doesn't stop at the county line. I-75 continues north through Brooksville, the SR-50 corridor runs east-west across the county, and the Suncoast Parkway opens the western edge to commute traffic from Hillsborough and Pinellas.</p>
          <p>Land basis in Hernando is still rational. Infrastructure — utilities, road widening, retention — is catching up, not ahead. The fundamentals look familiar because they are: the same demographic and freight tailwinds that made Pasco worked one county south, one cycle earlier.</p>
          <p>What we cover here: commercial land along SR-50 and US-41, industrial sites tied to I-75 interchanges, and acreage positioned for the next leg of the freight and population wave.</p>
          <p className="font-display text-xl md:text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight pt-4">
            The window in Hernando is still open. It usually is — until it isn't.
          </p>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Looking at Hernando?</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}