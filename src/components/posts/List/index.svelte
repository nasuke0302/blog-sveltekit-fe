<script>
	import Item from '../Item/index.svelte';
	export let posts;
	export let title = 'Recent Posts';
</script>

{#if posts?.length > 0}
	{#if title}
		<h2>{title}</h2>
	{/if}
	<div class="post-list">
		{#each posts as post}
			<Item {post} />
		{/each}
	</div>
{/if}

<style>
	.post-list {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 2rem 1rem;
	}

	h2 {
        text-align: center;
		margin-bottom: 1rem;
	}

	@media (min-width: 48rem) {
		.post-list {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
