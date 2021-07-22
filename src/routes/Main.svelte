<script>
  import Footer from "./Footer.svelte";
  import Nav from "./Nav.svelte";
</script>

<Nav />
<main>
  <slot />
</main>
<Footer />

<style>
  @media (min-width: 992px) {
    main {
      max-width: 75%;
      margin: auto;
    }
  }
</style>
