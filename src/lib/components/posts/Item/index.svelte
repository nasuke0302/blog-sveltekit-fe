<script lang="ts">
	import { goto } from '$app/navigation';
	import Category from '$lib/components/posts/Category/index.svelte';
	import { imageBuilder, toPlainText } from '$lib/utils';
	import type { Post } from '$lib/generated/graphql';

	export let post: Post;
	const image = imageBuilder.image(post?.mainImage);
	const truncatedBody = toPlainText(post.bodyRaw).slice(0, 200);
</script>

<div
	on:click={() => goto(`/posts/${post.slug.current}`)}
	class="flex flex-col justify-start align-start cursor-pointer bg-white rounded-md shadow-sm hover:shadow-md transition ease-in-out duration-200"
>
	<div class="w-full h-48">
		{#if image}
			<div
				class="w-full h-full bg-gray-200 bg-cover bg-repeat bg-center"
				style={`background-image: url(${image.width(280).url()})`}
			/>
		{/if}
	</div>
	<div class="p-4 grow flex flex-col justify-between">
		{#if post._updatedAt}
			<h6 class="text-gray-500 mb-2 text-xs">
				Last updated on {new Date(post._updatedAt).toLocaleString()}
			</h6>
		{/if}
		{#if post.title}
			<h4 class="text-gray-600 mb-3 text-xl">{post.title}</h4>
		{/if}

		{#if post.author}
			<span class="text-gray-700 mb-3 text-xs">By {post.author.name}</span>
		{/if}

		{#if post.bodyRaw}
			<p class="grow">{truncatedBody}...</p>
		{/if}

		{#if post.categories}
			<div class="flex flex-row flex-wrap justify-start items-start gap-2 mt-4">
				{#each post.categories as cat}
					<Category category={cat} />
				{/each}
			</div>
		{/if}
	</div>
</div>
