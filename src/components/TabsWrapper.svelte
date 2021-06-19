<script>
  import Tabs from "./Tabs.svelte";

  export let tabs = [
    { tabTitle: "Todo" },
    { tabTitle: "In Progress" },
    { tabTitle: "Completed" },
  ];
</script>

<section>
  {#each tabs as tab}
    <Tabs tabTitle={tab.tabTitle} />
  {/each}
</section>

<style>
  section{
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    padding: 1em;
    display: flex;
    gap: 2em;
    overflow-x: scroll;
  }
</style>
