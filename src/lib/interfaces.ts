interface ISlug {
	current: string;
}

interface ICategory {
	title: string;
}

export interface IAuthor {
	name: string;
	slug: ISlug;
}
export interface IPost {
	_id: string;
	title: string;
	slug: ISlug;
	author: IAuthor;
	body: any;
	categories: ICategory[];
	_updatedAt: string;
}
