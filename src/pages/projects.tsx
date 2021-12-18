import React, { ReactNode } from 'react';
import { graphql, PageProps } from 'gatsby';

import { ProjectType } from '@/interfaces';
import { SEO } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { Project } from '@/components/Project';

interface ProjectsProps {
    projects: {
        nodes: {
            frontmatter: ProjectType;
        }[];
    };
}

const Projects = ({ data }: PageProps<ProjectsProps>): ReactNode => {
    return (
        <Layout path="/projects">
            <SEO title="Projects" description="Hobby projects created by bhavik chavda" />
            <Heading
                icon="joyStick"
                title="Projects"
                className="mt-7 mb-5"
                variant="description"
                description="Hobby Projects"
            />
            <div className="space-y-2">
                {data.projects.nodes.map((project, i) => (
                    <Project project={project.frontmatter} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export default Projects;

export const pageQuery = graphql`
    query {
        projects: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "projects" } } }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            nodes {
                frontmatter {
                    description
                    date(fromNow: true)
                    heading
                    tags
                    title
                    url
                }
            }
        }
    }
`;
