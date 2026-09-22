<script lang="ts">
  import { base } from '$app/paths';
  import type { Language } from '$lib/i18n/config';
  import { onMount } from 'svelte';
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

  const responsiveSrc = (src: string, width: number) =>
    src.replace(/(\d+)\.webp$/, `carousel/$1-${width}.webp`);

  const responsiveSrcset = (src: string) =>
    `${responsiveSrc(src, 640)} 640w, ${responsiveSrc(src, 960)} 960w, ${responsiveSrc(src, 1120)} 1120w, ${responsiveSrc(src, 1365)} 1365w`;

  onMount(() => {
    const timeouts: number[] = [];

    const preloadRemainingImages = () => {
      images.slice(2).forEach((image, index) => {
        timeouts.push(
          window.setTimeout(() => {
            const preloader = new Image();
            preloader.fetchPriority = 'low';
            preloader.sizes = '73.34vh';
            preloader.srcset = responsiveSrcset(image.src);
            preloader.src = responsiveSrc(image.src, 960);
          }, (index + 1) * 6000)
        );
      });
    };

    if (document.readyState === 'complete') {
      preloadRemainingImages();
    } else {
      window.addEventListener('load', preloadRemainingImages, { once: true });
    }

    return () => {
      window.removeEventListener('load', preloadRemainingImages);
      timeouts.forEach((timeout) => window.clearTimeout(timeout));
    };
  });
</script>

<div class="homepage">
  <SiteHeader {lang} />

  <div class="carousel" aria-hidden="true">
    <div class="carousel-track">
      {#each [0, 1] as group}
        <div class="carousel-group">
          {#each images as image, index}
            <img
              src={responsiveSrc(image.src, 960)}
              srcset={responsiveSrcset(image.src)}
              sizes="73.34vh"
              alt=""
              width={image.width}
              height={image.height}
              loading={group === 0 && index < 2 ? 'eager' : 'lazy'}
              fetchpriority={group === 0 && index === 0 ? 'high' : 'auto'}
              decoding={group === 0 && index === 0 ? 'sync' : 'async'}
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
    display: flex;
    width: max-content;
    height: 100%;
    animation: scroll 160s linear infinite;
    will-change: transform;
  }

  .carousel-group {
    display: flex;
    width: max-content;
    height: 100%;
    flex-shrink: 0;
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

  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }

</style>
