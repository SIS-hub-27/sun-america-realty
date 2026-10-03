import { createFileRoute } from "@tanstack/react-router";
import { LeadCapturePage } from "@/components/LeadCapturePage";

const SITE_URL = "https://sunamerica.lovable.app";

export const Route = createFileRoute("/for-buyers")({
  component: ForBuyersPage,
  head: () => ({
    meta: [
      { title: "Tell Us What You're Looking For. | Sun America Realty, LLC" },
      { name: "description", content: "Off-market commercial land and development sites across Greater Tampa Bay — Hillsborough through Polk. If it exists at a basis that works, we know about it." },
      { property: "og:title", content: "Tell Us What You're Looking For." },
      { property: "og:description", content: "Off-market commercial land and development sites across Greater Tampa Bay." },
      { property: "og:url", content: `${SITE_URL}/for-buyers` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/for-buyers` }],
  }),
});

function ForBuyersPage() {
  return (
    <LeadCapturePage
      slug="for-buyers"
      hero={{
        headline: "Tell Us What You're Looking For.",
        body: "The best sites in Tampa Bay don't hit CoStar. They move through relationships — landowners who've been here long enough to know who to call, and buyers who've earned the right to hear about it first.",
      }}
      questions={[
        {
          prompt: "What type of site are you looking for?",
          options: [
            "Industrial / Flex",
            "Mixed-use / Retail",
            "Multifamily development site",
            "Raw land / Assemblage",
            "Income-producing commercial property",
          ],
        },
        {
          prompt: "What county or submarket?",
          options: [
            "Hillsborough (Tampa / Brandon / Westshore)",
            "Pinellas (St. Pete / Clearwater / Gateway)",
            "Pasco (Wesley Chapel / East Pasco / Dade City)",
            "Hernando (Brooksville / SR-50 / Spring Hill)",
            "Polk (NW Polk / I-4 corridor)",
            "Open to the full metro",
          ],
        },
        {
          prompt: "What's your timeline?",
          options: [
            "Actively acquiring now",
            "Within 6 months",
            "Within 12 months",
            "Opportunistic — right deal, right basis",
          ],
        },
      ]}
      gate={{
        headline: "Get the Tampa Bay Acquisition Guide",
        subhead: "Where basis still works, what infrastructure is coming, and what kills deals in each submarket. Intel you won't find in a CoStar report.",
        buttonLabel: "Send Me the Guide",
      }}
      gated={{
        headline: "The Greater Tampa Bay Acquisition Guide",
        blocks: [
          {
            title: "Where Basis Still Works",
            body: "Hillsborough and Pinellas are compressed — the lane there is infill, repositioning, and adaptive reuse, not raw land. South Pasco along SR-54 has also compressed. Deals that penciled at $6/SF three years ago are trading at $14–18/SF. The land basis that still works is at the metro's outer edges — East Pasco, the Dade City and Zephyrhills pocket, US-301, Hernando along SR-50, and NW Polk along I-4. Infrastructure is catching up. Compression is coming — it hasn't arrived yet.",
          },
          {
            title: "What Infrastructure Is Actually Coming",
            body: "SR-52 widening. The Suncoast Parkway extension. Utility extensions north along US-301. I-4 corridor logistics build-out. Westshore-area transit and Brightline planning in the urban core. These are not speculative — they are funded, permitted, or in active planning. Infrastructure announcement is the leading indicator. Land basis moves on announcement, not completion.",
          },
          {
            title: "Entitlement Realities by Submarket",
            body: "Hillsborough and Pinellas have mature planning processes with their own quirks by municipality. Pasco has an active comp plan and a development services team that moves. Hernando is slower — budget for 6–12 months longer on a comp plan amendment. Polk varies sharply by city. Knowing which jurisdiction your site sits in — and who reviews what — is half the timeline.",
          },
          {
            title: "What Kills Deals Here Specifically",
            body: "Retention pond requirements that consume 20–30% of usable acreage on flat sites. Multi-owner assemblages where one heir won't sign. Septic-to-sewer conversion requirements that blow up the pro forma. Knowing which of these is on your target site before you go under contract is the difference between a deal and a mistake.",
          },
        ],
        closingCtas: [
          { text: "Have a specific site or criteria in mind?", buttonLabel: "Start the Conversation", to: "/contact" },
        ],
      }}
    />
  );
}