import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-aerial.jpg";
import { CTAButton } from "@/components/CTAButton";
import { StatCounter } from "@/components/StatCounter";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sun America Realty, LLC — Greater Tampa Bay Commercial Real Estate" },
      { name: "description", content: "Commercial real estate brokerage and investment across Greater Tampa Bay — Hillsborough, Pinellas, Pasco, Hernando, and Polk counties. Land, development, and income-producing properties." },
      { property: "og:title", content: "Sun America Realty, LLC | Your Next Deal Starts Here" },
      { property: "og:description", content: "Commercial real estate brokerage and investment across Greater Tampa Bay." },
      { property: "og:url", content: "https://sunamerica.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://sunamerica.lovable.app/" }],
  }),
});

const TIMELINE = [
  {
    label: "First Wave",
    title: "The Interchange Economy",
    body:
      "On the ground when the first national brands came to the I-75 and I-275 interchanges across the Tampa Bay metro. We watched this market take shape from the first transaction.",
  },
  {
    label: "Eastward",
    title: "SR-54 Becomes the Spine",
    body:
      "Working SR-54 before anyone called it a spine — helping landowners and tenants transact along that road while Bruce B. Downs was still called 'the road to nowhere.'",
  },
  {
    label: "Assembly",
    title: "Anchor Sites on the Interstates",
    body:
      "Multi-owner assemblies at key I-75, I-275, and I-4 interchanges — truck stops, travel centers, large-format retail. The kind of deals that don't happen without relationships built over decades.",
  },
  {
    label: "Downtown",
    title: "Infill & Repositioning",
    body:
      "Acquired and repositioned commercial real estate at the eastern edge of the metro as Tampa Bay's growth pressed outward. Direct ownership — not just brokerage.",
  },
  {
    label: "Now",
    title: "Greater Tampa Bay, End to End",
    body:
      "From Tampa and St. Pete infill through Pasco, Hernando, and into NW Polk along I-4. Forty-five years of market positioning — combined with an investor's underwriting discipline — pointed at the next leg up.",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Aerial view of land along the I-75 corridor in Florida"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-3xl text-white">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold uppercase leading-[0.95]">
              Your Next Deal<br />Starts Here.
            </h1>
            <p className="mt-6 font-body text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              Greater Tampa Bay commercial real estate — brokerage, entitlements, and deal structure. 45 years working this market from Pinellas through Polk.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <CTAButton to="/listings" variant="primary">See Current Listings</CTAButton>
              <CTAButton to="/contact" variant="secondary-light">Start the Conversation</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
            <StatCounter value={45} suffix="+" label="Years in the Market" />
            <StatCounter value={3300000} label="Tampa Bay Metro Population" />
            <StatCounter value={5} suffix="" label="Counties Covered" />
            <StatCounter value={1981} format="plain" label="First Deal Closed" />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <SectionHeading>
                The Growth Hasn't Peaked. It's Spreading.
              </SectionHeading>
            </div>
            <div className="md:col-span-7 font-body text-base md:text-lg text-[var(--brand-dark-gray)] space-y-5">
              <p>
                Greater Tampa Bay added more than 250,000 residents over the last decade. Hillsborough is running out of developable land at a basis that makes new projects pencil. Pinellas is built out — the only direction is up, or repositioned. So the growth is doing what growth always does — moving outward along the interstates.
              </p>
              <p>
                North up I-75 through Pasco and Hernando. East along I-4 into NW Polk. West along the Veterans / Suncoast corridor. Pasco crossed 560,000 residents and is projected past 700,000 within fifteen years. The same demographic and freight pressure is driving every edge of the metro — at different stages of the same cycle.
              </p>
              <p>
                Institutional capital is just now waking up to it. Land is still available at a basis that works at the metro's outer edges. Repositioning plays are still rational in the urban core. The window is open — across all five counties. It won't stay that way.
              </p>
              <a href="/market" className="inline-block mt-4 font-data text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)] border-b-2 border-[var(--brand-red)] pb-1">
                See the Market Breakdown →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading>
            45 Years Across Greater Tampa Bay.
          </SectionHeading>
          <div className="mt-14 grid gap-10 md:gap-0 md:grid-cols-5 md:border-t-2 md:border-[var(--brand-navy)]">
            {TIMELINE.map((t, i) => (
              <div
                key={t.title}
                className={`md:pt-8 md:px-5 ${i !== 0 ? "md:border-l md:border-[var(--brand-navy)]/15" : ""}`}
              >
                <h3 className="font-display text-xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">{t.title}</h3>
                <p className="mt-3 font-body text-sm text-[var(--brand-dark-gray)]/85 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading>
            Commercial Land. Entitlements. Deal Structure.
          </SectionHeading>
          <div className="mt-14 grid md:grid-cols-3 gap-10 md:gap-12">
            {[
              {
                title: "Brokerage",
                body: "On-market and off-market commercial real estate across Greater Tampa Bay — land, income-producing properties, and repositioning opportunities from the urban core out through Pasco, Hernando, and NW Polk.",
              },
              {
                title: "Entitlements",
                body: "Zoning, comp plan amendments, site plan approvals — guided by 45 years of relationships across Tampa Bay municipalities and county planning departments.",
              },
              {
                title: "Deal Structure",
                body: "Straight purchase, seller financing, joint venture, LP participation. The structure fits the deal.",
              },
            ].map((s) => (
              <div key={s.title} className="border-t-2 border-[var(--brand-red)] pt-6">
                <h3 className="font-display text-2xl font-extrabold uppercase text-[var(--brand-navy)]">{s.title}</h3>
                <p className="mt-4 font-body text-base text-[var(--brand-dark-gray)]/90 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a href="/services" className="inline-block font-data text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)] border-b-2 border-[var(--brand-red)] pb-1">
              All Services →
            </a>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <SectionHeading>Who We Work With</SectionHeading>
          <p className="mt-4 font-display text-lg md:text-xl font-semibold uppercase text-[var(--brand-dark-gray)]/80 max-w-3xl">
            Different deal. Different side of the table. Same market intelligence.
          </p>
          <div className="mt-12 grid gap-px bg-[var(--brand-navy)]/15 border border-[var(--brand-navy)]/15 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { to: "/for-sellers", label: "Sellers", body: "Understand what your land or property is worth before you talk to a buyer." },
              { to: "/for-investors", label: "Passive Investors", body: "Place capital in real assets without operating them." },
              { to: "/for-buyers", label: "Buyers & Developers", body: "Off-market sites, entitlement intelligence, and deal structure." },
              { to: "/for-owner-users", label: "Owner-Users", body: "Own your building instead of leasing it." },
              { to: "/for-repositioning-investors", label: "Repositioning Investors", body: "Value-add and master lease opportunities on this corridor." },
            ].map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group bg-white p-6 md:p-8 flex flex-col justify-between hover:bg-[var(--brand-navy)] transition-colors min-h-[200px]"
              >
                <div>
                  <h3 className="font-display text-lg md:text-xl font-extrabold uppercase text-[var(--brand-navy)] group-hover:text-white leading-tight">
                    {c.label}
                  </h3>
                  <p className="mt-3 font-body text-sm text-[var(--brand-dark-gray)]/85 group-hover:text-white/85 leading-relaxed">
                    {c.body}
                  </p>
                </div>
                <span className="mt-6 font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)] group-hover:text-white">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[var(--brand-navy)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold uppercase text-white max-w-3xl leading-[1.05]">
              Buying. Selling. Investment Strategy. start the conversation.
            </h2>
            <CTAButton to="/contact" variant="primary">Contact a Broker</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}