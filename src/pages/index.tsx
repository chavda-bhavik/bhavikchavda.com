import React from 'react';
import { graphql } from 'gatsby';

import { Layout } from '@/components/Layout';
import SEO from '@/components/SEO';
import { Post } from '@/components/Post';
import { links } from '@/config/constants';
import { NavLink } from '@/components/NavLink';
import { Highlight } from '@/components/Highlight';
import { Heading } from '@/components/Heading';
import { Project } from '@/components/Project';

const Home = () => {
    return (
        <Layout>
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
                <Project
                    project={{
                        heading: 'Pomodoro',
                        description: 'A simple pomodoro timer',
                        redirectURL: 'https://pomodoro-timer.netlify.app/',
                        id: 'asdf',
                        date: '2020-05-01',
                        githubURL: 'www.github.com',
                        tags: [],
                    }}
                />
            </div>

            {/* Writings */}
            <Heading icon="linkedIn" title="LinkedIn Posts" />
            <div className="space-y-1 mt-3 mb-10 flex flex-wrap">
                <Post
                    post={{
                        category: 'Projects',
                        description: 'A simple blog application built with GatsbyJS',
                        fileUrl: '',
                        heading: 'Blog',
                        id: 'asdf',
                        imageUrl: '',
                        publishDate: '18/09/1999',
                        tags: [],
                    }}
                    onClick={() => {}}
                />
            </div>
        </Layout>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                excerpt
                fields {
                    slug
                }
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                }
            }
        }
    }
`;
