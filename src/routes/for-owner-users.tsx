import { createFileRoute } from "@tanstack/react-router";
import { LeadCapturePage } from "@/components/LeadCapturePage";

const SITE_URL = "https://sunamerica.lovable.app";

export const Route = createFileRoute("/for-owner-users")({
  component: ForOwnerUsersPage,
  head: () => ({
    meta: [
      { title: "Stop Paying Someone Else's Mortgage. | Sun America Realty, LLC" },
      { name: "description", content: "Own your commercial building instead of leasing it. What that decision actually looks like across Greater Tampa Bay — the math, the structures, and what's available right now." },
      { property: "og:title", content: "Stop Paying Someone Else's Mortgage." },
      { property: "og:description", content: "Own your commercial building anywhere in Greater Tampa Bay." },
      { property: "og:url", content: `${SITE_URL}/for-owner-users` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/for-owner-users` }],
  }),
});

function ForOwnerUsersPage() {
  return (
    <LeadCapturePage
      slug="for-owner-users"
      hero={{
        headline: "Stop Paying Someone Else's Mortgage.",
        body: "Every lease payment you make builds equity for someone else. Business owners across Tampa Bay are buying their buildings — locking in their occupancy cost, building an asset, and positioning for a sale or lease-back when they're ready to exit. Here's what that decision actually looks like.",
      }}
      questions={[
        {
          prompt: "What type of business do you operate?",
          options: [
            "Medical / Dental / Professional services",
            "Retail / Restaurant",
            "Trade / Industrial / Contractor",
            "Service business",
            "Other",
          ],
        },
        {
          prompt: "What's your current situation?",
          options: [
            "Leasing — looking to buy",
            "Leasing — open to the idea",
            "Own my building — looking to upgrade or expand",
            "Looking for my first commercial location",
          ],
        },
        {
          prompt: "What's your target footprint?",
          options: [
            "Under 5,000 SF",
            "5,000–10,000 SF",
            "10,000–25,000 SF",
            "25,000 SF and above",
          ],
        },
      ]}
      gate={{
        headline: "Get the Owner-User Guide",
        subhead: "Buy vs. lease math, SBA 504 basics, and what's available on this corridor right now.",
        buttonLabel: "Send Me the Guide",
      }}
      gated={{
        headline: "Own Your Building Instead of Leasing It — What That Decision Actually Looks Like",
        blocks: [
          {
            title: "The Buy vs. Lease Math",
            body: "A $3,500/month lease payment over ten years is $420,000 — and you own nothing at the end of it. A $3,500/month mortgage payment over ten years builds equity, generates depreciation you can use against your taxable income, and leaves you with an asset you can sell, lease, or borrow against. The monthly number can be identical. The outcome is not.",
          },
          {
            title: "SBA 504 — The Tool Most Business Owners Don't Use",
            body: "The SBA 504 loan program allows owner-users to acquire commercial real estate with as little as 10% down. The structure: 50% conventional first mortgage, 40% SBA debenture, 10% borrower equity. Fixed rates on the SBA portion. It was designed exactly for this — a business owner who wants to own their building without tying up all their capital.",
          },
          {
            title: "What's Available on This Corridor Right Now",
            body: "Sun America Realty has direct ownership at the metro's eastern edge — including a 21,000 SF former dealership building available for sale or master lease. Repositionable asset at a basis well below replacement cost. Owner-user, investor, or master tenant — the structure fits the buyer. Off-market owner-user opportunities surface across all five counties.",
          },
          {
            title: "How to Evaluate a Building Before You Buy",
            body: "Roof, HVAC, electrical panel age, and environmental history are the four items that blow up owner-user deals after the LOI. Get a Phase I environmental before you go hard on earnest money. These are not surprises — they're due diligence items. Know them before you negotiate price.",
          },
        ],
        closingCtas: [
          { text: "Want to see what's available across Tampa Bay?", buttonLabel: "See Current Listings", to: "/listings" },
          { text: "Have a specific need? Let's talk.", buttonLabel: "Contact a Broker", to: "/contact" },
        ],
      }}
    />
  );
}