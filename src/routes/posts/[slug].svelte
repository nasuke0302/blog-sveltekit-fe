<script>
	import RichText from '$lib/components/RichText/index.svelte';
	import Category from '$lib/components/posts/Category/index.svelte';
	import { formatDate, imageBuilder } from '$lib/utils';
	/**@type {import("$lib/interfaces").IPost}  */
	export let post;

	const image = imageBuilder.image(post?.mainImage);
</script>

{#if !post}
	<h1>The Sadness</h1>
	<p>No post found</p>
	<a href="/">Go home, buddy</a>
{:else}
	<div class="post">
		<div class="post-image" style={`background-image: url(${image.width(500).url()})`}>
			<div class="post-info">
				<time>Last Updated: {formatDate(post._updatedAt)}</time>

				<h1>{post.title}</h1>

				<div class="post-data">
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
			</div>
		</div>
		<div class="post-body">
			<RichText blocks={post.body} />
		</div>
	</div>
{/if}

<style>
	.post-image {
		min-height: 300px;
		background-color: rgb(169, 169, 169);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: relative;
		margin-bottom: 1.2rem;
	}

	.post-info {
		padding: 0.5rem 1rem;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.75);
	}

	time {
		color: rgb(181, 181, 181);
		margin-bottom: 0.5rem;
		font-size: 0.7rem;
	}

	h1 {
		color: rgb(255, 255, 255);
		margin-bottom: 0.8rem;
	}

	.post-data {
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
		color: white;
		font-weight: 300;
	}

	.post-author > a {
		color: inherit;
	}

	.post-author > a {
		font-weight: bold;
	}

	@media (min-width: 48rem) {
		.post {
			margin-top: 2rem;
		}
		.post-image {
			margin-bottom: 3rem;
		}
		.post-info {
			padding: 1rem 2rem;
		}
		.post-data {
			flex-direction: row-reverse;
			align-items: center;
		}

		h1 {
			margin-bottom: 1.5rem;
		}
	}
</style>
