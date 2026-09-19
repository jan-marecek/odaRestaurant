<script lang="ts">
  let { title, intro }: { title: string; intro: string } = $props();
</script>

<section class="page-intro">
  <p class="eyebrow">ODA</p>
  <h1>{title}</h1>
  <p class="intro">{intro}</p>
</section>

<style>
  .page-intro {
    display: grid;
    min-height: 55vh;
    align-content: center;
    max-width: 70rem;
    margin: 0 auto;
    padding: clamp(4rem, 12vw, 9rem) 1.25rem;
  }

  .eyebrow {
    margin: 0 0 1rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.2em;
  }

  h1 {
    margin: 0;
    font-size: clamp(3rem, 10vw, 7rem);
    font-weight: 500;
    letter-spacing: -0.055em;
    line-height: 0.95;
  }

  .intro {
    max-width: 38rem;
    margin: 1.5rem 0 0;
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    line-height: 1.5;
  }
</style>
