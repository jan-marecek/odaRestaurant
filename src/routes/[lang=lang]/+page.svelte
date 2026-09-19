<script lang="ts">
  import HomePage from '$lib/components/HomePage.svelte';
  import { content } from '$lib/data/content';
  import type { Language } from '$lib/i18n/config';

  let { data } = $props();
  const copy = $derived(content[data.lang as Language].pages.home);
</script>

<svelte:head>
  <title>{copy.title}</title>
  <meta name="description" content={copy.intro} />
</svelte:head>

<HomePage lang={data.lang as Language} />
