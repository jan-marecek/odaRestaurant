# ODA Restaurant

Statický web postavený na SvelteKit a `@sveltejs/adapter-static`.

## Vývoj

Vyžaduje Node.js 20.19 nebo novější.

```sh
npm install
npm run dev
```

## Statický build

```sh
npm run check
npm run build
```

Výstup se vytvoří v adresáři `build/`.

## Struktura webu

- `/` přesměruje na výchozí českou verzi `/cz/`
- české stránky používají prefix `/cz/`
- anglické stránky používají prefix `/en/`
- překlady a navigace jsou v `src/lib/data/content.ts`
- údaje restaurace a menu jsou v `src/lib/data/restaurant.ts`
- lokalizované URL jsou mapované v `src/lib/i18n/routes.ts`

`cz` je veřejný URL prefix. V HTML se pro českou verzi používá standardní locale
`cs-CZ`, které je vhodné také pro budoucí `hreflang` a strukturovaná data.
