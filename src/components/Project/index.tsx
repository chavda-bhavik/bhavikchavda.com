import React from 'react';

import { ProjectType } from '@/interfaces';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="p-2 border-2 border-slate-200 rounded-lg bg-classy-base block w-full text-center">
            <h2 className="card-heading">{project.heading}</h2>
            <img src={project.imageUrl} alt="Pizzorder" className="w-1/2 h-1/3 mx-auto my-2 border-2 rounded-md border-slate-200" />
            <div className='flex flex-row space-x-1 justify-center pb-3'>
                <a href={project.githubUrl} className='btn-sm btn-secondary inline-block' target="_blank" rel="norefferer noopener">Source</a>
                <a href={project.url} className='btn-sm btn-secondary inline-block' target="_blank" rel="norefferer noopener">Demo</a>
            </div>
            <p className="leading-snug text-base mb-4">{project.description}</p>
        </div>
    );
};
