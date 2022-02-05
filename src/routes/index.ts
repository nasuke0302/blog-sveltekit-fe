import { client } from '$lib/utils';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	try {
		const posts = await client.fetch(
			`*[_type=="post"]{_id, _updatedAt, title, slug, body, author->{name}, categories[]->{title}} | order(_updatedAt desc)`
		);
		return {
			body: { posts }
		};
	} catch (error) {
		return {
			error: error.message
		};
	}
}
