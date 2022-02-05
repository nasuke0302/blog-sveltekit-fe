import { SANITY_ENDPOINT } from '$lib/utils';

export async function get({ params }) {
	try {
		const response = await fetch(
			`${SANITY_ENDPOINT}?query=*[slug.current == "${params.slug}"]{_id, _updatedAt,title, slug, body, author->{name, slug}, categories[]->{title}}`
		);
		const { result } = await response.json();
		return {
			body: { post: result[0] }
		};
	} catch (error) {
		return {
			error: error.message
		};
	}
}
