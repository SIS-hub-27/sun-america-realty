# Sun America Realty

Production website for Sun America Realty, LLC.

## Source of truth
- Repository: SIS-hub-27/sun-america-realty
- Hosting target: Netlify
- Production domain: https://sunamericarealty.com
- Framework: TanStack Start + Vite
- Build command: `npm run build`
- Publish directory: `dist/client`

## Migration status
This repository was extracted from the prior Lovable project on October 3, 2026. The site design, listings, market pages, services, audience pages, imagery, and core copy were preserved for migration continuity.

Migration changes:
- Removed Brian Orr from Sun America contact/structured data.
- Replaced Lovable canonical URLs with sunamericarealty.com.
- Replaced the Lovable/Supabase lead-submission dependency with Netlify Forms.
- Replaced Lovable/Cloudflare build configuration with Netlify's supported TanStack Start deployment plugin.

Property listing information should be reviewed with Sun America before material changes or publication of new inventory.

## Forms
Netlify Forms are declared in `public/netlify-forms.html` for:
- `contact`
- `lead-capture`

Configure form notification recipients in Netlify after the first successful deploy.
