import React from 'react';
import { ArticleType } from '@/interfaces';
import { Icon } from '@/components/Icon';
import { Tag } from './Tag';

interface ArticleProps {
    article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
        <a href="" className="block card">
            <h3 className="card-heading">{article.heading}</h3>
            <h4 className="card-description">{article.description}</h4>
            <span className="group-hover:text-classy-medium link group-hover:underline">
                Read More <Icon icon="externalLink" className="inline-block h-4 w-4" />
            </span>
        </a>
    );
};
