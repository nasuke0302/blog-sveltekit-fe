<script>
	import Posts from '../components/posts/List/index.svelte';
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
