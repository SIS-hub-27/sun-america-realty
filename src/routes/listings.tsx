import { createFileRoute } from "@tanstack/react-router";
import { ListingCard, type Listing } from "@/components/ListingCard";
import img1Asset from "@/assets/blanton-mixed-use.jpg.asset.json";
import img2Asset from "@/assets/blanton-60-acres.png.asset.json";
import img3 from "@/assets/listing-3.jpg";
import img4 from "@/assets/listing-4.jpg";
import img5 from "@/assets/listing-5.jpg";
import img6Asset from "@/assets/the-block.png.asset.json";
import pascoMotorsAsset from "@/assets/pasco-motors.png.asset.json";

export const Route = createFileRoute("/listings")({
  component: ListingsPage,
  head: () => ({
    meta: [
      { title: "Listings — Commercial Land for Sale | Sun America Realty, LLC" },
      { name: "description", content: "Current commercial land listings along the I-75 corridor in Pasco County, Florida. Industrial, commercial, and infill development sites." },
      { property: "og:title", content: "Current Listings | Sun America Realty, LLC" },
      { property: "og:description", content: "Active and under-contract commercial land along the I-75 corridor." },
      { property: "og:url", content: "https://sunamericarealty.com/listings" },
    ],
    links: [{ rel: "canonical", href: "https://sunamericarealty.com/listings" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: LISTINGS_SEO.map((l, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Place",
              name: l.name,
              address: {
                "@type": "PostalAddress",
                addressLocality: l.locality,
                addressRegion: "FL",
                addressCountry: "US",
              },
              description: `${l.acreage} · ${l.zoning}${l.detail ? " · " + l.detail : ""}`,
            },
          })),
        }),
      },
    ],
  }),
});

const LISTINGS_SEO: { name: string; locality: string; acreage: string; zoning: string; detail?: string }[] = [
  { name: "Blanton Road · Mixed-Use Development Site", locality: "Dade City", acreage: "29 Acres", zoning: "I-1 Light Industrial / C-2 Commercial", detail: "140,000 SF Buildable · Road Frontage" },
  { name: "Blanton Road · Industrial Land", locality: "Dade City", acreage: "60 Acres", zoning: "I-1 Light Industrial", detail: "340,000 SF Buildable" },
  { name: "Blanton Road · Unentitled Road Frontage", locality: "Dade City", acreage: "20 Acres", zoning: "Unentitled", detail: "Road Frontage" },
  { name: "Blanton Road · Unentitled Road Frontage", locality: "Dade City", acreage: "10 Acres", zoning: "Unentitled", detail: "Road Frontage" },
  { name: "301 Project", locality: "Dade City", acreage: "1.6 Acres", zoning: "C-2 Commercial" },
  { name: "The Block", locality: "Dade City", acreage: "", zoning: "", detail: "Collection of buildings with multiple tenants · 14307 7th St" },
  { name: "Pasco Motors Building", locality: "Dade City", acreage: "", zoning: "", detail: "Redevelopment opportunity · 14341 7th St" },
];

const LISTINGS: Listing[] = [
  { name: "Blanton Road · Mixed-Use Development Site", location: "Dade City, FL", acreage: "29 Acres", zoning: "I-1 Light Industrial / C-2 Commercial", detail: "140,000 SF Buildable · Road Frontage", status: "Active", image: img1Asset.url },
  { name: "Blanton Road · Industrial Land", location: "Dade City, FL", acreage: "60 Acres", zoning: "I-1 Light Industrial", detail: "340,000 SF Buildable", status: "Active", image: img2Asset.url },
  { name: "Blanton Road · Unentitled Road Frontage", location: "Dade City, FL", acreage: "20 Acres", zoning: "Unentitled", detail: "Road Frontage · Adjacent to entitled parcels", status: "Active", image: img3 },
  { name: "Blanton Road · Unentitled Road Frontage", location: "Dade City, FL", acreage: "10 Acres", zoning: "Unentitled", detail: "Road Frontage · Adjacent 10 acres coming soon", status: "Under Contract", image: img4 },
  { name: "301 Project", location: "Dade City, FL", acreage: "1.6 Acres", zoning: "C-2 Commercial", status: "Under Contract", image: img5 },
  { name: "The Block", location: "14307 7th St, Dade City, FL", detail: "Collection of buildings with multiple tenants", status: "Active", image: img6Asset.url },
  { name: "Pasco Motors Building", location: "14341 7th St, Dade City, FL", detail: "Available for sale or master lease", status: "Active", image: pascoMotorsAsset.url },
];

function ListingsPage() {
  return (
    <>
      <section className="bg-[var(--brand-light-gray)] border-b border-[oklch(0.9_0_0)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-[var(--brand-navy)] leading-[0.95]">
            Sun America Listings
          </h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-[var(--brand-dark-gray)] max-w-3xl">
            Land, commercial buildings, and development sites across Greater Tampa Bay. Active inventory is concentrated in East Pasco today — off-market deals span all five counties. If you don't see what you're looking for, call.
          </p>
          <div className="mt-8 inline-block border-t-2 border-[var(--brand-red)] pt-3 font-data text-sm font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)]">
            PURCHASE · SELLER FINANCING · JOINT VENTURE · LP PARTICIPATION
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {LISTINGS.map((l, i) => (
              <ListingCard key={i} listing={l} />
            ))}
          </div>
          <p className="mt-16 font-body text-base md:text-lg text-[var(--brand-dark-gray)]/85 max-w-3xl">
            The right deal doesn't always make it to a listing page. Land, buildings, and off-market opportunities move through relationships. If you have a specific need in Pasco or Hernando County — reach out directly.
          </p>
        </div>
      </section>
    </>
  );
}