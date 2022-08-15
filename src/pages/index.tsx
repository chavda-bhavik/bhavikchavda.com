import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { links } from '@/config/constants';
import { ArticleType, ProjectType } from '@/interfaces';

import { SEO } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { NavLink } from '@/components/NavLink';
import { Highlight } from '@/components/Highlight';
import { Heading } from '@/components/Heading';
import { Project } from '@/components/Project';
import { Article } from '@/components/Article';

interface HomeProps {
    articles: {
        nodes: {
            frontmatter: ArticleType;
        }[];
    };
    projects: {
        nodes: {
            frontmatter: ProjectType;
        }[];
    };
}

const Home = ({
    data: {
        articles: { nodes: articles },
        projects: { nodes: projects },
    },
}: PageProps<HomeProps>) => {
    return (
        <>
            <Layout path="/">
                <SEO title="Home" />

                <Highlight />

                {/* About */}
                <Heading icon="user" title="About" />
                <ul className="list-disc list-inside mt-3 mb-10">
                    <li>
                        Currently working as Full-Stack Developer (<i>R&amp;D</i>) in{' '}
                        <NavLink
                            className="link"
                            link={links.knovator}
                            type="external"
                            title="Knovator Technologies"
                        >
                            Knovator Technologies
                        </NavLink>
                        . Where I perform research and build reusable components that team can
                        easily integrate in project and speed up their development time.
                    </li>
                    <li>
                        Studied Master of Science in Information Technology from{' '}
                        <NavLink className="link" link={links.jpdawer} type="external">
                            J.P.Dawer Insitute of Communication and Technology
                        </NavLink>
                        .
                    </li>
                </ul>

                {/* Projects */}
                <Heading icon="thunder" title="Projects" />
                <div className="mt-3 mb-10 grid grid-cols-1 gap-y-2">
                    {projects.map((project, i) => (
                        <Project key={i} project={project.frontmatter} />
                    ))}
                </div>

                {/* Articles */}
                <Heading icon="writings" title="Recent Articles" className="mt-10" />
                <div className="mx-auto space-y-2 mt-3 mb-10">
                    {articles.map((article, i) => (
                        <Article article={article.frontmatter} key={i} />
                    ))}
                </div>
            </Layout>
        </>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        projects: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "projects" }, show: { eq: true } } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 2
        ) {
            nodes {
                frontmatter {
                    description
                    date(fromNow: true)
                    heading
                    tags
                    title
                    url
                    githubUrl
                    imageUrl
                }
            }
        }
        articles: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "articles" } } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 2
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
