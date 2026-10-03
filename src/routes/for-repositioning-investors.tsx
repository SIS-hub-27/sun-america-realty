import { createFileRoute } from "@tanstack/react-router";
import { LeadCapturePage } from "@/components/LeadCapturePage";

const SITE_URL = "https://sunamerica.lovable.app";

export const Route = createFileRoute("/for-repositioning-investors")({
  component: ForRepositioningPage,
  head: () => ({
    meta: [
      { title: "Value-Add Commercial Real Estate in Greater Tampa Bay | Sun America Realty, LLC" },
      { name: "description", content: "Repositioning and value-add commercial opportunities across Greater Tampa Bay. How to underwrite a value-add deal and what's actually available right now." },
      { property: "og:title", content: "Value-Add Commercial Real Estate in Greater Tampa Bay" },
      { property: "og:description", content: "Repositioning and value-add opportunities across Greater Tampa Bay." },
      { property: "og:url", content: `${SITE_URL}/for-repositioning-investors` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/for-repositioning-investors` }],
  }),
});

function ForRepositioningPage() {
  return (
    <LeadCapturePage
      slug="for-repositioning-investors"
      hero={{
        headline: "The Best Deals Don't Look Like Deals Yet.",
        body: "Value-add commercial real estate is about buying what something can be, at a price that reflects what it is. Across Greater Tampa Bay — from Pinellas infill and Hillsborough adaptive reuse out to East Pasco and Hernando — there are assets trading at a basis that doesn't reflect their repositioning potential.",
      }}
      questions={[
        {
          prompt: "What type of repositioning are you targeting?",
          options: [
            "Vacant or underutilized building",
            "Underperforming income property",
            "Development site with entitlement upside",
            "Master lease opportunity",
            "Open to the right deal",
          ],
        },
        {
          prompt: "What's your target hold period?",
          options: [
            "1–3 years (short flip / reposition)",
            "3–7 years (stabilize and sell)",
            "7+ years (long-term hold)",
            "Depends on the deal",
          ],
        },
        {
          prompt: "What's your equity check size?",
          options: [
            "Under $500K",
            "$500K–$1M",
            "$1M–$3M",
            "$3M+",
            "Looking to partner / co-invest",
          ],
        },
      ]}
      gate={{
        headline: "Get the Value-Add Guide",
        subhead: "How to underwrite a repositioning deal across Tampa Bay — and what's available right now.",
        buttonLabel: "Send Me the Guide",
      }}
      gated={{
        headline: "Value-Add Commercial Real Estate in Greater Tampa Bay — What's Actually Available",
        blocks: [
          {
            title: "How to Underwrite a Value-Add Deal",
            body: "Start with stabilized NOI — what the property generates at market occupancy with market rents. Apply the appropriate exit cap rate for that asset class in that submarket. That's your stabilized value. Subtract your repositioning costs and your required return. What's left is your maximum basis. If the ask is below that number — you have a deal to underwrite.",
          },
          {
            title: "The Master Lease Structure",
            body: "A master lease allows you to control a property — and its income — without buying it. You lease the entire building from the owner at a fixed rate, then sublease individual spaces at market rates. The spread is your income. It's an underutilized structure across Tampa Bay and it fits certain assets exactly.",
          },
          {
            title: "What's Available Right Now — Directly Owned Asset",
            body: "Sun America Realty has direct ownership in a 21,000 SF former car dealership at the metro's eastern edge. High-bay clearance. Prominent road frontage. Main commercial corridor. Available for sale or master lease. Basis is below replacement cost. A representative value-add entry point — and one of several repositioning opportunities we track across the metro.",
          },
          {
            title: "What to Watch for in Tampa Bay Specifically",
            body: "Retention pond requirements on flat sites eat usable square footage — verify net usable acreage, not gross. Hernando County moves slower on entitlements — price that into your carry cost. Hillsborough and Pinellas have building codes and historic overlays that constrain adaptive reuse. Polk varies sharply by city. Assets that look stagnant today are often in submarkets that are not.",
          },
        ],
        closingCtas: [
          { text: "Want to talk through a specific asset or submarket?", buttonLabel: "Start the Conversation", to: "/contact" },
        ],
      }}
    />
  );
}