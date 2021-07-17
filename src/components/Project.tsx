import React from 'react';

import { ProjectType } from '@/interfaces';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="px-2 py-5 cursor-pointer hover:bg-gray-400 ease-in-out transition-colors group hover:shadow-lg rounded-md">
            <p className="text-xl mb-2 group-hover:text-white">{project.heading}</p>
            <p className="text-base mb-2 group-hover:text-gray-50">{project.description}</p>
            <div className="flex flex-row space-x-2">
                {project.tags.map((tag) => (
                    <span
                        className="text-sm p-1 rounded-md bg-gray-800 border-1 border-gray-500 text-white group-hover:bg-white group-hover:border-gray-100 group-hover:text-black"
                        key={tag.name}
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
};
