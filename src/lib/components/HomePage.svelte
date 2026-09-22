<script lang="ts">
  import { base } from '$app/paths';
  import type { Language } from '$lib/i18n/config';
  import OdaLogo from './OdaLogo.svelte';
  import SiteHeader from './SiteHeader.svelte';

  let { lang }: { lang: Language } = $props();
  const images = [
    { src: `${base}/images/1.webp`, width: 2730, height: 4096 },
    { src: `${base}/images/2.webp`, width: 1365, height: 2048 },
    { src: `${base}/images/3.webp`, width: 2730, height: 4096 },
    { src: `${base}/images/4.webp`, width: 1366, height: 2048 },
    { src: `${base}/images/5.webp`, width: 2730, height: 4096 },
    { src: `${base}/images/6.webp`, width: 1365, height: 2048 },
    { src: `${base}/images/7.webp`, width: 2730, height: 4096 },
    { src: `${base}/images/8.webp`, width: 1365, height: 2048 },
    { src: `${base}/images/9.webp`, width: 2730, height: 4096 },
    { src: `${base}/images/10.webp`, width: 1365, height: 2048 },
    { src: `${base}/images/11.webp`, width: 2730, height: 4096 },
    { src: `${base}/images/12.webp`, width: 1333, height: 2000 }
  ];
</script>

<div class="homepage">
  <SiteHeader {lang} />

  <div class="carousel" aria-hidden="true">
    <div class="carousel-track">
      {#each [0, 1] as group}
        <div class="carousel-group">
          {#each images as image, index}
            <img
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              loading={group === 0 ? 'eager' : 'lazy'}
              fetchpriority={group === 0 && index === 0 ? 'high' : 'auto'}
            />
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
    position: relative;
    width: 100%;
    height: 100%;
  }

  .carousel-group {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: max-content;
    height: 100%;
    animation: scroll-first 160s linear infinite;
  }

  .carousel-group:nth-child(2) {
    animation-name: scroll-second;
  }

  .carousel-group img {
    display: block;
    width: calc(110vh * 2 / 3);
    height: 100%;
    aspect-ratio: 2 / 3;
    flex-shrink: 0;
    object-fit: cover;
    background: #000;
  }

  .logo {
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  @keyframes scroll-first {
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  }

  @keyframes scroll-second {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

</style>
