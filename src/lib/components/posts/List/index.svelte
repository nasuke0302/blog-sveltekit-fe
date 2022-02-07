<script lang="ts">
	import Item from '../Item/index.svelte';
	import type { IPost } from '$lib/interfaces';

	export let posts: IPost[];
	export let title: string = 'Recent Posts';
</script>

{#if posts?.length > 0}
	{#if title}
		<h2 class="text-center mb-4 text-3xl">{title}</h2>
	{/if}
	<div class="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8">
		{#each posts as post}
			<Item {post} />
		{/each}
	</div>
{/if}
