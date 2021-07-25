import React from 'react';
import { IconsType } from '@/interfaces';
import { Icon } from './Icon';

interface HeadingProps {
    icon: IconsType;
    title?: string;
    className?: string;
    variant?: 'heading' | 'description';
    description?: string;
}

export const Heading: React.FC<HeadingProps> = ({
    icon,
    title,
    className,
    description,
    variant = 'heading',
}) => {
    let iconContent = (
        <Icon icon={icon} className="bg-classy-dark text-white p-2 rounded-full mx-2" size="lg" />
    );
    let descriptionContent = (
        <div className={`px-1 py-2 ${className}`}>
            {iconContent}
            {title && (
                <h2 className="text-2xl ml-1 mt-2 font-bold uppercase tracking-wide">{title}</h2>
            )}
            {description && <h3 className="text-lg text-gray-800 ml-1">{description}</h3>}
        </div>
    );
    let headingContent = (
        <div className="flex flex-row items-center px-1 py-2">
            {iconContent}
            {title && <h2 className="text-xl font-medium uppercase tracking-wide">{title}</h2>}
        </div>
    );
    return variant === 'heading' ? headingContent : descriptionContent;
};
