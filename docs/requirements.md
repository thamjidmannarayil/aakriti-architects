# Requirements and scope

## Source status

- Design inspected: Figma file `w60SINabBjmrfayFY1Maig`, node `1:3`, Main Page, 1440 × 3037.
- High-fidelity design context and reference screenshot were returned.
- No PRD was attached or found. No claim of PRD compliance can be made.
- No existing codebase, design library, or Code Connect mapping was available to reuse.

## Observed design → implementation

| Figma section | Node | Implementation |
| --- | --- | --- |
| Hero and navigation | `4:52`, `8:99` | `features/home/components/hero.tsx`, `components/layout/site-header.tsx` |
| About | `21:138` | `features/home/components/about.tsx` |
| Services | `21:139` | `features/home/components/services.tsx` |
| Selected Projects | `21:141` | `features/projects/components/project-grid.tsx` |
| Featured Project | `21:140` | `features/projects/components/featured-project.tsx` |
| Testimonials | `11:50446` | `features/home/components/testimonials.tsx` |
| Contact and footer | `15:8669` | `components/layout/site-footer.tsx` |

## Implementation assumptions

- Single public marketing site, built with Next.js App Router and TypeScript.
- CSS Modules and CSS custom properties; no Tailwind dependency.
- Existing desktop design is translated into responsive grid/flex layouts.
- Mobile layout, consultation form, project detail pages, and About page are inferred scaffolding because these screens were not supplied.
- Navigation anchors point to landing-page sections. Project images open detail pages. Consultation links open the enquiry form.
- Figma spelling mistakes in navigation/headings were corrected for readability; sample marketing paragraphs remain placeholders.
- Figma shows five identically named service cards and one testimonial. These remain sample content; additional testimonials can be added through data. Controls are disabled when there is only one testimonial.
- Social URL destinations were not supplied. Icons are noninteractive until approved links are added.
- Privacy and terms have explicit content-pending routes.
- No login, user roles, property listing/search, favorites, admin panel, pricing, or payment workflow has been inferred.

## PRD details still required

| Area | Missing decision |
| --- | --- |
| Product scope | Architecture studio website versus property marketplace |
| Pages | Final sitemap and secondary screen designs |
| Content | Real project titles, services, testimonials, team copy, contact details |
| Integration | Consultation destination, CRM mapping, CMS/API schema, notification rules |
| Users | Authentication, roles, admin access if applicable |
| Search | Property/project filtering and pagination if applicable |
| Delivery | Hosting, environments, domains, acceptance criteria |
| Localization | Languages, RTL requirements, regional formats |

## Visual acceptance

Asset downloads and font binaries were unavailable. The scaffold preserves named slots and CSS tokens but is **not pixel-verified** against Figma. Import assets/fonts, then verify source identity, crop, mirrored hero house, display type, section spacing, icons, and desktop/mobile behavior before visual signoff.
