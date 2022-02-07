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
	<div class="md:mt-8 mb-16">
		<div
			style={`background-image: url(${image.width(500).url()})`}
			class="h-96 bg-gray-400 bg-cover bg-repeat bg-center relative mb-6 md:mb-12"
		>
			<div class="py-2 md:py-4 px-4 md:py-8 absolute bottom-0 inset-x-0 bg-black/75">
				<time class="text-slate-300 mb-2 text-xs">Last Updated: {formatDate(post._updatedAt)}</time>

				<h1 class="text-slate-100 mb-4 md:mb-5 text-3xl">{post.title}</h1>

				<div
					class="flex flex-col md:flex-row-reverse justify-end items-start md:items-center gap-4 mb-2 md:mb-0"
				>
					{#if post.categories}
						<p class="flex gap-1">
							{#each post.categories as cat}<Category category={cat} />{/each}
						</p>
					{/if}
					{#if post.author}
						<p class="text-white font-light">
							Written by <a
								class="text-inherit font-bold hover:underline"
								href={`/authors/${post.author.slug.current}`}>{post.author.name}</a
							>
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
