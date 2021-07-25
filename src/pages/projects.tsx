import React from 'react';
import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import { getProjects } from '@/lib/notion';
import { ProjectType } from '@/interfaces';
import { Heading } from '@/components/Heading';
import { Project } from '@/components/Project';

interface ProjectsProps {
    projects: ProjectType[];
}

const Projects = ({ projects }: ProjectsProps) => {
    return (
        <Layout title="Bhavik Chavda | Project">
            <Heading
                icon="thunder"
                title="Projects"
                className="mt-6 mb-4"
                variant="description"
                description="Full Stack Web development Pet Projects"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-3 gap-2">
                {projects.map((project) => (
                    <Project project={project} key={project.id} />
                ))}
            </div>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    let projects = await getProjects();
    return {
        props: {
            projects,
        },
    };
};

export default Projects;
