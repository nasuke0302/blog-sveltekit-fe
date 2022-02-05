<script lang="ts">
	import { goto } from '$app/navigation';
	import Category from '$lib/components/posts/Category/index.svelte';
	import { toPlainText } from '$lib/utils';
	import type { IPost } from '$lib/interfaces';

	export let post: IPost;

	const truncatedBody = toPlainText(post.body).slice(0, 200);
</script>

<div class="post" on:click={() => goto(`/posts/${post.slug.current}`)}>
	{#if post._updatedAt}
		<h6>Last updated on {new Date(post._updatedAt).toLocaleString()}</h6>
	{/if}

	{#if post.title}
		<h4>{post.title}</h4>
	{/if}

	{#if post.author}
		<span>By {post.author.name}</span>
	{/if}

	{#if post.body}
		<p>{truncatedBody}...</p>
	{/if}

	{#if post.categories}
		<div class="categories">
			{#each post.categories as cat}
				<Category category={cat} />
			{/each}
		</div>
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
		box-shadow: 0 1px 3px rgb(186, 186, 186);
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

	span {
		color: rgb(136, 136, 136);
		font-size: 0.7rem;
		margin-bottom: 0.3rem;
	}

	.categories {
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;
		grid-gap: 0.5rem;
		margin-top: 1rem;
	}
</style>
