<script>
	import Navigation from './components/Navigation.svelte';
	import TabsWrapper from './components/TabsWrapper.svelte';

	// export let name = "World";
	let projects = [
    "This is a first project",
    "I have another one to create",
    "This will be fun to use",
  ];
</script>

<Navigation />
<main>
	<!-- <Tabs tabTitle="A Title" /> -->
	<TabsWrapper />
	<!-- <h1>Hello {name}!</h1> -->
	<!-- <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> -->
</main>

<style>
	main{
		/* width: 98%; */
		margin: auto;
		height: 90vh;
	}
</style>
