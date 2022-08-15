import React from 'react';

import { ProjectType } from '@/interfaces';
import { Icon } from '@/components/Icon';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div
            className="relative h-72 sm:h-80 md:h-96 flex items-end justify-start text-left  border-2 border-classy-maroon rounded-lg shadow-lg  bg-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${project.imageUrl})`,
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900 rounded-b-lg"></div>
            <main className="p-5 z-10">
                <p className="text-xl tracking-tight font-medium leading-7 font-regular text-white">
                    {project.heading}
                </p>
                <p className="text-md tracking-tight leading-5 font-regular text-white">
                    {project.description}
                </p>
                <div className="flex flex-row space-x-1 mt-3">
                    <a
                        href={project.githubUrl}
                        className="btn-sm btn-tertiary inline-block"
                        target="_blank"
                        rel="norefferer noopener"
                        title="Github"
                    >
                        <Icon icon="code" size="sm" />
                    </a>
                    <a
                        href={project.url}
                        className="btn-sm btn-tertiary inline-block"
                        target="_blank"
                        rel="norefferer noopener"
                        title="Live Demo"
                    >
                        <Icon icon="world" size="sm" />
                    </a>
                </div>
            </main>
        </div>
    );
};
