<script lang="ts">
  import type { Language } from '$lib/i18n/config';
  import OdaLogo from './OdaLogo.svelte';
  import SiteHeader from './SiteHeader.svelte';

  let { lang }: { lang: Language } = $props();
  const images = Array.from({ length: 12 }, (_, index) => `/images/${index + 1}.webp`);
</script>

<div class="homepage">
  <SiteHeader {lang} />

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
  .homepage {
    position: fixed;
    inset: 0;
    overflow: hidden;
    background: #000;
    font-family: 'PP Montreal', Arial, sans-serif;
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
    animation: carousel-scroll 120s linear infinite;
    will-change: transform;
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

  @keyframes carousel-scroll {
    from { transform: translate3d(0, 0, 0); }
    to { transform: translate3d(-50%, 0, 0); }
  }
</style>
