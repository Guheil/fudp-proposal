# Elyu's Food Park — Modern Editorial Website

A multi-page static concept website for Elyu's Food Park in San Fernando City, La Union.

## Pages

- `index.html` — modern after-dark home page
- `food.html` — food categories, selected public menu references, and vendor-ready directory
- `events.html` — editorial event formats and contact flow
- `about.html` — place story without invented business claims
- `visit.html` — directions, practical details, and embedded map
- `contact.html` — event invitation inquiry form, stall request guidance, and official contact path
- `404.html` — custom error page

## Design direction

- Modern, cinematic, and editorial rather than poster-like
- Flat logo-derived palette: warm paper, near-black, electric blue, yellow, and restrained pink
- No gradients
- No repeated bento-grid sections
- Large food photography and direct typography
- Transparent header over imagery, becoming solid after scrolling
- Responsive mobile navigation with explicit Home and Contact links

## Motion

GSAP and ScrollTrigger are loaded from cdnjs. The website includes:

- a brief once-per-session intro
- hero and page-title reveals
- image parallax and clipping reveals
- interactive craving selector
- hover-follow food previews on the directory page
- a pinned “One night at Elyu's” story on larger screens
- reduced-motion support

## Running locally

Open `index.html` directly, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publishing notes

The website uses publicly visible business information and selected public menu references. Before production launch, the owner should confirm:

- official address and map pin
- operating hours
- parking information
- complete vendor names and stall details
- current menu prices
- event schedules
- image usage permissions
- official business history and contact details
