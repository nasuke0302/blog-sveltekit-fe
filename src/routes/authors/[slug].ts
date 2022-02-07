import { client } from '$lib/utils';

export async function get({ params }) {
	/* try {
		const authors = await client.fetch(
			`*[slug.current == $slug]{
					_createdAt, bio, name, slug, image, 
					"posts": *[ _type == "post" && author._ref == ^._id ]{
						title, slug, body, mainImage, categories[]->{title}, _updatedAt
					}
				| order(_updatedAt desc)
			}`,
			params
		);
		return {
			body: { author: authors[0] }
		};
	} catch (error) {
		return {
			error: error.message
		};
	} */
	return '';
}
