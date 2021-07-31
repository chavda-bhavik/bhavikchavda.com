import React from 'react';

import { PostType } from '@/interfaces';
import { NavLink } from '@/components/NavLink';
// import { Icon } from '@/components/Icon';

interface PostProps {
    post: PostType;
}

export const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <NavLink type="external" link={post.linkedInURL} className="block card relative">
            {/* <div className="max-w-xl"> */}
            <h3 className="card-heading">{post.heading}</h3>
            <h4 className="card-description flex-1">{post.description}</h4>
            {/* </div> */}
            {/* <Icon
                icon="externalLink"
                size="md"
                className="absolute top-1/3 right-2 group-hover:bg-classy-dark rounded-full transition-all group-hover:text-classy-light p-1"
            /> */}
        </NavLink>
    );
};
