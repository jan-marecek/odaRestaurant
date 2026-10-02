<script lang="ts">
  import { base } from '$app/paths';
  import { restaurant } from '$lib/data/restaurant';
  import { menuContent, type MenuItem } from '$lib/data/menu';
  import type { Language } from '$lib/i18n/config';

  let { lang, kind }: { lang: Language; kind: 'food' | 'drinks' | 'tasting' } = $props();
  const menu = $derived(menuContent[lang]);
  const downloadHref = $derived(kind === 'tasting' ? '' : `${base}${restaurant.menuDocuments[kind]}`);
  const downloadLabel = $derived(
    lang === 'cz'
      ? kind === 'food'
        ? 'Stáhnout jídelní lístek (PDF)'
        : kind === 'drinks'
          ? 'Stáhnout nápojový lístek (PDF)'
          : ''
      : kind === 'food'
        ? 'Download food menu (PDF)'
        : kind === 'drinks'
          ? 'Download drinks menu (PDF)'
          : ''
  );
  const downloadFilename = $derived(kind === 'food' ? 'oda-jidlo.pdf' : kind === 'drinks' ? 'oda-napoje.pdf' : '');
</script>

{#snippet itemRow(item: MenuItem)}
  <div class:subheading={!item.price && !item.description} class:tight={item.tight} class="menu-item">
    <div>
      {#if item.name}<h3>{item.name}</h3>{/if}
      {#if item.description}<p>{item.description}</p>{/if}
    </div>
    {#if item.price}<span>{item.price}</span>{/if}
  </div>
{/snippet}

{#snippet dishRow(item: MenuItem)}
  <div class="menu-item">
    <div>
      {#if item.name}<h3>{item.name}</h3>{/if}
      {#if item.description}<p>{item.description}</p>{/if}
    </div>
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
      {#each menu.food.tastingMenus as item}
        {@render itemRow(item)}
      {/each}
    </div>
  {:else if kind === 'tasting'}
    <h1>{menu.tasting.title}</h1>
    <div class="tasting-list">
      {#each menu.tasting.courses as course, index}
        <div class="tasting-course">
          <span class="course-number">{index + 1}.</span>
          <div class="course-dishes">
            {#each course as dish}
              {@render dishRow(dish)}
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <h1>{menu.drinks.title}</h1>
    <div class="drink-columns">
      {#each menu.drinks.columns as column}
        <div class="drink-column">
          {#each column as section}
            <section class="drink-section">
              {#if section.title}
                <div class="section-heading">
                  <h2>{section.title}</h2>
                  {#if section.price}<span>{section.price}</span>{/if}
                </div>
              {/if}
              {#if section.note}<p class="section-note">{section.note}</p>{/if}
              {#each section.items ?? [] as item}
                {@render itemRow(item)}
              {/each}
            </section>
          {/each}
        </div>
      {/each}
    </div>

    <section class="drink-section drink-section--featured">
      <div class="section-heading">
        <h2>{menu.drinks.featured.title}</h2>
      </div>
      <div class="drink-columns">
        {#each menu.drinks.featured.columns as items}
          <div class="drink-column">
            {#each items as item}
              {@render itemRow(item)}
            {/each}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!--
  <a class="download-button" href={downloadHref} download={downloadFilename}>{downloadLabel}</a>
  -->
</article>

<style>
  .menu-document {
    width: min(100% - 2rem, 52rem);
    min-height: 56rem;
    margin: 1rem auto 2rem;
    padding: clamp(1.33rem, 3.33vw, 2.67rem) clamp(2rem, 5vw, 4rem);
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
    width: 100%;
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

  .tasting-list {
    width: 100%;
    margin-top: 2rem;
  }

  .tasting-course {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .course-number {
    flex-shrink: 0;
    width: 1.5rem;
    font-size: 0.95rem;
    font-weight: 500;
  }

  .course-dishes {
    flex: 1;
    min-width: 0;
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

  .menu-item.tight {
    margin-bottom: 0.2rem;
  }

  .drink-section .subheading {
    margin-top: 0.5rem;
  }

  /* .download-button {
    display: block;
    width: fit-content;
    margin: 3rem auto 0;
    padding: 0.75rem 1rem;
    border: 1px solid;
    color: #111;
    text-decoration: none;
  } */

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
      padding: 1.33rem 1.25rem 1.67rem;
      box-shadow: none;
    }

    .drink-columns {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
</style>
