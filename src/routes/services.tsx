import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Brokerage, Entitlements & Deal Structure | Sun America Realty, LLC" },
      { name: "description", content: "Brokerage, land acquisition, entitlements, deal structuring, disposition, and investment services for commercial real estate across Greater Tampa Bay." },
      { property: "og:title", content: "Services | Sun America Realty, LLC" },
      { property: "og:description", content: "Land. Entitlements. Deal structure. If that's your world, you're in the right place." },
      { property: "og:url", content: "https://sunamerica.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://sunamerica.lovable.app/services" }],
  }),
});

const SERVICES = [
  { n: "01", title: "Brokerage", body: "On-market and off-market commercial real estate across Greater Tampa Bay — land, income-producing properties, and repositioning opportunities from the urban core out through Pasco, Hernando, and Polk." },
  { n: "02", title: "Land Acquisition", body: "You bring the criteria. We bring the inventory, the relationships, and the market intelligence to match you with the right parcel — before it hits the open market." },
  { n: "03", title: "Entitlements", body: "Zoning changes, comp plan amendments, site-plan approvals, variance navigation. We know the timeline, the requirements, and the people making decisions across Tampa Bay's municipalities and county planning departments." },
  { n: "04", title: "Deal Structuring", body: "Your deal doesn't have to fit a standard box. Straight purchase, seller financing, joint venture, LP participation — the structure gets built around what works for you." },
  { n: "05", title: "Disposition", body: "When you're ready to sell, you want it in front of the right buyer — not blasted to a generic list. You get a targeted approach to developers, investors, and owner-operators who are actually in the market." },
  { n: "06", title: "Commercial Leasing & Repositioning", body: "Owner-user, investor, and repositioning opportunities across Greater Tampa Bay. Including directly owned assets at the metro's eastern edge — income-producing properties and repositionable commercial buildings. Not just listed. Known." },
  { n: "07", title: "Investment", body: "Looking to place capital in the Tampa Bay metro? You're not just getting a broker. You're getting a partner with skin in the game and 45 years of market knowledge across five counties." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--brand-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <h1 className="font-display text-4xl md:text-7xl font-extrabold uppercase leading-[0.95] max-w-4xl">
            Commercial Land Brokerage, Entitlements & Deal Structure
          </h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            If that's your world, you're in the right place.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[oklch(0.9_0_0)] border border-[oklch(0.9_0_0)]">
            {SERVICES.map((s) => (
              <div key={s.n} className="bg-white p-8 md:p-10 flex flex-col">
                <div className="font-display text-6xl md:text-7xl font-extrabold text-[var(--brand-red)] leading-none">{s.n}</div>
                <h2 className="mt-6 font-display text-2xl md:text-3xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">{s.title}</h2>
                <p className="mt-4 font-body text-base text-[var(--brand-dark-gray)]/90 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)] max-w-2xl">Have a deal in mind? Start the conversation.</h2>
          <CTAButton to="/contact" variant="primary">Contact a Broker</CTAButton>
        </div>
      </section>
    </>
  );
}