<script>
	import '../tailwind.css';

	const links = [{ href: '/', text: 'Home' }];
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
	</style>
</svelte:head>

<nav
	class="p-4 pl-8 flex flex-row flex-nowrap justify-center md:justify-start items-center bg-green-600"
>
	{#each links as link}
		<a href={link.href} class="text-white font-5 no-underline p-4">{link.text}</a>
	{/each}
</nav>

<main class="grow max-w-4xl m-auto p-4 lg:p-0">
	<slot />
</main>

<footer class="p-8 bg-green-800">
	<div class="flex flex-row flex-nowrap justify-center align-center">
		{#each links as link}
			<a href={link.href} class="text-white font-5 no-underline p-4">{link.text}</a>
		{/each}
	</div>
	<div class="m-auto text-center">
		<p class="text-white">
			&COPY; {new Date().getFullYear()} Nasuke
		</p>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(248, 247, 247);
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
	}

	:global(p, a, span, time) {
		margin: 0;
		color: rgb(48, 48, 48);
		font-family: 'Roboto', sans-serif;
	}
</style>
