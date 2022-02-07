<script context="module">
	export const load = async ({ params }) => {
		const { slug } = params;
		return { props: { slug } };
	};
</script>

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { gql, operationStore, query } from '@urql/svelte';
	import List from '$lib/components/posts/List/index.svelte';
	import RichText from '$lib/components/RichText/index.svelte';
	import { imageBuilder } from '$lib/utils';
	import type { IAuthor, IPost } from '$lib/interfaces';
	import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

	export let slug: string;
	let author: IAuthor;
	let image: ImageUrlBuilder;
	let posts: IPost[];

	const authorQuery = gql`
		query allAuthors($slug: String!) {
			allAuthor(where: { slug: { current: { eq: $slug } } }) {
				_createdAt
				name
				bio: bioRaw
				slug {
					current
				}
				image {
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
			}
			allPost(where: { author: { slug: { current: { eq: $slug } } } }) {
				title
				slug {
					current
				}
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
				body: bodyRaw
				categories {
					title
				}
			}
		}
	`;

	const authors = operationStore(authorQuery, { slug });
	query(authors);

	const unsubscribe = authors.subscribe((value) => {
		author = value?.data?.allAuthor?.[0];
		image = imageBuilder.image(author?.image);
		posts = value?.data?.allPost;
	});

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>{author?.name ?? 'Author'} | Blogs</title>
</svelte:head>

{#if $authors.fetching}
	<p>Loading...</p>
{:else if $authors.error}
	<p>Oopsie! {$authors.error.message}</p>
{:else}
	<div class="mt-4 mb-16">
		<div class="grid grid-cols-1 md:grid-cols-[250px_auto] gap-8">
			{#if image}
				<img
					class="rounded-full border border-solid border-cyan-600 aspect-square"
					src={image.width(250).url()}
					alt={author?.name}
					loading="lazy"
					width="250"
					height="250"
				/>
			{/if}

			<div class="flex flex-col justify-center items-start gap-4">
				{#if author?.name}
					<h1 class="text-3xl">{author.name}</h1>
				{/if}

				{#if author?.bio}
					<div>
						<RichText blocks={author.bio} />
					</div>
				{/if}
			</div>
		</div>
		{#if posts}
			<div class="my-8">
				<List {posts} title="Published Posts" />
			</div>
		{/if}
	</div>
{/if}
