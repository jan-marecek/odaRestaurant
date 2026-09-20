<script lang="ts">
  import HomePage from '$lib/components/HomePage.svelte';
</script>

<svelte:head>
  <title>ODA Restaurant</title>
</svelte:head>

<HomePage lang="cz" />

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    color: #111;
    background: #000;
    font-family: 'PP Montreal', Arial, sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  :global(a) {
    color: inherit;
  }
</style>
