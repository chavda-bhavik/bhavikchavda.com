import React from 'react';
import { ArticleType } from '@/interfaces';
import { Icon } from '@/components/Icon';
import { NavLink } from '@/components/NavLink';

interface ArticleProps {
    article: ArticleType;
    type?: 'external' | 'internal';
}

export const Article: React.FC<ArticleProps> = ({ article, type = 'external' }) => {
    return (
        <NavLink
            link={article.blogURL}
            className="block card"
            type={type}
            title={`Read '${article.heading}'`}
        >
            <h3 className="card-heading">{article.heading}</h3>
            <h4 className="card-description">{article.description}</h4>
            <span className="group-hover:text-classy-medium link group-hover:underline">
                Read More{' '}
                {type === 'external' && (
                    <Icon icon="externalLink" className="inline-block h-4 w-4" />
                )}
            </span>
        </NavLink>
    );
};
