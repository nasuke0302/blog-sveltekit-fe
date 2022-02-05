import { client } from '$lib/utils';

export async function get({ params }) {
	try {
		const posts = await client.fetch(
			`*[slug.current == $slug]{_id, _updatedAt, title, slug, body, mainImage, author->{name, slug}, categories[]->{title}}`,
			params
		);
		return {
			body: { post: posts[0] }
		};
	} catch (error) {
		return {
			error: error.message
		};
	}
}
