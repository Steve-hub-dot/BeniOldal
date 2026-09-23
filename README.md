# Házaspár oldal — React + Vite + MUI

## Indítás

```bash
npm install
npm run dev
```

Ezután nyisd meg a terminálban megjelenő helyi címet (általában http://localhost:5173).

## Build éles verzióhoz

```bash
npm run build
```

A `dist` mappa tartalma bármelyik statikus tárhelyre (Netlify, Vercel, GitHub Pages, Cloudflare Pages) feltölthető.

## Szerkezet

- `src/pages/` — az öt oldal (Főoldal/Bemutatkozás, Bizonyságtétel, Misszió, Ajánlások, Infók)
- `src/components/Navbar.jsx`, `Footer.jsx` — közös elemek
- `src/components/PersonTabs.jsx` — újrafelhasználható tab-váltó a házaspár külön szövegeihez
- `src/theme.js` — a meleg elefántcsont–okker–zsálye MUI téma, Fraunces + Public Sans betűkkel

## Amit ki kell töltened

A `[szögletes zárójeles]` szövegrészek helyőrzők — ezeket cseréld le a valódi nevekre, történetekre és adatokra a megfelelő `.jsx` fájlokban.
