<script lang="ts">
	import Item from '../Item/index.svelte';
	import type { Post } from '$lib/generated/graphql';
	import { writable } from 'svelte/store';

	export let posts: Post[];
	export let title: string = 'Recent Posts';
	let query = writable('');

	$: filteredPosts = posts;

	const handleSearch = () => {
		if (!$query) {
			filteredPosts = posts;
		} else {
			filteredPosts = posts.filter((post) => post.title.includes($query));
		}
	};
</script>

{#if title}
	<h2 class="text-center mb-4 text-3xl">{title}</h2>
{/if}
<div class="my-8 flex flex-row flex-wrap gap-4 justify-center items-center">
	<input type="text" class="px-4 py-2 rounded-md border border-green-400" bind:value={$query} />
	<button
		class="button px-4 py-2 bg-green-400 hover:bg-green-500 transition ease-in-out rounded-md"
		on:click={handleSearch}>Search</button
	>
</div>
{#if filteredPosts?.length > 0}
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
		{#each filteredPosts as post}
			<Item {post} />
		{/each}
	</div>
{/if}
