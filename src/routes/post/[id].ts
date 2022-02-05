import { posts } from '../../data/db';

export async function get({ params }) {
	return {
		body: { post: posts.find((post) => post.id === parseInt(params.id)) }
	};
}
