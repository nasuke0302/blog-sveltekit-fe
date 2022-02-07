<script lang="ts">
	import { operationStore, query } from '@urql/svelte';
	import Posts from '$lib/components/posts/List/index.svelte';
	import { PostsDocument, PostsQuery } from '$lib/generated/graphql';

	const posts = operationStore<PostsQuery>(PostsDocument);
	query(posts);
</script>

<svelte:head>
	<title>Home | Blogs</title>
</svelte:head>

<section class="my-12">
	{#if $posts.fetching}
		<p>Loading...</p>
	{:else if $posts.error}
		<p>Oopsie! {$posts.error.message}</p>
	{:else}
		<Posts posts={$posts.data.allPost} />
	{/if}
</section>
