# 🛍️ E-shop JanKaláb – Testovací úkol (Nuxt 3 + Tailwind CSS)

Tento projekt je výsledkem testovacího zadání pro pozici frontend developera. Cílem bylo vytvořit responzivní homepage e-shopu podle návrhu ve Figmě (desktop + mobil). Aplikace je postavena pomocí Nuxt 3, využívá moderní frontendové technologie a klade důraz na čistý kód, škálovatelnost a použitelnost.

## ✨ Použité technologie

- [Nuxt 3](https://nuxt.com) – framework postavený na Vue 3
- [TypeScript](https://www.typescriptlang.org/) – statické typování
- [Tailwind CSS](https://tailwindcss.com) – utility-first CSS framework
- [Pinia](https://pinia.vuejs.org/) – state management
- [@nuxt/image](https://image.nuxt.com/) – optimalizace obrázků s podporou Sharp
- [@nuxt/icon](https://icon.nuxt.com/) – použití SVG ikon
- [@vueuse/core](https://vueuse.org/) – Vue composables (např. `useIntervalFn`)
- [vee-validate](https://vee-validate.logaretm.com/v4/) + `@vee-validate/rules` – validace formulářů
- [ESLint](https://eslint.org/) – lintování kódu (s konfigurací `@antfu/eslint-config`)
- [Sharp](https://sharp.pixelplumbing.com/) – použit s Nuxt Image
- [Vue Router](https://router.vuejs.org/) – routing (součást Nuxt)
- [VueUse Nuxt](https://vueuse.org/integrations/nuxt/) – integrace VueUse do Nuxtu

## 🧩 Struktura projektu

```
components/
  app/              → Základní UI: Navbar, Footer, tlačítka
  homepage/         → Sekce homepage: Banner, Cards, Subscription
layouts/
  default.vue       → Výchozí layout stránky s navbar a footerem
pages/
  index.vue         → Domovská stránka
public/images/      → Obrázky pro bannery a produkty
server/
  api/              → Mock endpoint pro produkty
  data/             → Statické JSON-like data
stores/
  CartStore.ts      → Pinia store pro košík
plugins/
  pinia.ts          → Registrace Pinia
types/
  product.d.ts      → Typové definice pro produkt
```

## 🔧 Instalace a spuštění

Instalace závislostí:

```bash
pnpm install
```

Spuštění vývojového serveru:

```bash
pnpm dev
```

Build pro produkci:

```bash
pnpm build
```

Preview produkční verze:

```bash
pnpm preview
```

## ✅ Implementované funkce

- Responzivní layout pro desktop i mobil
- Automatické přepínání bannerů (carousel-like)
- Sekce s produkty s hover efekty a adaptivním layoutem
- Validace e-mailu
- Modulární komponentová struktura
- Optimalizace obrázků

## 🔜 Možnosti rozšíření

- Napojení na reálné API (např. Supabase)
- Dynamický routing pro detail produktu
- Autentizace uživatele a globální stav přihlášení
- Vícejazyčná podpora (i18n)
- Testování komponent (např. Vitest, Playwright)

## 🚀 Deployment

Projekt je připraven k nasazení na platformy jako [Vercel](https://vercel.com/) nebo [Netlify](https://www.netlify.com/).

---

Vytvořeno jako testovací úkol – Michaela Havlíková ✨

