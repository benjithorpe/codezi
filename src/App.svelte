<script>
	import Navigation from './components/Navigation.svelte';
	import TitleTab from './components/TitleTab.svelte';
	export let name = "World";
	let projects = [
    "This is a first project",
    "I have another one to create",
    "This will be fun to use",
  ];
</script>

<Navigation />
<TitleTab projects={projects} titleName="A Title"/>
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
</style>
