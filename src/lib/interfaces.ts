import type PortableText from '@portabletext/svelte';

export interface IVariables {
	SANITY_PROJECT_ID: string;
	SANITY_PROJECT_NAME: string;
	SANITY_API_TOKEN: string;
	SANITY_DATASET: string;
	SANITY_GRAPHQL_URL: string;
}

interface ISlug {
	current: string;
}

export interface ICategory {
	title: string;
}

export interface IImage {
	_type: string;
	asset: {
		_ref: string;
		_type: string;
	};
	crop: {
		bottom: number;
		left: number;
		top: number;
		right: number;
		_type: string;
	};
	hotspot: {
		height: number;
		width: number;
		x: number;
		y: number;
		_type: string;
	};
}

export interface IAuthor {
	name: string;
	slug: ISlug;
	bio: PortableText;
	image?: IImage;
	posts?: IPost[];
}
export interface IPost {
	_id: string;
	title: string;
	slug: ISlug;
	author: IAuthor;
	body: PortableText;
	mainImage: IImage;
	categories: ICategory[];
	_updatedAt: string;
}
