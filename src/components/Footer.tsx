import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/market", label: "Market" },
  { to: "/listings", label: "Listings" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const ICP = [
  { to: "/for-sellers", label: "Sellers" },
  { to: "/for-investors", label: "Passive Investors" },
  { to: "/for-buyers", label: "Buyers & Developers" },
  { to: "/for-owner-users", label: "Owner-Users" },
  { to: "/for-repositioning-investors", label: "Repositioning Investors" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:items-start">
          <div>
            <Logo variant="white" />
            <p className="mt-4 font-body text-sm text-white/70 max-w-xs">
              Commercial real estate brokerage and investment across Greater Tampa Bay.
            </p>
          </div>
          <nav className="flex flex-col gap-2">
            <div className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Navigate</div>
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-data text-sm font-semibold uppercase tracking-[0.15em] text-white/80 hover:text-[var(--brand-red)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-2">
            <div className="font-data text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-1">Who We Work With</div>
            {ICP.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-data text-sm font-semibold uppercase tracking-[0.15em] text-white/80 hover:text-[var(--brand-red)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="font-body text-sm text-white/80 space-y-1">
            <div className="font-data font-semibold uppercase tracking-[0.15em] text-white">SUN AMERICA REALTY, LLC</div>
            <div>14341 7TH ST.</div>
            <div>DADE CITY, FL 33523</div>
            <div>
              <a href="tel:+13524373059" className="hover:text-[var(--brand-red)]">(352) 437-3059</a>
            </div>
            <div>
              <a href="mailto:info@sunamericarealty.com" className="hover:text-[var(--brand-red)]">info@sunamericarealty.com</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/60 font-body">
          All information believed reliable but not guaranteed. © 2026 Sun America Realty LLC.
        </div>
      </div>
    </footer>
  );
}