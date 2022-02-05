export const variables = {
	SANITY_PROJECT_ID: import.meta.env.VITE_SANITY_PROJECT_ID,
	SANITY_PROJECT_NAME: import.meta.env.VITE_SANITY_PROJECT_NAME,
	SANITY_API_TOKEN: import.meta.env.VITE_SANITY_API_TOKEN,
	SANITY_DATASET: import.meta.env.VITE_SANITY_DATASET
};

export const SANITY_ENDPOINT = `https://${variables.SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${variables.SANITY_DATASET}`;

export const formatDate = (date: string) => new Date(date).toLocaleString();
