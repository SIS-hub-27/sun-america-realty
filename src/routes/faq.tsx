import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";

const SITE_URL = "https://sunamericarealty.com";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What areas does Sun America Realty cover?",
    a: "Greater Tampa Bay — Hillsborough, Pinellas, Pasco, Hernando, and Polk counties. Coverage spans the I-275, I-75, and I-4 corridors, the Veterans/Suncoast Parkway, and SR-54, SR-52, SR-50, and SR-60. Forty-five years of relationships across the metro.",
  },
  {
    q: "What types of commercial land deals do you broker?",
    a: "Industrial and logistics sites, mixed-use development parcels, interchange-anchor commercial sites, urban infill and repositioning, and unentitled road-frontage acreage. Inventory ranges from sub-2-acre infill parcels to multi-owner assemblages of 60+ acres across the Tampa Bay metro.",
  },
  {
    q: "Do you work with developers, investors, or landowners?",
    a: "All three. We represent landowners on disposition, source on- and off-market sites for developers and investors, and structure joint ventures or LP participations when straight purchase isn't the right fit.",
  },
  {
    q: "What deal structures do you offer beyond a straight sale?",
    a: "Straight purchase, seller financing, joint venture, and LP participation. The structure gets built around the deal — we don't force a standard box.",
  },
  {
    q: "Can you help with entitlements, zoning, and site planning?",
    a: "Yes. Zoning changes, comp plan amendments, site-plan approvals, and variances across Tampa Bay's municipalities and county planning departments. We know the timeline, the requirements, and the people making decisions.",
  },
  {
    q: "How is land basis across Tampa Bay today?",
    a: "It varies by submarket. Hillsborough and Pinellas have compressed — repositioning and infill plays are the lane. South Pasco along SR-54 has also compressed. East Pasco, north Pasco, Hernando, and NW Polk still offer workable basis where infrastructure is catching up. That window is narrowing.",
  },
  {
    q: "Do you have off-market listings?",
    a: "Yes — a meaningful share of what we transact never hits a public listing page. If you have a specific need anywhere in the Tampa Bay metro, the fastest path is a direct call.",
  },
  {
    q: "How do I get in touch?",
    a: "Call (352) 437-3059, email info@sunamericarealty.com, or use the contact form. We're at 14341 7th St., Dade City, FL 33523.",
  },
  {
    q: "Do you handle commercial properties beyond raw land?",
    a: "Yes. Income-producing properties, owner-user buildings, and repositioning opportunities across Greater Tampa Bay — including directly owned assets at the metro's eastern edge. If it's commercial and it's in this market, the conversation is worth having.",
  },
];

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — Greater Tampa Bay Commercial Real Estate | Sun America Realty, LLC" },
      { name: "description", content: "Answers about commercial real estate brokerage, entitlements, deal structures, and the Tampa Bay market across Hillsborough, Pinellas, Pasco, Hernando, and Polk counties." },
      { property: "og:title", content: "FAQ | Sun America Realty, LLC" },
      { property: "og:description", content: "Common questions from developers, investors, and landowners working the Greater Tampa Bay metro." },
      { property: "og:url", content: `${SITE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
});

function FAQPage() {
  return (
    <>
      <section className="bg-[var(--brand-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-[0.95]">Questions, Answered.</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Common questions from developers, investors, and landowners working the Greater Tampa Bay metro.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading>The Basics</SectionHeading>
          <dl className="mt-12 divide-y-2 divide-[var(--brand-navy)]/10">
            {FAQS.map((f) => (
              <div key={f.q} className="py-8 first:pt-0">
                <dt className="font-display text-2xl md:text-3xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">{f.q}</dt>
                <dd className="mt-4 font-body text-base md:text-lg text-[var(--brand-dark-gray)]/90 leading-relaxed">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Question not on this list?</h2>
          <CTAButton to="/contact" variant="primary">Start the Conversation</CTAButton>
        </div>
      </section>
    </>
  );
}