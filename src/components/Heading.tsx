import React from 'react';
import { IconsType } from '@/interfaces';
import { Icon } from './Icon';

interface HeadingProps {
    icon: IconsType;
    title: string;
}

export const Heading: React.FC<HeadingProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-row items-center px-1 py-2">
            <Icon
                icon={icon}
                className="bg-gray-400 p-2 rounded-full mx-2"
                fill="black"
                size="lg"
            />
            <h2 className="text-lg uppercase tracking-widest">{title}</h2>
        </div>
    );
};
