<script>
	export let projects = [];
  export let titleName = "Title Name";
</script>

<section class="title-tab">
  <h3>{ titleName }</h3>
  {#each projects as project}
    <div class="project">
      <p>{ project }</p>
    </div>
  {/each}
</section>

<style>
  .title-tab{
    max-width: 25%;
  }

  .project{
    border: 1px solid grey;
  }
</style>
