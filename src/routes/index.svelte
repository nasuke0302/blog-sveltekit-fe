<script>
	import Posts from '$lib/components/posts/List/index.svelte';
	import { gql, operationStore, query } from '@urql/svelte';

	const postsQuery = gql`
		{
			allPost(sort: { _updatedAt: DESC }) {
				_id
				_updatedAt
				title
				slug {
					current
				}
				body: bodyRaw
				mainImage {
					asset {
						url
					}
					hotspot {
						x
						y
						width
						height
					}
					crop {
						top
						bottom
						left
						right
					}
				}
				author {
					name
				}
				categories {
					title
				}
			}
		}
	`;
	const posts = operationStore(postsQuery);
	query(posts);
</script>

<svelte:head>
	<title>Home | Blogs</title>
</svelte:head>

<section class="my-12">
	{#if $posts.fetching}
		<p>Loading...</p>
	{:else if $posts.error}
		<p>Oopsie! {$posts.error.message}</p>
	{:else}
		<Posts posts={$posts.data.allPost} />
	{/if}
</section>
