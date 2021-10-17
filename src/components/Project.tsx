import React from 'react';

import { ProjectType } from '@/interfaces';
import { NavLink } from '@/components/NavLink';
import { Tag } from './Tag';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <NavLink
            link={project.redirectURL}
            type="external"
            className="rounded-lg border-2 bg-classy-base hover:border-classy-dark transition-colors duration-200 cursor-pointer block"
        >
            <div className="sm:pl-8 py-4 border-gray-800 text-center sm:text-left">
                <h2 className="card-heading">{project.heading}</h2>
                <p className="leading-relaxed text-lg mb-4">{project.description}</p>
                <div>
                    {project.tags.map((tag) => (
                        <Tag text={tag.name} key={tag.name} />
                    ))}
                </div>
            </div>
        </NavLink>
    );
};
