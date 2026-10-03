import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import ogImage from "@/assets/og-default.jpg";

const SITE_URL = "https://sunamerica.lovable.app";

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${SITE_URL}/#organization`,
  name: "SUN AMERICA REALTY, LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-192.png`,
  image: `${SITE_URL}${ogImage}`,
  telephone: "+1-352-437-3059",
  email: "info@sunamericarealty.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14341 7th St.",
    addressLocality: "Dade City",
    addressRegion: "FL",
    postalCode: "33523",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Tampa–St. Petersburg–Clearwater Metropolitan Statistical Area" },
    { "@type": "AdministrativeArea", name: "Hillsborough County, Florida" },
    { "@type": "AdministrativeArea", name: "Pinellas County, Florida" },
    { "@type": "AdministrativeArea", name: "Pasco County, Florida" },
    { "@type": "AdministrativeArea", name: "Hernando County, Florida" },
    { "@type": "AdministrativeArea", name: "Polk County, Florida" },
  ],
  knowsAbout: [
    "Commercial land brokerage",
    "Land acquisition",
    "Entitlements",
    "Site assembly",
    "Deal structuring",
    "Commercial real estate investment",
  ],
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Sun America Realty, LLC",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sun America Realty, LLC | Greater Tampa Bay Commercial Real Estate" },
      { name: "description", content: "Commercial real estate brokerage and investment across Greater Tampa Bay — Hillsborough, Pinellas, Pasco, Hernando, and Polk counties. Land, development, and income-producing properties." },
      { name: "author", content: "SUN AMERICA REALTY, LLC" },
      { property: "og:site_name", content: "Sun America Realty, LLC" },
      { property: "og:title", content: "Sun America Realty, LLC | Greater Tampa Bay Commercial Real Estate" },
      { property: "og:description", content: "Commercial real estate brokerage and investment across Greater Tampa Bay — land, development, and income-producing properties." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sun America Realty, LLC | Greater Tampa Bay Commercial Real Estate" },
      { name: "twitter:description", content: "Commercial real estate brokerage and investment across Greater Tampa Bay — land, development, and income-producing properties." },
      { property: "og:image", content: `${SITE_URL}${ogImage}` },
      { name: "twitter:image", content: `${SITE_URL}${ogImage}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Sun America Realty, LLC" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@400;600;700;800&family=Barlow+Semi+Condensed:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(ORG_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(WEBSITE_JSONLD) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <Toaster richColors position="top-right" />
      </div>
    </QueryClientProvider>
  );
}