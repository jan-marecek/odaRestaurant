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
  {#if kind === 'food'}
    <h1>{menu.food.title}</h1>
    <div class="food-list">
      {#each menu.food.items as item, index}
        {@render itemRow(item)}
        {#if index === 9 || index === 11}<div class="menu-space"></div>{/if}
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
  /*
   * Not a centred white card any more: the menu sits flush left at the top
   * of the gray page, on the same 8px gutter as the other subpages. It keeps
   * its own 52rem measure and its own type scale.
   */
  .menu-document {
    display: block;
    max-width: 52rem;
    padding: 8px;
    color: #111;
    font-family: 'PP Montreal', Arial, sans-serif;
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

  /*
   * No extra gap between courses: the trailing .menu-item margin already
   * gives the same 1.2rem rhythm the food and drinks menus use, and the
   * course number is what marks the grouping.
   */
  .tasting-course {
    display: flex;
    gap: 1rem;
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

  @media (--mobile) {
    .drink-columns {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
</style>
