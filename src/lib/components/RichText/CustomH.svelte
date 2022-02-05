<script lang="ts">
	import type { BlockProps } from '@portabletext/svelte';

	export let portableText: BlockProps;

	$: block = portableText.block;
	$: style = block.style;
</script>

<div>
	{#if style === 'h1'}
		<h1><slot /></h1>
	{:else if style === 'h2'}
		<h2><slot /></h2>
	{:else if style === 'h3'}
		<h3><slot /></h3>
	{:else if style === 'h4'}
		<h4><slot /></h4>
	{:else if style === 'h5'}
		<h5><slot /></h5>
	{:else}
		<h6><slot /></h6>
	{/if}
</div>

<style>
	h1,
	h2 {
		margin-bottom: 1rem;
	}
	h3,
	h4 {
		margin-bottom: 0.7rem;
	}

	h5,
	h6 {
		margin-bottom: 0.5rem;
	}
</style>
