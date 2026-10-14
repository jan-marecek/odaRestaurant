<script lang="ts">
  type Item = {
    title: string;
    paragraphs?: string[];
    href?: string;
    external?: boolean;
  };

  let { items }: { items: Item[] } = $props();

  // The panel link repeats the row's title, but reads as running text rather
  // than a heading, so it takes a lowercase initial. Only the first character
  // is touched, leaving any proper noun later in the title alone.
  const lowerFirst = (value: string) => value.charAt(0).toLowerCase() + value.slice(1);
</script>

<div class="accordion">
  {#each items as item}
    <details class="accordion-item">
      <summary>
        <span>{item.title}</span>
        <span class="accordion-arrow" aria-hidden="true">↓</span>
      </summary>
      <div class="accordion-panel">
        {#each item.paragraphs ?? [] as paragraph}
          <p>{paragraph}</p>
        {/each}
        {#if item.href}
          <p class="accordion-link">
            {#if item.external}
              <a target="_blank" rel="noreferrer" href={item.href}>{lowerFirst(item.title)}</a>
            {:else}
              <a href={item.href}>{lowerFirst(item.title)}</a>
            {/if}
          </p>
        {/if}
      </div>
    </details>
  {/each}
</div>

<style>
  /*
   * Type is inherited from the page, so the rows pick up 40px / 32px and
   * line-height 1 automatically. Vertical padding carries the same
   * 0.1em half-leading compensation as the rest of the subpages, so the
   * gap between a rule and the text next to it reads as a true 8px.
   */
  .accordion-item {
    border-bottom: 1px solid;
  }

  summary {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1em;
    padding: calc(8px + 0.1em) 0;
    cursor: pointer;
    list-style: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /*
   * Clicking a summary focuses it and the browser draws a box round the
   * whole row. Drop that for pointer input but keep a ring for keyboard
   * users, who have nothing else to go on.
   */
  summary:focus {
    outline: none;
  }

  summary:focus-visible {
    outline: 2px solid;
    outline-offset: 2px;
  }

  /* Safari still paints the disclosure triangle without this. */
  summary::-webkit-details-marker {
    display: none;
  }

  .accordion-arrow {
    display: inline-block;
    flex-shrink: 0;
  }

  details[open] .accordion-arrow {
    transform: rotate(180deg);
  }

  .accordion-panel {
    padding-bottom: calc(8px + 0.1em);
  }

  .accordion-panel p {
    margin: 0 0 1em;
    font: inherit;
  }

  .accordion-panel p:last-child {
    margin-bottom: 0;
  }

  .accordion-link a {
    text-decoration: none;
  }

  .accordion-link a:hover,
  .accordion-link a:focus-visible {
    text-decoration: underline;
  }

  @media (prefers-reduced-motion: no-preference) {
    .accordion-arrow {
      transition: transform 150ms ease;
    }
  }
</style>
