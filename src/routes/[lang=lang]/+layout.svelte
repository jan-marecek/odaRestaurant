<script lang="ts">
  import { page } from '$app/state';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { localeByLanguage, type Language } from '$lib/i18n/config';
  import { routePath } from '$lib/i18n/routes';

  let { data, children } = $props();
  const lang = $derived(data.lang as Language);
  const isHome = $derived(page.url.pathname === routePath(lang, 'home'));
</script>

<svelte:head>
  <html lang={localeByLanguage[lang]}></html>
</svelte:head>

{#if !isHome}
  <SiteHeader {lang} />
{/if}

<main class:subpage={!isHome}>{@render children()}</main>

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
</style>
