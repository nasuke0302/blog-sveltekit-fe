import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const variables = {
	SANITY_PROJECT_ID: import.meta.env.VITE_SANITY_PROJECT_ID,
	SANITY_PROJECT_NAME: import.meta.env.VITE_SANITY_PROJECT_NAME,
	SANITY_API_TOKEN: import.meta.env.VITE_SANITY_API_TOKEN,
	SANITY_DATASET: import.meta.env.VITE_SANITY_DATASET
};
export const client = sanityClient({
	projectId: <string>import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: <string>import.meta.env.VITE_SANITY_DATASET,
	apiVersion: '2021-03-25',
	useCdn: true
});

export const imageBuilder = imageUrlBuilder(client);

export const formatDate = (date: string) => new Date(date).toLocaleString();
