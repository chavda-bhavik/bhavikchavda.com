import React from 'react';

import { ProjectType } from '@/interfaces';
import { Tag } from './Tag';

interface ProjectProps {
    project: ProjectType;
}

export const Project: React.FC<ProjectProps> = ({ project }) => {
    return (
        <div className="h-full w-full group cursor-pointer self-stretch">
            <div className="p-2 h-full w-full card">
                <h3 className="card-heading">{project.heading}</h3>
                <h4 className="card-description flex-1">{project.description}</h4>
                <div className="flex flex-row flex-wrap mt-4">
                    {project.tags.map((tag) => (
                        <Tag text={tag.name} key={tag.name} />
                    ))}
                </div>
            </div>
        </div>
    );
};
