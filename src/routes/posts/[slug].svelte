<script>
	import RichText from '$lib/components/RichText/index.svelte';
	import Category from '$lib/components/posts/Category/index.svelte';
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
		<div class="post-info">
			{#if post.categories}
				<p class="post-tags">
					{#each post.categories as cat}<Category category={cat} />{/each}
				</p>
			{/if}
			{#if post.author}
				<p class="post-author">
					Written by <a href={`/authors/${post.author.slug.current}`}>{post.author.name}</a>
				</p>
			{/if}
		</div>
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
		color: rgb(181, 181, 181);
		margin-bottom: 0.5rem;
		font-size: 0.7rem;
	}

	h1 {
		color: rgb(136, 136, 136);
		margin-bottom: 1.5rem;
	}

	.post-info {
		display: flex;
		flex-flow: column;
		justify-content: flex-end;
		align-items: flex-start;
		grid-gap: 1rem;
		margin-bottom: 1rem;
	}

	.post-tags {
		display: flex;
		gap: 0.3rem;
	}

	.post-author {
		font-weight: 300;
	}

	.post-author > a {
		font-weight: bold;
	}

	@media (min-width: 48rem) {
		.post-info {
			flex-direction: row-reverse;
			align-items: center;
		}
	}
</style>
