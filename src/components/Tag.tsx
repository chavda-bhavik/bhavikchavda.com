import React from 'react';

interface TagProps {
    text: string;
}

export const Tag: React.FC<TagProps> = ({ text }) => {
    return (
        <span className="text-sm py-1 px-2 rounded-xl bg-gray-800 border border-gray-500 text-white group-hover:bg-white group-hover:border-gray-100 group-hover:text-black">
            #{text}
        </span>
    );
};
