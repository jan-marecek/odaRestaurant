<script lang="ts">
  import { page } from '$app/state';
  import { content } from '$lib/data/content';
  import { restaurant } from '$lib/data/restaurant';
  import type { Language } from '$lib/i18n/config';
  import { routePath, translatedPath } from '$lib/i18n/routes';

  let { lang }: { lang: Language } = $props();
  let menuOpen = $state(false);

  const copy = $derived(content[lang].common);
  const navigation = $derived(content[lang].navigation);
  const otherLanguage = $derived(lang === 'cz' ? 'en' : 'cz');
</script>

<svelte:window onkeydown={(event) => event.key === 'Escape' && (menuOpen = false)} />

<header class:menu-open={menuOpen}>
  <nav class="top-menu" aria-label={lang === 'cz' ? 'Hlavní navigace' : 'Main navigation'}>
    <a class="desktop-link" href={routePath(lang, 'home')} aria-label={lang === 'cz' ? 'Úvodní stránka' : 'Homepage'}>ōda</a>
    <a class="desktop-link" href={routePath(lang, 'about')}>{navigation.about}</a>
    <a class="desktop-link" href={routePath(lang, 'visit')}>{navigation.visit}</a>
    <a class="desktop-link" href={routePath(lang, 'contact')}>{navigation.contact}</a>
    <a class="desktop-link" href={routePath(lang, 'food')}>{copy.foodMenu}</a>
    <a class="desktop-link" href={routePath(lang, 'drinks')}>{copy.drinks}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{copy.reservation}</a>
    <a class="desktop-link" target="_blank" rel="noreferrer" href={restaurant.voucherUrl}>{copy.vouchers}</a>
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
    <p><a href={routePath(lang, 'about')} onclick={() => (menuOpen = false)}>{navigation.about}</a></p>
    <p><a href={routePath(lang, 'visit')} onclick={() => (menuOpen = false)}>{navigation.visit}</a></p>
    <p><a href={routePath(lang, 'contact')} onclick={() => (menuOpen = false)}>{navigation.contact}</a></p>
    <p><a href={routePath(lang, 'food')} onclick={() => (menuOpen = false)}>{copy.foodMenu}</a></p>
    <p><a href={routePath(lang, 'drinks')} onclick={() => (menuOpen = false)}>{copy.drinks}</a></p>
    <p><a target="_blank" rel="noreferrer" href={restaurant.reservationUrl}>{copy.reservation}</a></p>
    <p><a target="_blank" rel="noreferrer" href={restaurant.voucherUrl}>{copy.vouchers}</a></p>
  </div>
</header>

<style>
  header {
    --menu-font-size: 18px;
  }

  .top-menu {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: var(--header-height);
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    padding: 0 8px;
    background: #ff5500;
    color: #000;
    font-family: 'PP Montreal', Arial, sans-serif;
    font-size: var(--menu-font-size);
    line-height: normal;
    text-transform: lowercase;
    -webkit-font-smoothing: antialiased;
  }

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
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }

  .mobile-menu-toggle,
  .mobile-overlay {
    display: none;
  }

  /*
   * Not the site breakpoint (see src/breakpoints.css, 48rem). The nav
   * collapses when the horizontal links stop fitting, which is 1220px.
   */
  @media (min-width: 1221px) {
    .top-menu {
      padding-left: 10px;
    }
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

    /*
     * The overlay matches the subpages: same gray, same type scale
     * (40px / 32px below the breakpoint), 8px gutter. The orange bar above
     * it keeps its own 18px.
     *
     * Leading is 1.09, not the 1 the body copy uses -- the mockup measures a
     * 34.93px baseline pitch on 32px type, so the nav sits slightly looser.
     */
    .mobile-overlay {
      position: fixed;
      z-index: 900;
      inset: 0;
      padding: calc(var(--header-height) + 8px + 0.05em) 8px calc(8px + 0.05em);
      background: #d9d9d9;
      color: #000;
      font-family: 'PP Montreal', Arial, sans-serif;
      font-size: 40px;
      line-height: 1.1;
      text-transform: lowercase;
      -webkit-font-smoothing: antialiased;
    }

    .menu-open .mobile-overlay {
      display: block;
    }
  }

  @media (--mobile) {
    .mobile-overlay {
      font-size: 32px;
    }
  }
</style>
