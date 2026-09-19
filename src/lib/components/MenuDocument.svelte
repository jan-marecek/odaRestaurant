<script lang="ts">
  import { menuContent, type MenuItem } from '$lib/data/menu';
  import type { Language } from '$lib/i18n/config';

  let { lang, kind }: { lang: Language; kind: 'food' | 'drinks' } = $props();
  const menu = $derived(menuContent[lang]);
</script>

{#snippet itemRow(item: MenuItem)}
  <div class:subheading={!item.price && !item.description} class="menu-item">
    <div>
      {#if item.name}<h3>{item.name}</h3>{/if}
      {#if item.description}<p>{item.description}</p>{/if}
    </div>
    {#if item.price}<span>{item.price}</span>{/if}
  </div>
{/snippet}

<article class="menu-document">
  <svg class="menu-logo" aria-hidden="true" viewBox="-4 7 201 279">
    <path d="M96.53,73.36C36.29,73.36,0,116.22,0,177.62s36.29,104.25,96.53,104.25,96.14-42.86,96.14-104.25-36.29-104.25-96.14-104.25ZM96.53,254.84c-44.4,0-64.1-35.14-64.1-77.22s19.69-77.22,64.1-77.22,63.71,35.14,63.71,77.22-19.69,77.22-63.71,77.22Z" />
    <rect x="22.63" y="26.64" width="144.84" height="27.03" transform="translate(-3.36 9.13) rotate(-5.4)" />
  </svg>

  {#if kind === 'food'}
    <h1>{menu.food.title}</h1>
    <div class="food-list">
      {#each menu.food.items as item, index}
        {@render itemRow(item)}
        {#if index === 10 || index === 12}<div class="menu-space"></div>{/if}
      {/each}
      {@render itemRow(menu.food.tastingMenu)}
    </div>
  {:else}
    <h1>{menu.drinks.title}</h1>
    <div class="drink-columns">
      {#each menu.drinks.columns as column}
        <div class="drink-column">
          {#each column as section}
            <section class="drink-section">
              <div class="section-heading">
                <h2>{section.title}</h2>
                {#if section.price}<span>{section.price}</span>{/if}
              </div>
              {#if section.note}<p class="section-note">{section.note}</p>{/if}
              {#each section.items ?? [] as item}
                {@render itemRow(item)}
              {/each}
            </section>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</article>

<style>
  .menu-document {
    width: min(100% - 2rem, 52rem);
    min-height: 70rem;
    margin: 2rem auto 5rem;
    padding: clamp(2rem, 5vw, 4rem);
    color: #111;
    background: #fff;
    font-family: 'PP Montreal', Arial, sans-serif;
  }

  .menu-logo {
    display: block;
    width: 3.25rem;
    margin: 0 auto 1.5rem;
    fill: #000;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
    font: inherit;
  }

  h1 {
    padding-bottom: 0.25rem;
    border-bottom: 1px solid;
    font-size: 1rem;
  }

  .food-list {
    max-width: 42rem;
    margin-top: 2rem;
  }

  .menu-item {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1rem;
    margin-bottom: 1.2rem;
    font-size: 0.95rem;
    line-height: 1.15;
  }

  .menu-item h3,
  .menu-item span {
    font-weight: 500;
  }

  .menu-item p,
  .section-note {
    color: #777;
  }

  .menu-space {
    height: 1.25rem;
  }

  .drink-columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }

  .drink-section {
    margin-bottom: 2rem;
  }

  .section-heading,
  .subheading {
    padding-bottom: 0.25rem;
    border-bottom: 1px solid;
  }

  .section-heading {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .drink-section .menu-item {
    margin-bottom: 1rem;
  }

  .drink-section .subheading {
    margin-top: 0.5rem;
  }

  .section-note {
    max-width: 17rem;
    margin-bottom: 1rem;
    line-height: 1.25;
  }

  @media (max-width: 42rem) {
    .menu-document {
      width: 100%;
      min-height: 0;
      margin: 0;
      padding: 2rem 1.25rem 4rem;
      box-shadow: none;
    }

    .drink-columns {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
</style>
