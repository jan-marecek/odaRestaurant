<script lang="ts">
  import PageIntro from '$lib/components/PageIntro.svelte';
  import MenuDocument from '$lib/components/MenuDocument.svelte';
  import { content } from '$lib/data/content';
  import { restaurant } from '$lib/data/restaurant';
  import type { Language } from '$lib/i18n/config';
  import { routePath } from '$lib/i18n/routes';

  let { data } = $props();
  const lang = $derived(data.lang as Language);
  const t = $derived(content[lang]);
  const copy = $derived(t.pages[data.route]);
</script>

<svelte:head>
  <title>{copy.title} | ODA Restaurant</title>
  <meta name="description" content={copy.intro} />
</svelte:head>

{#if data.route === 'food' || data.route === 'drinks'}
  <MenuDocument kind={data.route} {lang} />
{:else}
  <PageIntro title={copy.title} intro={copy.intro} />
{/if}

{#if data.route === 'menu'}
  <section class="content-section menu-links">
    <a href={routePath(lang, 'food')}>{t.common.foodMenu}<span aria-hidden="true">→</span></a>
    <a href={routePath(lang, 'drinks')}>{t.common.drinks}<span aria-hidden="true">→</span></a>
  </section>
{:else if data.route === 'contact'}
  <address class="content-section">
    <h2>{t.common.address}</h2>
    <p>{restaurant.address.street}<br />{restaurant.address.postalCode} {restaurant.address.city}</p>
    <p>
      <a href={`tel:${restaurant.phone.replace(/\s/g, '')}`}>{restaurant.phone}</a>
      {#if restaurant.email}<br /><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a>{/if}
    </p>
    <h2>{t.common.openingHours}</h2>
    {#each restaurant.openingHours as hours}
      <p>{hours.days[lang]}: {hours.opens}–{hours.closes}</p>
    {/each}
  </address>
{/if}

<style>
  .content-section {
    display: block;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1.25rem 6rem;
    font-style: normal;
  }

  .menu-links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .menu-links a {
    display: flex;
    min-height: 12rem;
    align-items: flex-end;
    justify-content: space-between;
    padding: 1.5rem;
    border: 1px solid;
    font-size: clamp(1.5rem, 4vw, 3rem);
    text-decoration: none;
  }

  .menu-links a:hover {
    color: #f3f0e8;
    background: #1f211d;
  }

  @media (max-width: 40rem) {
    .menu-links {
      grid-template-columns: 1fr;
    }
  }
</style>
