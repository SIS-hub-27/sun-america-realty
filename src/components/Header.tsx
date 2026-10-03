import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/listings", label: "Listings" },
  { to: "/services", label: "Services" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

const MARKET_LINKS = [
  { to: "/market", label: "Tampa Bay Overview" },
  { to: "/markets/hillsborough", label: "Hillsborough County" },
  { to: "/markets/pinellas", label: "Pinellas County" },
  { to: "/markets/pasco", label: "Pasco County" },
  { to: "/markets/hernando", label: "Hernando County" },
  { to: "/markets/polk", label: "Polk County" },
] as const;

const ICP_LINKS = [
  { to: "/for-sellers", label: "Sellers" },
  { to: "/for-investors", label: "Passive Investors" },
  { to: "/for-buyers", label: "Buyers & Developers" },
  { to: "/for-owner-users", label: "Owner-Users" },
  { to: "/for-repositioning-investors", label: "Repositioning Investors" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [icpOpen, setIcpOpen] = useState(false);
  const [marketOpen, setMarketOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-[#333333] border-b-2 border-[var(--brand-red)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Sun America Realty home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV.slice(0, 1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-data text-sm font-semibold uppercase tracking-[0.15em] text-[#333333] transition-colors hover:text-[var(--brand-red)]"
              activeProps={{ className: "font-data text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-red)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMarketOpen(true)}
            onMouseLeave={() => setMarketOpen(false)}
          >
            <button
              type="button"
              onClick={() => setMarketOpen((v) => !v)}
              className="flex items-center gap-1 font-data text-sm font-semibold uppercase tracking-[0.15em] text-[#333333] hover:text-[var(--brand-red)]"
              aria-haspopup="menu"
              aria-expanded={marketOpen}
            >
              Market <ChevronDown className="h-4 w-4" />
            </button>
            {marketOpen && (
              <div className="absolute left-0 top-full pt-3" role="menu">
                <div className="min-w-[240px] bg-white border-2 border-[var(--brand-navy)]/15 shadow-lg py-2">
                  {MARKET_LINKS.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setMarketOpen(false)}
                      className="block px-5 py-3 font-data text-xs font-semibold uppercase tracking-[0.15em] text-[#333333] hover:bg-[var(--brand-light-gray)] hover:text-[var(--brand-red)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-data text-sm font-semibold uppercase tracking-[0.15em] text-[#333333] transition-colors hover:text-[var(--brand-red)]"
              activeProps={{ className: "font-data text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-red)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setIcpOpen(true)}
            onMouseLeave={() => setIcpOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIcpOpen((v) => !v)}
              className="flex items-center gap-1 font-data text-sm font-semibold uppercase tracking-[0.15em] text-[#333333] hover:text-[var(--brand-red)]"
              aria-haspopup="menu"
              aria-expanded={icpOpen}
            >
              Who We Work With <ChevronDown className="h-4 w-4" />
            </button>
            {icpOpen && (
              <div className="absolute right-0 top-full pt-3" role="menu">
                <div className="min-w-[240px] bg-white border-2 border-[var(--brand-navy)]/15 shadow-lg py-2">
                  {ICP_LINKS.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setIcpOpen(false)}
                      className="block px-5 py-3 font-data text-xs font-semibold uppercase tracking-[0.15em] text-[#333333] hover:bg-[var(--brand-light-gray)] hover:text-[var(--brand-red)]"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-[#333333]"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-[#333333]/10 bg-white">
          <div className="px-4 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="font-data text-base font-semibold uppercase tracking-[0.15em] text-[#333333] py-3 border-b border-[#333333]/10"
                activeProps={{ className: "font-data text-base font-semibold uppercase tracking-[0.15em] text-[var(--brand-red)] py-3 border-b border-[#333333]/10" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/70">
              Market
            </div>
            {MARKET_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-data text-base font-semibold uppercase tracking-[0.15em] text-[#333333] py-3 border-b border-[#333333]/10 pl-3"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/70">
              Who We Work With
            </div>
            {ICP_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-data text-base font-semibold uppercase tracking-[0.15em] text-[#333333] py-3 border-b border-[#333333]/10 pl-3"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}