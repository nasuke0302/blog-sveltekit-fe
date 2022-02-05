<script>
	import { goto } from '$app/navigation';
	export let post;
</script>

<div class="post" on:click={() => goto(`post/${post.id}`)}>
	{#if post.subtitle}
		<h6>{post.subtitle}</h6>
	{/if}

	{#if post.title}
		<h4>{post.title}</h4>
	{/if}

	{#if post.description}
		<p>{post.description}</p>
	{/if}
</div>

<style>
	.post {
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		cursor: pointer;
		background-color: white;
		border-radius: 0.5rem;
		padding: 1rem;
		transition: 0.2s all ease;
	}

	.post:hover {
		box-shadow: 0 3px 6px rgb(186, 186, 186);
	}

	h6 {
		color: rgb(201, 201, 201);
		margin-bottom: 0.5rem;
	}

	h4 {
		color: rgb(136, 136, 136);
		font-size: 1.5rem;
		margin-bottom: 0.8rem;
	}
</style>
