import { createFileRoute } from "@tanstack/react-router";
import { LeadCapturePage } from "@/components/LeadCapturePage";

const SITE_URL = "https://sunamericarealty.com";

export const Route = createFileRoute("/for-sellers")({
  component: ForSellersPage,
  head: () => ({
    meta: [
      { title: "What's Your Land Actually Worth in Tampa Bay? | Sun America Realty, LLC" },
      { name: "description", content: "Commercial land valuation across Greater Tampa Bay — Hillsborough through Polk. What buyers are underwriting to, how basis is calculated, and what kills deals before they close." },
      { property: "og:title", content: "What's Your Land Actually Worth in Tampa Bay?" },
      { property: "og:description", content: "Commercial land valuation across Greater Tampa Bay." },
      { property: "og:url", content: `${SITE_URL}/for-sellers` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/for-sellers` }],
  }),
});

function ForSellersPage() {
  return (
    <LeadCapturePage
      slug="for-sellers"
      hero={{
        headline: "What's Your Land Actually Worth in Tampa Bay?",
        body: "Assessed value is a tax number. It has nothing to do with what a developer or investor will pay. If you own land anywhere in Greater Tampa Bay — Hillsborough through Polk — this is what you need to understand before you talk to a buyer.",
      }}
      questions={[
        {
          prompt: "Where is your property?",
          options: [
            "Hillsborough County (Tampa / Brandon / Plant City)",
            "Pinellas County (St. Pete / Clearwater)",
            "Pasco County (Wesley Chapel / Dade City / Zephyrhills)",
            "Hernando County (Brooksville / Spring Hill)",
            "Polk County (NW Polk / I-4 corridor)",
            "Other",
          ],
        },
        {
          prompt: "What's the current zoning?",
          options: ["Agricultural", "Residential", "Commercial", "Industrial", "I don't know"],
        },
        {
          prompt: "What's your timeline?",
          options: [
            "Actively looking to sell",
            "Within 12 months",
            "No rush — exploring options",
            "Just want to know what it's worth",
          ],
        },
      ]}
      gate={{
        headline: "Get the Seller's Guide",
        subhead: "How commercial land gets valued and transacted on this corridor. Real numbers. No fluff.",
        buttonLabel: "Send Me the Guide",
      }}
      gated={{
        headline: "How Commercial Land Gets Valued in Greater Tampa Bay",
        blocks: [
          {
            title: "Assessed Value Is a Starting Point. Not a Price.",
            body: "County assessed value is calculated for tax purposes. It lags the market by years. Buyers don't look at it. What they look at: comparable sales, entitlement status, infrastructure proximity, and what the land can support at current construction costs and absorption rates. Those four factors determine your basis.",
          },
          {
            title: "What Buyers Are Actually Underwriting To Right Now",
            body: "Across Tampa Bay, active buyers underwrite commercial land in wide bands by submarket. The Hillsborough urban core and built-out Pinellas trade at premiums driven by infill scarcity. Pasco from SR-54 north through Hernando typically prices at $8–$25/SF depending on location, zoning, and infrastructure access. NW Polk along I-4 is its own band driven by logistics absorption. Agricultural land with no entitlements trades at a different basis than road-frontage with commercial zoning. The gap is the entitlement premium — and it's real.",
          },
          {
            title: "What Kills Deals Before They Close",
            body: "Title issues. Retention pond requirements that eat usable acreage. Infrastructure gaps — no water, no sewer, no turn lane. Multi-owner assemblages where one parcel won't move. Knowing which of these you're sitting on before you go to market determines whether you close at full price or negotiate from weakness.",
          },
          {
            title: "The Right Move Before You List",
            body: "Talk to someone who knows the buyers, the entitlement timeline, and the comparable sales in your submarket before you set a price. You only get one first impression in a deal. Don't price yourself out of a conversation you haven't had yet.",
          },
        ],
        closingCtas: [
          { text: "Ready to talk about your property?", buttonLabel: "Contact a Broker", to: "/contact" },
        ],
      }}
    />
  );
}