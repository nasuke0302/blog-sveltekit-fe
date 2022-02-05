<script>
	import RichText from '$lib/components/RichText/index.svelte';
	import { formatDate } from '$lib/utils';
	/**@type {import("$lib/interfaces").IPost}  */
	export let post;
</script>

{#if !post}
	<h1>The Sadness</h1>
	<p>No post found</p>
	<a href="/">Go home, buddy</a>
{:else}
	<div class="post-body">
		<time>Last Updated: {formatDate(post._updatedAt)}</time>

		<h1>{post.title}</h1>
		{#if post.author}
			<p class="post-author">
				Written by <a href={`authors/${post.author.slug.current}`}>{post.author.name}</a>
			</p>
		{/if}
		<div>
			<RichText blocks={post.body} />
		</div>
	</div>
{/if}

<style>
	.post-body {
		margin-top: 2rem;
	}

	time {
		color: rgb(201, 201, 201);
		margin-bottom: 0.5rem;
		font-size: 0.7rem;
	}

	h1 {
		color: rgb(136, 136, 136);
		margin-bottom: 1.5rem;
	}

	.post-author {
		margin-bottom: 1rem;
		font-weight: 300;
	}

	.post-author > a {
		font-weight: bold;
	}
</style>
