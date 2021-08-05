import React, { Fragment, ReactNode } from 'react';
import { GetStaticProps } from 'next';

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
            <SEO title="Projects" description="projects created by bhavik chavda" />
            <Heading
                icon="joyStick"
                title="Projects"
                className="mt-7 mb-5"
                variant="description"
                description="Web Development side Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3 gap-2">
                {projects.map((project) => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects();
    return {
        props: {
            projects,
        },
    };
};

export default Projects;
