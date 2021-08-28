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
            link={project.isLive ? project.liveURL : project.githubURL}
            type="external"
            className="rounded-lg border-2 bg-classy-base hover:border-classy-dark transition-colors duration-200 cursor-pointer block"
        >
            <div className="flex flex-col sm:flex-row">
                <div className="sm:pl-8 sm:py-4 border-gray-800 text-center sm:text-left">
                    <h2 className="card-heading">{project.heading}</h2>
                    <p className="leading-relaxed text-lg mb-4">{project.description}</p>
                    {project.tags.map((tag) => (
                        <Tag text={tag.name} key={tag.name} />
                    ))}
                </div>
            </div>
        </NavLink>
    );
};
// <NavLink
//     link={project.isLive ? project.liveURL : project.githubURL}
//     type="external"
//     className="h-full w-full block group cursor-pointer self-stretch"
// >
//     <div className="p-2 h-full w-full card">
//         <h3 className="card-heading">{project.heading}</h3>
//         <h4 className="card-description flex-1">{project.description}</h4>
//         <div className="flex flex-row flex-wrap mt-4">
//             {project.tags.map((tag) => (
//                 <Tag text={tag.name} key={tag.name} />
//             ))}
//         </div>
//     </div>
// </NavLink>
