<script lang="ts">
  import PageIntro from '$lib/components/PageIntro.svelte';
  import MenuDocument from '$lib/components/MenuDocument.svelte';
  import Accordion from '$lib/components/Accordion.svelte';
  import { content } from '$lib/data/content';
  import { restaurant } from '$lib/data/restaurant';
  import type { Language } from '$lib/i18n/config';
  import { routePath } from '$lib/i18n/routes';

  let { data } = $props();
  const lang = $derived(data.lang as Language);
  const t = $derived(content[lang]);
  const copy = $derived(t.pages[data.route]);
  const addressCity = $derived(lang === 'cz' ? restaurant.address.city : 'Prague 3');
  const mapsUrl = 'https://www.google.com/maps/place/Oda/@50.0774881,14.4594925,17z/data=!3m1!4b1!4m6!3m5!1s0x470b93558b172d03:0x86069953c93f77d4!8m2!3d50.0774881!4d14.4620674!16s%2Fg%2F11xtcrfkh2?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D';
  const phoneUrl = $derived(`tel:${restaurant.phone.replace(/\s/g, '')}`);

  // The visit page splits its content in two: the untitled section is the
  // intro prose, every titled one becomes an accordion row.
  const visitSections = $derived(copy.reservationInfo?.sections ?? []);
  const visitIntro = $derived(
    visitSections.filter((section) => !section.title).flatMap((section) => section.paragraphs ?? [])
  );
  const visitPanels = $derived(
    visitSections
      .filter((section) => section.title)
      .map((section) => ({
        title: section.title as string,
        paragraphs: section.paragraphs ?? (section.text ? [section.text] : []),
        href: section.reservationLink
          ? restaurant.reservationUrl
          : section.link
            ? routePath(lang, section.link)
            : undefined,
        external: Boolean(section.reservationLink)
      }))
  );
</script>

<svelte:head>
  <title>{copy.title} | ODA Restaurant</title>
  <meta name="description" content={copy.metaDescription ?? copy.intro} />
</svelte:head>

<div
  class:gray-page={data.route === 'food' || data.route === 'drinks' || data.route === 'tasting' || data.route === 'visit' || data.route === 'about' || data.route === 'contact'}
  class:white-page={data.route === 'food' || data.route === 'drinks' || data.route === 'tasting'}
>
  {#if data.route === 'food' || data.route === 'drinks' || data.route === 'tasting'}
    <MenuDocument kind={data.route} {lang} />
  {:else if data.route === 'visit'}
    <div class="visit-content">
      {#each visitIntro as paragraph}
        <p class="visit-intro">{paragraph}</p>
      {/each}
      <Accordion items={visitPanels} />
      {#if copy.reservationInfo?.closing}
        <p class="reservation-closing">{copy.reservationInfo.closing}</p>
      {/if}
    </div>
  {:else if data.route === 'about'}
    <section class="about-copy">
      {#each copy.body ?? [] as paragraph}
        <p>{paragraph}</p>
      {/each}
    </section>
  {:else if data.route === 'contact'}
    <address class="contact-details">
      <!-- One address, one destination: a single link so hovering either line underlines both. -->
      <p>
        <a target="_blank" rel="noreferrer" href={mapsUrl}
          >{restaurant.address.street}<br />{restaurant.address.postalCode}, {addressCity}</a
        >
      </p>
      <br />
      {#each restaurant.openingHours as hours}
        <p>{hours.days[lang]} {hours.opens.slice(0, 2)}-{hours.closes.slice(0, 2)}</p>
      {/each}
      <p>{t.common.closedDays}</p>
      <br />
      <p><a href={phoneUrl}>{restaurant.phone}</a></p>
      {#if restaurant.email}<p><a href={`mailto:${restaurant.email}`}>{restaurant.email}</a></p>{/if}
      <p><a target="_blank" rel="noreferrer" href={restaurant.socialLinks[0]}>@oda.prague</a></p>
      <br />
      <p><a target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{t.common.reservation}</a></p>
    </address>
  {:else}
    <PageIntro title={copy.title} intro={copy.intro} />
  {/if}

  {#if data.route === 'menu'}
    <section class="content-section menu-links">
      <a href={routePath(lang, 'food')}>{t.common.foodMenu}<span aria-hidden="true">→</span></a>
      <a href={routePath(lang, 'drinks')}>{t.common.drinks}<span aria-hidden="true">→</span></a>
    </section>
  {/if}
</div>

<style>
  .content-section {
    display: block;
    max-width: 70rem;
    margin: 0 auto;
    padding: 0 1.25rem 6rem;
    font-style: normal;
  }

  .gray-page {
    min-height: 100vh;
    margin-top: calc(-1 * var(--header-height));
    padding-top: var(--header-height);
    overflow: auto;
    background: #d9d9d9;
  }

  .white-page {
    background: #fff;
  }

  /*
   * Subpage body copy (visit / about / contact). Measured off the design
   * mockups: 40px desktop, 32px mobile, line-height 1, and exactly one blank
   * line between paragraphs. Paragraph spacing is in em so it tracks the
   * font size across the breakpoint.
   *
   * On desktop the copy runs to half the page width; on mobile it is full
   * width. This is the only place the measure is set -- don't add max-width
   * to the inner wrappers.
   */
  .visit-content,
  .about-copy,
  .contact-details {
    /*
     * The font's content area is 1.2em (ascent .958 + descent .242) but
     * line-height is 1, so the glyphs overhang the line box by 0.1em top and
     * bottom. Add that back to the vertical padding, otherwise an accented
     * capital like "Ó" eats half the gap and 8px reads as 4px.
     */
    padding: calc(8px + 0.1em) 8px;
    font-size: 40px;
    line-height: 1;
  }

  @media (--desktop) {
    /*
     * 50vw, not 50%. Viewport units ignore the scrollbar, so the measure is
     * identical whether or not the page scrolls. With % the column lost half
     * the scrollbar's width the moment an accordion panel opened, which
     * rewrapped the copy above it.
     */
    .visit-content,
    .about-copy,
    .contact-details {
      max-width: 50vw;
    }
  }

  @media (--mobile) {
    .visit-content,
    .about-copy,
    .contact-details {
      font-size: 32px;
    }
  }

  .visit-intro {
    margin: 0 0 1em;
    font: inherit;
  }

  .reservation-closing {
    margin: 1em 0 0;
    font: inherit;
  }

  .about-copy p {
    margin: 0 0 1em;
  }

  .about-copy p:last-child {
    margin-bottom: 0;
  }

  .contact-details {
    font-style: normal;
  }

  .contact-details p {
    margin: 0;
  }

  /*
   * Links on the gray subpages sit flush in the copy and only underline on
   * hover. :focus-visible is included because a keyboard user otherwise has
   * no way to tell a link from the text around it.
   */
  .contact-details a {
    text-decoration: none;
  }

  .contact-details a:hover,
  .contact-details a:focus-visible {
    text-decoration: underline;
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

  @media (--mobile) {
    .menu-links {
      grid-template-columns: 1fr;
    }
  }
</style>
