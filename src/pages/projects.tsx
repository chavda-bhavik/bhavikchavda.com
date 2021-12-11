import React, { ReactNode } from 'react';

import SEO from '@/components/SEO';
import { ProjectType } from '@/interfaces';
import { Layout } from '@/components/Layout';
import { Project } from '@/components/Project';
import { Heading } from '@/components/Heading';

interface ProjectsProps {}

const Projects = ({}: ProjectsProps): ReactNode => {
    let projects: ProjectType[] = [];
    return (
        <Layout>
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
        </Layout>
    );
};

export default Projects;
