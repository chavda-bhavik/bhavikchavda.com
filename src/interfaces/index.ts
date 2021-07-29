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
    | 'joyStick';

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

export type ArticleType = {
    id: string;
    date: string;
    description: string;
    blogURL: string;
    heading: string;
    imageURL: string;
    tags: TagType[];
};
