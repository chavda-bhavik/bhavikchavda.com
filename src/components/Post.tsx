import React from 'react';

import { PostType } from '@/interfaces';
import { NavLink } from './NavLink';
import Image from 'next/image';

interface PostProps {
    post: PostType;
}

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

export const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <NavLink type="external" link={post.linkedInURL} className="block p-2 md:w-1/3">
            <div className="h-full border-2 border-classy-maroon hover:shadow-lg border-opacity-60 rounded-lg overflow-hidden cursor-pointer transition-colors hover:border-classy-dark duration-300">
                <Image
                    loader={imageLoader}
                    src={post.imageUrl}
                    height="300"
                    width="400"
                    alt="post"
                    layout="responsive"
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                />
                <div className="p-4 flex flex-col h-full">
                    <div>
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                            CATEGORY
                        </h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                            {post.heading}
                        </h1>
                        <p className="leading-relaxed mb-3">{post.description}</p>
                    </div>
                    <a className="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Read More
                        <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </NavLink>
    );
};

// <NavLink type="external" link={post.linkedInURL} className="block card relative">
// {/* <div className="max-w-xl"> */}
// <h3 className="card-heading">{post.heading}</h3>
// <h4 className="card-description flex-1">{post.description}</h4>
// {/* </div> */}
// {/* <Icon
//     icon="externalLink"
//     size="md"
//     className="absolute top-1/3 right-2 group-hover:bg-classy-dark rounded-full transition-all group-hover:text-classy-light p-1"
// /> */}
// </NavLink>
