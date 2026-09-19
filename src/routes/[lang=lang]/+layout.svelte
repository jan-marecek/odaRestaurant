<script lang="ts">
  import { page } from '$app/state';
  import { content } from '$lib/data/content';
  import { languageLabels, languages, localeByLanguage, type Language } from '$lib/i18n/config';
  import { routePath, translatedPath, type RouteKey } from '$lib/i18n/routes';

  let { data, children } = $props();
  const routeKeys: RouteKey[] = ['home', 'menu', 'about', 'contact', 'reservations'];
  const lang = $derived(data.lang as Language);
  const t = $derived(content[lang]);
  const isHome = $derived(page.url.pathname === routePath(lang, 'home'));
</script>

<svelte:head>
  <html lang={localeByLanguage[lang]}></html>
</svelte:head>

{#if !isHome}
  <header>
    <a class="brand" href={routePath(lang, 'home')}>ODA</a>
    <nav aria-label={lang === 'cz' ? 'Hlavní navigace' : 'Main navigation'}>
      {#each routeKeys as route}
        <a href={routePath(lang, route)}>{t.navigation[route]}</a>
      {/each}
    </nav>
    <div class="languages" aria-label={t.common.language}>
      {#each languages as language}
        <a
          href={translatedPath(page.url.pathname, language)}
          lang={localeByLanguage[language]}
          aria-current={language === lang ? 'true' : undefined}
        >{languageLabels[language]}</a>
      {/each}
    </div>
  </header>
{/if}

<main>{@render children()}</main>

{#if !isHome}
  <footer>
    <span>© {new Date().getFullYear()} ODA Restaurant</span>
    <a href={routePath(lang, 'contact')}>{t.navigation.contact}</a>
  </footer>
{/if}

<style>
  @font-face {
    font-family: 'PP Montreal';
    src: url('/fonts/PPNeueMontreal-Regular.woff2') format('woff2'),
      url('/fonts/PPNeueMontreal-Regular.woff') format('woff');
    font-display: swap;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    color: #1f211d;
    background: #f3f0e8;
    font-family: 'PP Montreal', Arial, sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  :global(a) {
    color: inherit;
  }

  header,
  footer {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    max-width: 90rem;
    margin: 0 auto;
    padding: 1.25rem;
  }

  header {
    justify-content: space-between;
  }

  .brand {
    font-size: 1.2rem;
    font-weight: 800;
    text-decoration: none;
    letter-spacing: 0.12em;
  }

  nav,
  .languages {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  nav a,
  .languages a,
  footer a {
    font-size: 0.85rem;
    text-underline-offset: 0.25rem;
  }

  .languages a:not([aria-current='true']) {
    opacity: 0.45;
  }

  footer {
    justify-content: space-between;
    border-top: 1px solid rgb(31 33 29 / 20%);
    font-size: 0.85rem;
  }

  @media (max-width: 48rem) {
    header {
      align-items: flex-start;
    }

    nav {
      display: none;
    }
  }
</style>
