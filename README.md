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

## GitHub Pages-re hosztolás

1. Hozz létre egy repót a GitHub-on (pl. `hazaspar-oldal`), és told fel a projekt fájljait.
2. A `vite.config.js`-ben cseréld le a `base: '/REPO-NEVE/'` sort a saját repód nevére (a lezáró `/`-eket hagyd meg). Ha a repó neve pontosan `felhasznalonev.github.io`, akkor legyen `base: '/'`.
3. Telepítsd a függőségeket, ha még nem tetted: `npm install`.
4. Futtasd: `npm run deploy` — ez lebuildeli az oldalt, és feltölti egy `gh-pages` nevű branch-re.
5. A GitHub repó **Settings → Pages** menüjében válaszd forrásnak a `gh-pages` branch-et (`/ (root)` mappával).
6. Néhány perc múlva az oldal elérhető lesz itt: `https://felhasznalonev.github.io/REPO-NEVE/`.

A routing `HashRouter`-t használ (`#/bizonysagtetel` stílusú URL-ek), így GitHub Pages-en frissítéskor sem esik 404-be egyik aloldal sem sem — ezt nem kell külön beállítani.

## Amit ki kell töltened

A `[szögletes zárójeles]` szövegrészek helyőrzők — ezeket cseréld le a valódi nevekre, történetekre és adatokra a megfelelő `.jsx` fájlokban.
