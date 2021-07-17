export type IconsType = 'user' | 'thunder' | 'writings';

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
    tags: TagType[];
};

export type ProjectType = {
    id: string;
    date: string;
    description: string;
    githubURL: string;
    heading: string;
    isLive: boolean;
    tags: TagType[];
};
