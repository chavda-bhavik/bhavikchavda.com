export type IconsType =
    | 'user'
    | 'thunder'
    | 'writings'
    | 'smiley'
    | 'highlighter'
    | 'externalLink'
    | 'github'
    | 'linkedIn'
    | 'linkedInCircle'
    | 'email'
    | 'twitter'
    | 'inbox'
    | 'toggler'
    | 'sun'
    | 'moon'
    | 'close'
    | 'joyStick'
    | 'world'
    | 'code'
    | 'chevronCircleRightF'
    | 'chevronCircleLeftF'
    | 'loader';

export type IconsSizesType = 'sm' | 'md' | 'lg';

export type TagType = {
    color: string;
    name: string;
};

export type PostType = {
    id: string;
    description: string;
    fileUrl: string;
    heading: string;
    publishDate: string;
    imageUrl: string;
    tags: TagType[];
    category: string;
};

export type ProjectType = {
    id: string;
    date: string;
    description: string;
    githubURL: string;
    heading: string;
    redirectURL: string;
    tags: TagType[];
};

export type ArticleType = {
    id: string;
    date: string;
    description: string;
    blogURL: string;
    heading: string;
    imageURL: string;
    tags: TagType[];
};

export type PostsReturnType = {
    posts?: PostType[];
    has_more: boolean;
    next_cursor: string | null;
};

export type Frontmatter = {
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    tags: string[];
    toc?: boolean;
    isPublished: boolean;
    seoImage?: string;
    slug: string;
    readingTime?: { text: string; minutes: number; time: number; words: number };
};
