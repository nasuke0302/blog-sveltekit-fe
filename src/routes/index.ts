import { posts } from '../data/db';

export async function get() {
	return {
		body: { posts }
	};
}
