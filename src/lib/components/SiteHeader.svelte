<script lang="ts">
  import { page } from '$app/state';
  import { content } from '$lib/data/content';
  import { restaurant } from '$lib/data/restaurant';
  import type { Language } from '$lib/i18n/config';
  import { routePath, translatedPath } from '$lib/i18n/routes';

  let { lang }: { lang: Language } = $props();
  let menuOpen = $state(false);

  const copy = $derived(content[lang].common);
  const otherLanguage = $derived(lang === 'cz' ? 'en' : 'cz');
  const addressCity = $derived(lang === 'cz' ? restaurant.address.city : 'Prague 3');
  const mapsUrl = 'https://www.google.com/maps/place/Oda/@50.0774881,14.4594925,17z/data=!3m1!4b1!4m6!3m5!1s0x470b93558b172d03:0x86069953c93f77d4!8m2!3d50.0774881!4d14.4620674!16s%2Fg%2F11xtcrfkh2?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D';
  const phoneUrl = `tel:${restaurant.phone.replace(/\s/g, '')}`;
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && (menuOpen = false)} />

<header class:menu-open={menuOpen}>
  <nav class="top-menu" aria-label={lang === 'cz' ? 'Hlavní navigace' : 'Main navigation'}>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={mapsUrl}>{restaurant.address.street}, {restaurant.address.postalCode}, {addressCity}</a>
    {#each restaurant.openingHours as hours}
      <p class="desktop-link">{hours.days[lang]} {hours.opens.slice(0, 2)}-{hours.closes.slice(0, 2)}</p>
    {/each}
    <a class="desktop-link" href={phoneUrl}>{restaurant.phone}</a>

    <a class="desktop-link" href={routePath(lang, 'food')}>{copy.foodMenu}</a>
    <a class="desktop-link" href={routePath(lang, 'drinks')}>{copy.drinks}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{copy.reservation}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.voucherUrl}>{copy.vouchers}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.socialLinks[0]}>@oda.prague</a>
    <a class="language-link" href={translatedPath(page.url.pathname, otherLanguage)} onclick={() => (menuOpen = false)}>{otherLanguage === 'cz' ? 'Cz' : 'En'}</a>

    <button
      class="mobile-menu-toggle"
      type="button"
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      onclick={() => (menuOpen = !menuOpen)}
    >{menuOpen ? copy.menuClose : copy.menuOpen}</button>
  </nav>

  <div class="mobile-overlay" id="mobile-menu" aria-hidden={!menuOpen}>
    <p><a target="_blank" rel="noreferrer" href={mapsUrl}>{restaurant.address.street}</a></p>
    <p><a target="_blank" rel="noreferrer" href={mapsUrl}>{restaurant.address.postalCode}, {addressCity}</a></p>
    <br />
    {#each restaurant.openingHours as hours}
      <p>{hours.days[lang]} {hours.opens.slice(0, 2)}-{hours.closes.slice(0, 2)}</p>
    {/each}
    <br />
    <p><a href={phoneUrl}>{restaurant.phone}</a></p>
    <br />
    <p><a href={routePath(lang, 'food')} onclick={() => (menuOpen = false)}>{copy.foodMenu}</a></p>
    <p><a href={routePath(lang, 'drinks')} onclick={() => (menuOpen = false)}>{copy.drinks}</a></p>
    <br />
    <p><a target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{copy.reservation}</a></p>
    <p><a target="_blank" rel="noreferrer" href={restaurant.voucherUrl}>{copy.vouchers}</a></p>
    <br />
    <p><a target="_blank" rel="noreferrer" href={restaurant.socialLinks[0]}>@oda.prague</a></p>
  </div>
</header>

<style>
  .top-menu {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    padding: 8px;
    background: #ff5500;
    color: #000;
    font-family: 'PP Montreal', Arial, sans-serif;
    font-size: 18px;
    line-height: normal;
    -webkit-font-smoothing: antialiased;
  }

  .top-menu p,
  .mobile-overlay p {
    margin: 0;
    cursor: default;
  }

  .top-menu a,
  .top-menu button,
  .mobile-overlay a {
    padding: 0;
    border: 0;
    color: #000;
    background: none;
    font: inherit;
    text-decoration: none;
  }

  .top-menu a:hover,
  .mobile-overlay a:hover {
    text-decoration: underline;
  }

  .language-link {
    position: absolute;
    right: 8px;
  }

  .mobile-menu-toggle,
  .mobile-overlay {
    display: none;
  }

  @media (max-width: 1220px) {
    .top-menu {
      justify-content: space-between;
    }

    .desktop-link {
      display: none;
    }

    .mobile-menu-toggle {
      display: inline-block;
      cursor: pointer;
    }

    .mobile-overlay {
      position: fixed;
      z-index: 900;
      inset: 0;
      padding: 45px 8px 8px;
      background: #bdbdbd;
      color: #000;
      font-family: 'PP Montreal', Arial, sans-serif;
      font-size: 18px;
      line-height: 1.2;
      -webkit-font-smoothing: antialiased;
    }

    .menu-open .mobile-overlay {
      display: block;
    }
  }
</style>
