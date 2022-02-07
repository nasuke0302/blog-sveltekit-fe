<script lang="ts">
	import RichText from '$lib/components/RichText/index.svelte';
	import { imageBuilder } from '$lib/utils';
	import List from '$lib/components/posts/List/index.svelte';
	import type { IAuthor } from '$lib/interfaces';

	export let author: IAuthor;
	const image = imageBuilder.image(author.image);
</script>

<svelte:head>
	<title>{author?.name ?? 'Author'} | Blogs</title>
</svelte:head>

{#if !author}
	<p>No author found</p>
{:else}
	<div class="mt-4 mb-16">
		<div class="grid grid-cols-1 md:grid-cols-[250px_auto] gap-8">
			{#if image}
				<img
					class="rounded-full border border-solid border-cyan-600 aspect-square"
					src={image.width(250).url()}
					alt={author.name}
					loading="lazy"
					width="250"
					height="250"
				/>
			{/if}

			<div class="flex flex-col justify-center items-start gap-4">
				{#if author.name}
					<h1 class="text-3xl">{author.name}</h1>
				{/if}

				{#if author.bio}
					<div>
						<RichText blocks={author.bio} />
					</div>
				{/if}
			</div>
		</div>
		{#if author.posts}
			<div class="my-8">
				<List posts={author.posts} title="Published Posts" />
			</div>
		{/if}
	</div>
{/if}
