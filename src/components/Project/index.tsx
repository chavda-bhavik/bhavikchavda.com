import React from 'react';

import { ProjectType } from '@/interfaces';
import { NavLink } from '@/components/NavLink';
import { Tag } from '@/components/Tag';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <NavLink
            link={project.url}
            type="external"
            className="rounded-lg border-2 bg-classy-base hover:border-classy-dark transition-colors duration-200 cursor-pointer block w-full"
        >
            <div className="sm:pl-8 py-4 border-gray-800 text-center sm:text-left">
                <h2 className="card-heading">{project.heading}</h2>
                <p className="leading-relaxed text-lg mb-4">{project.description}</p>
                <div>
                    {project.tags.map((tag) => (
                        <Tag text={tag} key={tag} />
                    ))}
                </div>
            </div>
        </NavLink>
    );
};