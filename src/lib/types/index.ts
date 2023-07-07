import type { Prisma } from "@prisma/client";

interface headerPropsType {
	icon: string;
	links: string[];
}
interface introCardPropsType {
	title: string;
	message: string;
	profiles: string[]
}
type latestPostsPropType = {
	title: string;
	date: string;
	time2read: number;
	link: string;
}[];


interface footerPropType {
	links: Array<string>;
}

export type {
	headerPropsType,
	introCardPropsType,
	latestPostsPropType,
	footerPropType
};

export type postType = {
	slug: string;
	title: string | null;
	timestamp: Date | string;
	time2read: number | null;
	tags: Prisma.JsonValue;
	views: number | null;
	body: string;
} | null
