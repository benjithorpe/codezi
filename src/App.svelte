<script>
	import { Route, router } from "tinro";
	router.subscribe((_) => window.scrollTo(0, 0));
	import Main from "./routes/Main.svelte";
	import Work from "./routes/Work.svelte";
	import Contact from "./routes/Contact.svelte";
	import Home from "./routes/Home.svelte";
</script>

<Route path="/">
	<Main>
		<Home />
	</Main>
</Route>

<Route path="/work">
	<Main>
		<Work />
	</Main>
</Route>

<Route path="/contact">
	<Main>
		<Contact />
	</Main>
</Route>

<!-- <Route path="/">
	<Main>
		<Header />
	</Main>
</Route>

<Route path="/">
	<Main>
		<Header />
	</Main>
</Route> -->
<style>
</style>
