import { CTAButton } from "./CTAButton";

type Status = "Active" | "Under Contract";

export type Listing = {
  name: string;
  location: string;
  acreage?: string;
  zoning?: string;
  detail?: string;
  price?: string;
  status: Status;
  image: string;
};

export function ListingCard({ listing }: { listing: Listing }) {
  const isUC = listing.status === "Under Contract";
  return (
    <article className="group flex flex-col bg-white border border-[oklch(0.9_0_0)]">
      <div className="relative aspect-[3/2] overflow-hidden bg-[var(--brand-navy)]">
        <img
          src={listing.image}
          alt={`Aerial view of ${listing.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
          width={1200}
          height={800}
        />
        {isUC && (
          <div className="absolute top-4 left-4 bg-[var(--brand-navy)] text-white font-data text-xs font-semibold uppercase tracking-[0.2em] px-3 py-2">
            Under Contract
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">
          {listing.name}
        </h3>
        <div className="mt-1 font-body text-sm text-[var(--brand-dark-gray)]/80">{listing.location}</div>

        <dl className="mt-5 grid grid-cols-2 gap-y-3 gap-x-4 font-data text-sm">
          {listing.acreage && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-dark-gray)]/60">Acreage</dt>
              <dd className="mt-0.5 font-semibold text-[var(--brand-navy)]">{listing.acreage}</dd>
            </div>
          )}
          {listing.zoning && (
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-dark-gray)]/60">Zoning</dt>
              <dd className="mt-0.5 font-semibold text-[var(--brand-navy)]">{listing.zoning}</dd>
            </div>
          )}
          {listing.detail && (
            <div className="col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-dark-gray)]/60">Detail</dt>
              <dd className="mt-0.5 font-semibold text-[var(--brand-navy)]">{listing.detail}</dd>
            </div>
          )}
          {listing.price && (
            <div className="col-span-2 border-t border-[oklch(0.9_0_0)] pt-3">
              <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--brand-dark-gray)]/60">Asking Price</dt>
              <dd className="mt-0.5 font-display text-2xl font-extrabold uppercase text-[var(--brand-red)]">{listing.price}</dd>
            </div>
          )}
        </dl>

        <div className="mt-6 pt-2">
          <CTAButton to="/contact" variant="primary" className="w-full">
            {isUC ? "Inquire About Similar" : "Contact a Broker"}
          </CTAButton>
        </div>
      </div>
    </article>
  );
}