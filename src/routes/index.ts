import { SANITY_ENDPOINT } from '$lib/utils';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get() {
	try {
		const response = await fetch(
			`${SANITY_ENDPOINT}?query=*[_type=="post"]{_id, _updatedAt,title, slug, body, author->{name, slug}, categories[]->{title}}`
		);
		const { result } = await response.json();
		return {
			body: { posts: result }
		};
	} catch (error) {
		return {
			error: error.message
		};
	}
}
