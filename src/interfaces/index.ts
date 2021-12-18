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
    | 'chevronCircleLeftF' | 'loader';

export type IconsSizesType = 'sm' | 'md' | 'lg';

export type PostType = {
    heading: string;
    description: string;
    url: string;
    date: string;
    tags: string[];
    category: string;
};

export type ProjectType = {
    heading: string;
    description: string;
    url: string;
    githubUrl: string;
    date: string;
    tags: string[];
};

export type ArticleType = {
    heading: string;
    description: string;
    url: string;
    date: string;
    tags: string[];
};