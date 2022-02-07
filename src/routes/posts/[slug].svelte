<script context="module">
	export const load = async ({ params }) => {
		const { slug } = params;
		return { props: { slug } };
	};
</script>

<script lang="ts">
	import { onDestroy } from 'svelte';
	import { gql, operationStore, query } from '@urql/svelte';
	import RichText from '$lib/components/RichText/index.svelte';
	import Category from '$lib/components/posts/Category/index.svelte';
	import { formatDate, imageBuilder } from '$lib/utils';
	import type { IPost } from '$lib/interfaces';
	import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';

	export let slug: string;
	let post: IPost;
	let image: ImageUrlBuilder;

	const postQuery = gql`
		query allPost($slug: String!) {
			allPost(where: { slug: { current: { eq: $slug } } }) {
				_updatedAt
				title
				body: bodyRaw
				author {
					name
					slug {
						current
					}
				}
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
				categories {
					title
				}
			}
		}
	`;

	const posts = operationStore(postQuery, { slug });
	query(posts);

	const unsubscribe = posts.subscribe((value) => {
		post = value?.data?.allPost?.[0];
		image = imageBuilder.image(post?.mainImage);
	});

	onDestroy(unsubscribe);
</script>

<svelte:head>
	<title>{post?.title ?? 'Post'} | Blogs</title>
</svelte:head>

{#if $posts.fetching}
	<p>Loading...</p>
{:else if $posts.error}
	<p>Oopsie! {$posts.error.message}</p>
{:else}
	<div class="md:mt-8 mb-16">
		<div
			style={`background-image: url(${image.width(500).url()})`}
			class="h-96 bg-gray-400 bg-cover bg-repeat bg-center relative mb-6 md:mb-12"
		>
			<div class="py-2 md:py-4 px-4 md:py-8 absolute bottom-0 inset-x-0 bg-black/75">
				<time class="text-slate-300 mb-2 text-xs">Last Updated: {formatDate(post._updatedAt)}</time>

				<h1 class="text-slate-100 mb-4 md:mb-5 text-3xl">{post.title}</h1>

				<div
					class="flex flex-col md:flex-row-reverse justify-end items-start md:items-center gap-4 mb-2 md:mb-0"
				>
					{#if post.categories}
						<p class="flex gap-1">
							{#each post.categories as cat}<Category category={cat} />{/each}
						</p>
					{/if}
					{#if post.author}
						<p class="text-white font-light">
							Written by <a
								class="text-inherit font-bold hover:underline"
								href={`/authors/${post.author.slug.current}`}>{post.author.name}</a
							>
						</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="post-body">
			<RichText blocks={post.body} />
		</div>
	</div>
{/if}
