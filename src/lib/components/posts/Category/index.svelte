<script lang="ts">
	import type { ICategory } from '$lib/interfaces';
	export let category: ICategory;
</script>

{#if !category}
	return
{:else}
	<span>{category.title}</span>
{/if}

<style>
	span {
		color: white;
		font-size: 0.6rem;
		font-weight: 400;
		padding: 0.4rem 0.5rem;
		background-color: steelblue;
		border-radius: 1rem;
	}
</style>
