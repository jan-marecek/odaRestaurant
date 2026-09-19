<script lang="ts">
  import PageIntro from '$lib/components/PageIntro.svelte';
  import { content } from '$lib/data/content';
  import { restaurant } from '$lib/data/restaurant';
  import type { Language } from '$lib/i18n/config';

  let { data } = $props();
  const lang = $derived(data.lang as Language);
  const t = $derived(content[lang]);
  const copy = $derived(t.pages[data.route]);
</script>

<svelte:head>
  <title>{copy.title} | ODA Restaurant</title>
  <meta name="description" content={copy.intro} />
</svelte:head>

<PageIntro title={copy.title} intro={copy.intro} />

{#if data.route === 'menu'}
  <section class="content-section">
    {#if restaurant.menu.length}
      {#each restaurant.menu as category}
        <h2>{category.name[lang]}</h2>
        {#each category.items as item}
          <article class="menu-item">
            <h3>{item.name[lang]}</h3>
            <span>{item.price} {item.currency}</span>
            {#if item.description}<p>{item.description[lang]}</p>{/if}
          </article>
        {/each}
      {/each}
    {:else}
      <p>{t.common.menuComingSoon}</p>
    {/if}
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

  .menu-item {
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 1rem 0;
    border-top: 1px solid;
  }

  .menu-item h3,
  .menu-item p {
    margin: 0;
  }
</style>
