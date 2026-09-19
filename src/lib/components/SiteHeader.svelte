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
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && (menuOpen = false)} />

<header class:menu-open={menuOpen}>
  <nav class="top-menu" aria-label={lang === 'cz' ? 'Hlavní navigace' : 'Main navigation'}>
    <p class="desktop-link">{restaurant.address.street}, {restaurant.address.postalCode}, {addressCity}</p>
    {#each restaurant.openingHours as hours}
      <p class="desktop-link">{hours.days[lang]} {hours.opens.slice(0, 2)}-{hours.closes.slice(0, 2)}</p>
    {/each}
    <p class="desktop-link">{restaurant.phone}</p>

    <a class="desktop-link" href={routePath(lang, 'food')}>{copy.foodMenu}</a>
    <a class="desktop-link" href={routePath(lang, 'drinks')}>{copy.drinks}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{copy.reservation}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.voucherUrl}>{copy.vouchers}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.socialLinks[0]}>@oda.prague</a>
    <a class="language-link" href={translatedPath(page.url.pathname, otherLanguage)}>{otherLanguage === 'cz' ? 'Cz' : 'En'}</a>

    <button
      class="mobile-menu-toggle"
      type="button"
      aria-expanded={menuOpen}
      aria-controls="mobile-menu"
      onclick={() => (menuOpen = !menuOpen)}
    >{menuOpen ? copy.menuClose : copy.menuOpen}</button>
  </nav>

  <div class="mobile-overlay" id="mobile-menu" aria-hidden={!menuOpen}>
    <p>{restaurant.address.street}</p>
    <p>{restaurant.address.postalCode}, {addressCity}</p>
    <br />
    {#each restaurant.openingHours as hours}
      <p>{hours.days[lang]} {hours.opens.slice(0, 2)}-{hours.closes.slice(0, 2)}</p>
    {/each}
    <br />
    <p>{restaurant.phone}</p>
    <br />
    <p><a href={routePath(lang, 'food')}>{copy.foodMenu}</a></p>
    <p><a href={routePath(lang, 'drinks')}>{copy.drinks}</a></p>
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
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
  }

  .top-menu p,
  .mobile-overlay p {
    margin: 0;
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
    .desktop-link {
      display: none;
    }

    .mobile-menu-toggle {
      display: inline-block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
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
