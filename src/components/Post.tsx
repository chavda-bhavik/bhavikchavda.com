import React from 'react';

import { PostType } from '@/interfaces';
import { NavLink } from './NavLink';

interface PostProps {
    post: PostType;
    onClick: (post: PostType) => void;
}

export const Post: React.FC<PostProps> = ({ post, onClick }) => {
    return (
        <div onClick={() => onClick(post)} className="block p-2 md:w-1/3">
            <div className="h-full border-2 flex flex-col border-classy-maroon hover:shadow-lg border-opacity-60 rounded-lg cursor-pointer transition-colors hover:border-classy-dark duration-300">
                <div className="p-4 flex flex-col h-full justify-between">
                    <div>
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">
                            {post.category}
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
        </div>
    );
};