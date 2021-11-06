import React, { ReactNode } from 'react';
import { GetServerSideProps } from 'next';

import { getProjects } from '@/lib/notion';
import { ProjectType } from '@/interfaces';
import { Heading } from '@/components/Heading';
import { Project } from '@/components/Project';
import { SEO } from '@/components/seo';

interface ProjectsProps {
    projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps): ReactNode => {
    return (
        <>
            <SEO title="Projects" description="hobby projects created by bhavik chavda" />
            <Heading
                icon="joyStick"
                title="Projects"
                className="mt-7 mb-5"
                variant="description"
                description="Web Development hobby Projects"
            />
            <div className="space-y-2">
                {projects.map((project) => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<ProjectsProps> = async () => {
    const projects = await getProjects();
    return {
        props: {
            projects,
        },
    };
};

export default Projects;
