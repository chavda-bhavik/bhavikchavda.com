import React from 'react';

interface TagProps {
    text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <span className="text-xs mb-2 mr-2 p-1 rounded-sm transition-colors bg-classy-gray text-gray-900 border-2 border-transparent group-hover:border-classy-dark hover:border-classy-dark">
            #{text}
        </span>
    );
};