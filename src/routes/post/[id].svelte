<script>
	export let post;
</script>

{#if !post}
	<h1>The Sadness</h1>
	<p>No post found</p>
	<a href="/">Go home, buddy</a>
{:else}
	<div class="post-body">
		<h3>{post.subtitle}</h3>

		<h1>{post.title}</h1>

		<p>{post.description}</p>
	</div>
{/if}

<style>
	.post-body {
		margin-top: 2rem;
	}

	h3 {
		color: rgb(201, 201, 201);
		margin-bottom: 0.5rem;
	}

	h1 {
		color: rgb(136, 136, 136);
		margin-bottom: 1.5rem;
	}
</style>
