<script lang="ts">
	import RichText from '$lib/components/RichText/index.svelte';
	import { imageBuilder } from '$lib/utils';
	import List from '$lib/components/posts/List/index.svelte';
	import type { IAuthor } from '$lib/interfaces';

	export let author: IAuthor;
	const image = imageBuilder.image(author.image);
</script>

{#if !author}
	<p>No author found</p>
{:else}
	<div class="author-container">
		{#if image}
			<img src={image.width(250).url()} alt={author.name} loading="lazy" width="250" height="250" />
		{/if}

		<div class="author-info">
			{#if author.name}
				<h1>{author.name}</h1>
			{/if}

			{#if author.bio}
				<div>
					<RichText blocks={author.bio} />
				</div>
			{/if}
		</div>
	</div>
	{#if author.posts}
		<div class="posts">
			<List posts={author.posts} title="Published Posts" />
		</div>
	{/if}
{/if}

<style>
	.author-container {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2rem;
	}

	img {
		aspect-ratio: 1/1;
		border-radius: 250px;
		border: 1px solid rgb(243, 192, 192);
		justify-self: center;
	}

	.author-info {
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: flex-start;
		grid-gap: 1rem;
	}

	@media (min-width: 48rem) {
		.author-container {
			grid-template-columns: 250px auto;
		}
	}
</style>
