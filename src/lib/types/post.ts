import type { Prisma } from "@prisma/client";

interface _SomePostsProps {
	title: string;
	timestamp: Date | string;
	time2read: number;
	slug: string;
}

type SomePostsProps = _SomePostsProps[];

/**
 * @todo
 */
interface AllPostsProps {
	TODO :string;
}

interface _PostProps {
	slug: string;
	title: string | null;
	timestamp: Date | string;
	time2read: number | null;
	tags: Prisma.JsonValue | ArrayLike<string>;
	views: number | null;
	body: string;
}

type PostProps = _PostProps | undefined;

export type { SomePostsProps, AllPostsProps, PostProps };
