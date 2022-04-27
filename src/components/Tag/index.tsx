import React from 'react';

interface TagProps {
    text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <span className="text-xs p-1 rounded-md bg-classy-dark text-white border-2 border-classy-dark">
            #{text}
        </span>
    );
};
