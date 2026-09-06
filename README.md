# Oren's Pages (orensinger-ux.github.io)

Personal pages hub. Static files, no build step. Deploy = push to `main`;
GitHub Pages serves the repo root within about a minute.

## File ownership (one writer per file - edit only what you own)

| File | Owning agent | Update workflow |
|---|---|---|
| `index.html` | hub/migration agent | Edit the `PAGES` array only (marked in the file) to add/remove/re-stamp a page |
| `concert-scout.html` | daily concert scout | Regenerate or edit; commit each morning's refresh |
| `club-scout-bay-area.html` | daily club scout | Same |
| `att-speed-monitor.html` | (static renderer - do not edit for data) | Renders from the data file |
| `att-speed-data.js` | AT&T speed monitor | After each test: prepend one entry to `SPEED_TESTS` (newest first), commit this file only |
| `israel-trip-english.html`, `israel-trip-hebrew.html`, `israel-shows-oct-2026.html` | Israel trip pages agent | Edit in place when trip facts change |
| `my-tickets.html` | tickets/records agent | Edit in place when a confirmation lands |
| `bella-kay-portland.html` | Portland trip agent | Edit in place |

## Conventions

- Dark style, phone-first, self-contained HTML (no external assets).
- Every page: `<meta name="robots" content="noindex, nofollow">` and a
  `.home` pill button linking back to `index.html`.
- Action buttons are `mailto:oren.singer@gmail.com?subject=BUY: ...` /
  `DELETE PAGE: ...` - never forms or external services.
- Freshness stamp on every page; update it when the content changes.
- Site is public-but-unlisted (GitHub Pages free tier has no login gate).

## How to push (no local git credentials needed)

The GitHub integration (`tools github`) is read-only, so writes go through
github.com in the cloud browser (session is saved in the browser profile):
open the repo, use Add file > Upload files (or the pencil editor on one
file), commit to `main`. Pages deploys automatically.
