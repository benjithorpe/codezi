<script>
	let projects = [
    "This is a first project",
    "I have another one to create",
    "This will be fun to use",
  ];
  export let tabTitle;
</script>

<section class="tab">
  <h3>{ tabTitle }</h3>

  <div class="items">
    {#each projects as project}
      <div class="project">
        <p>{ project }</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .tab{
    min-width: 90%;
    max-width: 70%;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.4);
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  h3{
    background-color: #ddd;
    border: 1px solid silver;
    padding: .4em 0;
    margin: 0;
    margin-bottom: .7em;
    text-align: center;
    font-size: 2rem;
    font-weight: lighter;
    letter-spacing: 1px;
  }

  .items{
    padding: 1em 1.5em;
    display: grid;
    gap: 1.5em;
  }

  .project{
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 1em;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  }

  @media screen and (min-width: 576px){
    .tab{ min-width: 60%; }
  }

  @media screen and (min-width: 768px){
    .tab{ min-width: 50%; }
  }

  @media screen and (min-width: 992px){
    .tab{ min-width: 35%; }
  }

  @media screen and (min-width: 1200px){
    .tab{ min-width: 28%; }
  }
</style>
