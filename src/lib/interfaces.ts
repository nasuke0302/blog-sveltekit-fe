import type PortableText from '@portabletext/svelte';

interface ISlug {
	current: string;
}

interface ICategory {
	title: string;
}

interface IImage {
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
	categories: ICategory[];
	_updatedAt: string;
}
