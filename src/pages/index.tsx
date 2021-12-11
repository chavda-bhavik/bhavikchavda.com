import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { links } from '@/config/constants';
import { PostType, ProjectType } from '@/interfaces';
import { SEO, Layout, Post, NavLink, Highlight, Heading, Project } from '@/components';

interface HomeProps {
    posts: {
        nodes: {
            frontmatter: PostType;
        }[];
    };
    projects: {
        nodes: {
            frontmatter: ProjectType;
        }[];
    };
}

const Home = (props: PageProps<HomeProps>) => {
    return (
        <Layout path="/">
            <SEO title="Home" />

            <Highlight />

            {/* About */}
            <Heading icon="user" title="About" />
            <ul className="list-disc list-inside mt-3 mb-10">
                <li>
                    Currently working as full stack web developer at{' '}
                    <NavLink className="link" link={links.lanetTeam} type="external">
                        LaNet Team Software Solutions
                    </NavLink>
                    . Crafting beautiful websites and building features that solves users problems.
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
            <div className="space-y-1 mt-3 mb-10 flex flex-wrap">
                {props.data.projects.nodes.map((project, i) => (
                    <Project key={i} project={project.frontmatter} />
                ))}
            </div>

            {/* Writings */}
            <Heading icon="linkedIn" title="LinkedIn Posts" />
            <div className="space-y-1 mt-3 mb-10 flex flex-wrap">
                {props.data.posts.nodes.map((post, i) => (
                    <Post key={i} post={post.frontmatter} onClick={() => {}} />
                ))}
            </div>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        posts: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "posts" } } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 4
        ) {
            nodes {
                frontmatter {
                    category
                    description
                    date(fromNow: true)
                    heading
                    tags
                    title
                    url
                }
            }
        }
        projects: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "projects" } } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 4
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
