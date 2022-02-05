<script>
	import { goto } from '$app/navigation';

	/** @type {import('$lib/interfaces').IPost} */
	export let post;

	function toPlainText(blocks = []) {
		return (
			blocks
				// loop through each block
				.map((block) => {
					// if it's not a text block with children,
					// return nothing
					if (block._type !== 'block' || !block.children) {
						return '';
					}
					// loop through the children spans, and join the
					// text strings
					return block.children.map((child) => child.text).join('');
				})
				// join the paragraphs leaving split by two linebreaks
				.join('\n\n')
		);
	}

	const truncatedBody = toPlainText(post.body).slice(0, 200);
	console.log(truncatedBody);
</script>

<div class="post" on:click={() => goto(`posts/${post.slug.current}`)}>
	{#if post._updatedAt}
		<h6>{new Date(post._updatedAt).toLocaleString()}</h6>
	{/if}

	{#if post.title}
		<h4>{post.title}</h4>
	{/if}

	{#if post.body}
		<p>{truncatedBody}...</p>
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
