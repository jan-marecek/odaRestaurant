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
  const addressCity = $derived(lang === 'cz' ? restaurant.address.city : 'Prague 3');
  const mapsUrl = 'https://www.google.com/maps/place/Oda/@50.0774881,14.4594925,17z/data=!3m1!4b1!4m6!3m5!1s0x470b93558b172d03:0x86069953c93f77d4!8m2!3d50.0774881!4d14.4620674!16s%2Fg%2F11xtcrfkh2?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D';
  const phoneUrl = $derived(`tel:${restaurant.phone.replace(/\s/g, '')}`);
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
      {#if copy.reservationInfo}
        <section class="reservation-info">
          {#each copy.reservationInfo.sections as section}
            <section>
              {#if section.title}
                <h2>
                  {#if section.reservationLink}
                    <a target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{section.title}</a>
                  {:else if section.link}
                    <a href={routePath(lang, section.link)}>{section.title}</a>
                  {:else}
                    {section.title}
                  {/if}
                </h2>
              {/if}
              {#if section.paragraphs}
                {#each section.paragraphs as paragraph}<p>{paragraph}</p>{/each}
              {:else}
                <p>
                  {section.text}{#if section.email}<a href={`mailto:${section.email}`}>{section.email}</a>{/if}{section.suffix ?? ''}
                </p>
              {/if}
            </section>
          {/each}
          {#if copy.reservationInfo.closing}<p class="reservation-closing">{copy.reservationInfo.closing}</p>{/if}
        </section>
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
      <p><a target="_blank" rel="noreferrer" href={mapsUrl}>{restaurant.address.street}</a></p>
      <p><a target="_blank" rel="noreferrer" href={mapsUrl}>{restaurant.address.postalCode}, {addressCity}</a></p>
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
      <p><a class="reservation-link" target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{t.common.reservation}</a></p>
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
    margin-top: -2.5rem;
    padding-top: 2.5rem;
    overflow: auto;
    background: #bdbdbd;
  }

  .white-page {
    background: #fff;
  }

  .visit-content {
    padding: 8px;
    font-size: 28px;
    line-height: 1.2;
  }

  .reservation-info {
    max-width: 70rem;
  }

  .reservation-info p {
    margin: 0;
    font: inherit;
  }

  .reservation-info h2 {
    margin: 3rem 0 0.5rem;
    font: inherit;
    font-weight: 500;
    text-decoration: underline;
  }

  .reservation-info section {
    margin-bottom: 1rem;
  }

  .reservation-info section p + p {
    margin-top: 1rem;
  }

  .reservation-closing {
    margin-top: 1.5rem;
  }

  .about-copy {
    max-width: 64rem;
    padding: 8px;
    font-size: clamp(1.15rem, 2.2vw, 1.75rem);
    line-height: 1.2;
  }

  .about-copy p {
    margin: 0 0 1.2em;
  }

  .contact-details {
    padding: 8px;
    font-style: normal;
    font-size: 28px;
    line-height: 1.2;
  }

  .contact-details p {
    margin: 0;
  }

  .contact-details a {
    text-decoration: none;
  }

  .contact-details .reservation-link {
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

  @media (max-width: 40rem) {
    .menu-links {
      grid-template-columns: 1fr;
    }
  }
</style>
