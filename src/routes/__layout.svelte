<script>
	const links = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' },
		{ href: '/settings', text: 'Settings' }
	];
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap');
	</style>
</svelte:head>

<nav>
	{#each links as link}
		<a href={link.href}>{link.text}</a>
	{/each}
</nav>

<main>
	<slot />
</main>
<footer>
	<div class="links">
		{#each links as link}
			<a href={link.href}>{link.text}</a>
		{/each}
	</div>
	<div class="copy">
		<p>
			&COPY; {new Date().getFullYear()} Nasuke
		</p>
	</div>
</footer>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: rgb(230, 230, 230);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
	}

	:global(p, a, span) {
		margin: 0;
		color: rgb(48, 48, 48);
		font-family: 'Roboto', sans-serif;
	}

	nav {
		padding: 1rem;
		padding-left: 2rem;
		display: flex;
		justify-content: center;
		flex-flow: row nowrap;
		align-items: center;
		background-color: seagreen;
	}

	a {
		color: white;
		font-size: 1.2rem;
		text-decoration: none;
		padding: 1rem;
	}

	main {
		padding: 1rem;
		max-width: 60rem;
		margin: auto;
	}

	footer {
		padding: 2rem;
		background-color: rgb(40, 80, 57);
	}

	footer > .links {
		display: flex;
		justify-content: center;
		flex-flow: row nowrap;
		align-items: center;
	}

	footer > .copy {
		margin: auto;
		text-align: center;
	}

	footer > .copy > p {
		color: white;
	}

	@media (min-width: 48rem) {
		nav {
			justify-content: flex-start;
		}
	}
</style>
