import React from 'react';
import { IconsType } from '../types';
import { Icon } from './Icon';

interface HeadingProps {
    icon: IconsType;
    title: string;
}

export const Heading: React.FC<HeadingProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-row items-center mt-1 mb-2">
            <Icon
                icon={icon}
                className="bg-gray-400 p-1 rounded-full mx-2"
                fill="black"
                size="lg"
            />
            <h2 className="text-lg">{title}</h2>
        </div>
    );
};
