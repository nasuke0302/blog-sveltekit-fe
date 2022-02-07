<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;

	$: block = portableText.block;
	$: style = block.style;
</script>

<div>
	{#if style === 'h1'}
		<h1 class="mb-4 text-3xl"><slot /></h1>
	{:else if style === 'h2'}
		<h2 class="mb-4 text-2xl"><slot /></h2>
	{:else if style === 'h3'}
		<h3 class="mb-3 text-xl"><slot /></h3>
	{:else if style === 'h4'}
		<h4 class="mb-3 text-lg font-bold"><slot /></h4>
	{:else if style === 'h5'}
		<h5 class="mb-2 text-lg"><slot /></h5>
	{:else}
		<h6 class="mb-2 text-md"><slot /></h6>
	{/if}
</div>
