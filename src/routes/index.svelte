<script>
	import Posts from '$lib/components/posts/List/index.svelte';

	/** @type {import('$lib/interfaces').IPost[]} */
	export let posts;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Welcome to Nasuke Blog</h1>

<section>
	<Posts {posts} />
</section>

<style>
	section {
		margin-bottom: 3rem;
		margin-top: 3rem;
	}
	h1 {
		margin-bottom: 1rem;
	}
</style>
