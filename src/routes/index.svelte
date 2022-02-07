<script>
	import Posts from '$lib/components/posts/List/index.svelte';

	/** @type {import('$lib/interfaces').IPost[]} */
	export let posts;
</script>

<svelte:head>
	<title>Home | Blogs</title>
</svelte:head>

<section class="my-12">
	<Posts {posts} />
</section>
