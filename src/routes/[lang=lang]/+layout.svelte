<script lang="ts">
  import { page } from '$app/state';
  import OdaLogo from '$lib/components/OdaLogo.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import type { Language } from '$lib/i18n/config';
  import { routePath } from '$lib/i18n/routes';

  let { data, children } = $props();
  const lang = $derived(data.lang as Language);
  const isHome = $derived(page.route.id === '/[lang=lang]');
</script>

{#if !isHome}
  <SiteHeader {lang} />
  <a
    class="home-logo"
    href={routePath(lang, 'home')}
    aria-label={lang === 'cz' ? 'Zpět na hlavní stránku' : 'Back to homepage'}
  >
    <OdaLogo />
  </a>
{/if}

<main class:subpage={!isHome}>{@render children()}</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    color: #111;
    background: #fff;
    font-family: 'PP Montreal', Arial, sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  :global(a) {
    color: inherit;
  }

  .subpage {
    padding-top: 2.5rem;
  }

  .home-logo {
    --oda-logo-width: clamp(4.5rem, 8vw, 7rem);
    --oda-logo-color: #ff5500;
    position: fixed;
    z-index: 800;
    right: 1.25rem;
    bottom: 1.25rem;
    display: block;
    line-height: 0;
  }

  .home-logo:hover {
    transform: scale(1.04);
  }

  @media (max-width: 40rem) {
    .home-logo {
      --oda-logo-width: 4.5rem;
      right: 0.75rem;
      bottom: 0.75rem;
    }
  }
</style>
