import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { submitLead } from "@/lib/leads.functions";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton } from "@/components/CTAButton";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Larry Guilford & Brian Orr | Sun America Realty, LLC" },
      { name: "description", content: "Contact Sun America Realty for Greater Tampa Bay commercial real estate. Larry Guilford, Broker of Record, and Brian Orr, Sales Associate. (352) 437-3059." },
      { property: "og:title", content: "Contact | Sun America Realty, LLC" },
      { property: "og:description", content: "Buying, selling, or investing in commercial real estate — let us know how we can help." },
      { property: "og:url", content: "https://sunamerica.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://sunamerica.lovable.app/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Brian Orr",
          jobTitle: "Sales Associate",
          telephone: "+1-347-219-8825",
          email: "brian@sunamericarealty.com",
          worksFor: { "@type": "RealEstateAgent", name: "SUN AMERICA REALTY, LLC", url: "https://sunamerica.lovable.app" },
        }),
      },
    ],
  }),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const answers = `Name: ${name} | Phone: ${phone || "(not provided)"} | Message: ${message}`;
      await submitLead({
        data: {
          source: "contact-form",
          email,
          answers,
          page_source: "/contact",
        },
      });
      toast.success("Message received. We'll be in touch shortly.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      toast.error("Something went wrong. Email brian@sunamericarealty.com directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="bg-[var(--brand-navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="font-display text-5xl md:text-7xl font-extrabold uppercase leading-[0.95]">Contact Sun America Realty</h1>
          <p className="mt-6 font-display text-xl md:text-2xl font-semibold uppercase text-white/85 max-w-3xl">
            Buying, selling, or investing in commercial real estate — let us know how we can help.
          </p>
        </div>
      </section>

      {/* CONTACT BLOCKS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12">
            {[
              {
                name: "Larry Guilford",
                detail: "Broker of Record. In the Tampa Bay market since 1980. Four decades of land and commercial transactions across Greater Tampa Bay — from the first interchange deals on I-75 and I-275 through today's infill and repositioning across five counties. Knows this ground the way you learn it: deal by deal, over forty years.",
                phone: "(352) 437-3059",
                phoneHref: "+13524373059",
                email: "larry@sunamericarealty.com",
              },
              {
                name: "Brian Orr",
                detail: "Sales Associate. Real estate and business investor turned commercial broker. Background in wealth management, multi-asset investing, and business-development advisory. Brings an operator's underwriting discipline and a capital-markets lens to every transaction.",
                phone: "(347) 219-8825",
                phoneHref: "+13472198825",
                email: "brian@sunamericarealty.com",
              },
            ].map((p) => (
              <div key={p.name} className="border-t-2 border-[var(--brand-red)] pt-6 flex flex-col">
                <h2 className="font-display text-3xl md:text-4xl font-extrabold uppercase text-[var(--brand-navy)]">{p.name}</h2>
                <p className="mt-4 font-body text-base text-[var(--brand-dark-gray)]/90 leading-relaxed">{p.detail}</p>
                <dl className="mt-6 font-data text-sm space-y-2">
                  <div className="flex items-baseline gap-3">
                    <dt className="w-16 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/60">Phone</dt>
                    <dd><a className="font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-red)]" href={`tel:${p.phoneHref}`}>{p.phone}</a></dd>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <dt className="w-16 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-dark-gray)]/60">Email</dt>
                    <dd><a className="font-semibold text-[var(--brand-navy)] hover:text-[var(--brand-red)] break-all" href={`mailto:${p.email}`}>{p.email}</a></dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <SectionHeading>Tell us what you're working on.</SectionHeading>
          <form onSubmit={onSubmit} className="mt-10 grid gap-6">
            <div>
              <label htmlFor="name" className="block font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)] mb-2">Name</label>
              <input id="name" name="name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full border-2 border-[oklch(0.85_0_0)] bg-white px-4 py-3 font-body text-base text-[var(--brand-dark-gray)] focus:border-[var(--brand-navy)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)] mb-2">Email</label>
              <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border-2 border-[oklch(0.85_0_0)] bg-white px-4 py-3 font-body text-base text-[var(--brand-dark-gray)] focus:border-[var(--brand-navy)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="phone" className="block font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)] mb-2">Phone (optional)</label>
              <input id="phone" name="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full border-2 border-[oklch(0.85_0_0)] bg-white px-4 py-3 font-body text-base text-[var(--brand-dark-gray)] focus:border-[var(--brand-navy)] focus:outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block font-data text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-navy)] mb-2">Message</label>
              <textarea id="message" name="message" required rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="w-full border-2 border-[oklch(0.85_0_0)] bg-white px-4 py-3 font-body text-base text-[var(--brand-dark-gray)] focus:border-[var(--brand-navy)] focus:outline-none resize-y" />
            </div>
            <div className="pt-2">
              <CTAButton variant="primary" arrow={false} disabled={submitting}>
                {submitting ? "Sending…" : "Submit"}
              </CTAButton>
            </div>
          </form>
        </div>
      </section>

      {/* OFFICE / MAP */}
      <section className="bg-white border-t border-[var(--brand-navy)]/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <div className="bg-[var(--brand-light-gray)] p-8 md:p-10 border-l-4 border-[var(--brand-red)]">
            <div className="font-display text-2xl md:text-3xl font-extrabold uppercase text-[var(--brand-navy)] leading-tight">
              SUN AMERICA REALTY, LLC · 14341 7TH ST. · DADE CITY, FL 33523 · <a href="tel:+13524373059" className="hover:text-[var(--brand-red)]">(352) 437-3059</a>
            </div>
            <div className="mt-6 aspect-[16/9] w-full overflow-hidden border border-[var(--brand-navy)]/15">
              <iframe
                title="Sun America Realty office location in Dade City, FL"
                src="https://www.google.com/maps?q=14341+7th+St,+Dade+City,+FL+33523&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}