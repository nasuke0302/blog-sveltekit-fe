import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type PortableText from '@portabletext/svelte';
import type { IVariables } from './interfaces';

export const variables: IVariables = {
	SANITY_PROJECT_ID: <string>import.meta.env.VITE_SANITY_PROJECT_ID,
	SANITY_PROJECT_NAME: <string>import.meta.env.VITE_SANITY_PROJECT_NAME,
	SANITY_API_TOKEN: <string>import.meta.env.VITE_SANITY_API_TOKEN,
	SANITY_DATASET: <string>import.meta.env.VITE_SANITY_DATASET,
	SANITY_GRAPHQL_URL: <string>import.meta.env.VITE_SANITY_GRAPHQL_URL
};
export const client = sanityClient({
	projectId: <string>import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: <string>import.meta.env.VITE_SANITY_DATASET,
	apiVersion: '2021-03-25',
	useCdn: true
});

export const imageBuilder = imageUrlBuilder(client);

export const formatDate = (date: string) => new Date(date).toLocaleString();

export function toPlainText(blocks: PortableText) {
	if (!blocks) return '';
	return (
		blocks
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== 'block' || !block.children) {
					return '';
				}
				// loop through the children spans, and join the
				// text strings
				return block.children.map((child) => child.text).join('');
			})
			// join the paragraphs leaving split by two linebreaks
			.join('\n\n')
	);
}
