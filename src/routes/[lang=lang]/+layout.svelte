<script lang="ts">
  import { page } from '$app/state';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import type { Language } from '$lib/i18n/config';

  let { data, children } = $props();
  const lang = $derived(data.lang as Language);
  const isHome = $derived(page.route.id === '/[lang=lang]');
</script>

{#if !isHome}
  <SiteHeader {lang} />
{/if}

<main class:subpage={!isHome}>{@render children()}</main>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    /*
     * Height of the fixed orange bar. Pinned rather than left to the font's
     * metrics so the 8px gap below it is exact: every page and the nav
     * overlay space themselves off this value.
     */
    --header-height: 40px;

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
    padding-top: var(--header-height);
  }

</style>
