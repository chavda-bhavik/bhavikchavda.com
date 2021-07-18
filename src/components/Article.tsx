import React from 'react';
import { ArticleType } from '@/interfaces';
import { Icon } from '@/components/Icon';
import { Tag } from './Tag';

interface ArticleProps {
    article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
    return (
        <div className="px-2 py-5 cursor-pointer hover:bg-gray-400 ease-in-out transition-colors group hover:shadow-lg rounded-md relative">
            <p className="text-xl mb-2 group-hover:text-white">{article.heading}</p>
            <p className="text-base mb-2 group-hover:text-gray-50">{article.description}</p>
            <div className="flex flex-row space-x-2">
                {article.tags.map((tag) => (
                    <Tag text={tag.name} key={tag.name} />
                ))}
            </div>
            <Icon
                icon="externalLink"
                fill="gray"
                size="sm"
                className="absolute top-2 right-1 bg-gray-300 group-hover:bg-blue-200 rounded-full p-1"
            />
        </div>
    );
};
