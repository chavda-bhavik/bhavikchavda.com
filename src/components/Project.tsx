import React from 'react';

import { ProjectType } from '@/interfaces';
import { Tag } from './Tag';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="h-full w-full group cursor-pointer self-stretch">
            <div className="p-2 h-full w-full flex flex-col bg-classy-base transition-all transform ease-in-out rounded-md hover:-translate-y-1 group-hover:shadow-lg border-2 border-transparent group-hover:border-classy-dark">
                <p className="tracking-normal mb-2 font-semibold text-2xl">{project.heading}</p>
                <p className="text-base mb-6 text-gray-800 flex-1">{project.description}</p>
                <div className="flex flex-row flex-wrap">
                    {project.tags.map((tag) => (
                        <Tag text={tag.name} key={tag.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};
