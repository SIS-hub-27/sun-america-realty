import { createFileRoute } from "@tanstack/react-router";
import { LeadCapturePage } from "@/components/LeadCapturePage";

const SITE_URL = "https://sunamericarealty.com";

export const Route = createFileRoute("/for-investors")({
  component: ForInvestorsPage,
  head: () => ({
    meta: [
      { title: "Your Money Is Moving. Is It Building Anything? | Sun America Realty, LLC" },
      { name: "description", content: "Passive participation in commercial real estate across Greater Tampa Bay — how LP structures work, how returns are generated, and what the tax treatment looks like." },
      { property: "og:title", content: "Your Money Is Moving. Is It Building Anything?" },
      { property: "og:description", content: "Passive LP participation in commercial real estate across Greater Tampa Bay." },
      { property: "og:url", content: `${SITE_URL}/for-investors` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/for-investors` }],
  }),
});

function ForInvestorsPage() {
  return (
    <LeadCapturePage
      slug="for-investors"
      hero={{
        headline: "Your Money Is Moving. Is It Building Anything?",
        body: "High-income professionals are the worst-served investors in America. You're making real money. Your financial advisor is moving it around. But at the end of the year, you're not meaningfully closer to not needing to work. There's another way — and it doesn't require you to become a landlord.",
      }}
      questions={[
        {
          prompt: "What does your current investment strategy look like?",
          options: [
            "Mostly stocks and mutual funds",
            "Real estate — I own rental property",
            "Mix of both",
            "Mostly cash / savings",
            "Working with a financial advisor",
          ],
        },
        {
          prompt: "What's your biggest frustration with your current approach?",
          options: [
            "Returns aren't where I want them",
            "Too much tax exposure",
            "I don't feel in control",
            "I don't have time to manage anything",
            "I'm not sure it's working",
          ],
        },
        {
          prompt: "What would passive real estate participation mean to you?",
          options: [
            "A tax-efficient income stream",
            "Portfolio diversification",
            "Building equity outside the market",
            "I'm not sure — I want to understand it first",
          ],
        },
      ]}
      gate={{
        headline: "Get the Passive Investor Guide",
        subhead: "How LP participation in commercial real estate actually works. Written for smart people who haven't done this before.",
        buttonLabel: "Send Me the Guide",
      }}
      gated={{
        headline: "How Passive Participation in Commercial Real Estate Actually Works",
        blocks: [
          {
            title: "You Don't Have to Operate It to Own It",
            body: "An LP (limited partner) structure allows you to participate in a real estate deal — and share in its returns — without managing the asset, dealing with tenants, or making operational decisions. The GP (general partner) operates the deal. You provide capital. Returns flow to you based on the agreed structure.",
          },
          {
            title: "What the Returns Look Like",
            body: "Commercial real estate LP deals typically target cash-on-cash returns of 6–10% annually on deployed capital, with additional upside at disposition. Returns come from two sources: operating income (rent) distributed periodically, and equity appreciation realized when the asset is sold or refinanced.",
          },
          {
            title: "The Tax Treatment",
            body: "Real estate generates depreciation — a non-cash expense that offsets taxable income. As an LP, you receive a K-1 that passes depreciation through to your return. For a high-income professional paying 37% federal income tax, this matters. The effective after-tax return on a real estate LP is often meaningfully higher than the headline number suggests.",
          },
          {
            title: "What Accredited Investor Actually Means",
            body: "To participate in a private placement LP deal, you need to qualify as an accredited investor. The threshold: $200,000 individual income ($300,000 joint) for the past two years, or $1M net worth excluding your primary residence. If you're a physician, dentist, or senior tech professional — there's a reasonable chance you already qualify and don't know it.",
          },
          {
            title: "What to Ask Before You Write a Check",
            body: "What's the GP's track record in this specific market? What's the basis on the deal? What's the exit strategy and timeline? What happens if the deal underperforms? These are the questions that separate a real opportunity from a story.",
          },
        ],
        closingCtas: [
          { text: "Want to understand what a Tampa Bay deal actually looks like?", buttonLabel: "Start the Conversation", to: "/contact" },
        ],
      }}
    />
  );
}