<script lang="ts">
  import { content } from '$lib/data/content';
  import { restaurant } from '$lib/data/restaurant';
  import type { Language } from '$lib/i18n/config';
  import { routePath } from '$lib/i18n/routes';
  import OdaLogo from './OdaLogo.svelte';

  let { lang }: { lang: Language } = $props();
  let menuOpen = $state(false);

  const images = Array.from({ length: 12 }, (_, index) => `/images/${index + 1}.webp`);
  const copy = $derived(content[lang].common);
  const otherLanguage = $derived(lang === 'cz' ? 'en' : 'cz');
  const addressCity = $derived(lang === 'cz' ? restaurant.address.city : 'Prague 3');
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && (menuOpen = false)} />

<div class:menu-open={menuOpen} class="homepage">
  <nav class="top-menu" aria-label={lang === 'cz' ? 'Hlavní navigace' : 'Main navigation'}>
    <a class="header-logo" href={routePath(lang, 'home')} aria-label={lang === 'cz' ? 'Zpět na hlavní stránku' : 'Back to homepage'}>
      <OdaLogo />
    </a>
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
    <a class="language-link" href={routePath(otherLanguage, 'home')}>{otherLanguage === 'cz' ? 'Cz' : 'En'}</a>

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

  <div class="carousel" aria-hidden="true">
    <div class="carousel-track">
      {#each [0, 1] as group}
        <div class="carousel-group">
          {#each images as image}
            <img src={image} alt="" />
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="logo"><OdaLogo /></div>
</div>

<style>
  @font-face {
    font-family: 'PP Montreal';
    src: url('/fonts/PPNeueMontreal-Regular.woff2') format('woff2'),
      url('/fonts/PPNeueMontreal-Regular.woff') format('woff');
    font-display: swap;
  }

  .homepage {
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: #000;
    font-family: 'PP Montreal', Arial, sans-serif;
  }

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
    font-size: 18px;
    line-height: normal;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased;
  }

  .top-menu p,
  .mobile-overlay p {
    margin: 0;
  }

  .header-logo {
    --oda-logo-width: 1.75rem;
    --oda-logo-color: #000;
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    align-self: center;
    line-height: 0;
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

  .carousel {
    position: relative;
    width: 100%;
    height: 110vh;
    overflow: hidden;
  }

  .carousel-track {
    display: flex;
    width: max-content;
    height: 100%;
    animation: scroll 160s linear infinite;
  }

  .carousel-group {
    display: flex;
    height: 100%;
    flex-shrink: 0;
  }

  .carousel-group img {
    display: block;
    width: auto;
    height: 100%;
    flex-shrink: 0;
    object-fit: cover;
  }

  .logo {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-track { animation-play-state: paused; }
  }

  @media (max-width: 1220px) {
    .top-menu {
      justify-content: flex-start;
    }

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
      font-size: 18px;
      line-height: 1.2;
      -webkit-font-smoothing: antialiased;
    }

    .menu-open .mobile-overlay {
      display: block;
    }

    .menu-open .carousel,
    .menu-open .logo {
      display: none;
    }
  }
</style>
