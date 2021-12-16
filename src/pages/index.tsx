import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';

import { links } from '@/config/constants';
import { PostType, ProjectType } from '@/interfaces';

import { Loader } from '@/components/Loader';
import { Backdrop } from '@/components/Backdrop';
import { SEO } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { Post } from '@/components/Post';
import { NavLink } from '@/components/NavLink';
import { Highlight } from '@/components/Highlight';
import { Heading } from '@/components/Heading';
import { Project } from '@/components/Project';

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

const LazyPDFViewer = React.lazy(() => import('@/components/PDFViewer'));

const Home = (props: PageProps<HomeProps>) => {
    const isSSR = typeof window === 'undefined';
    const [selectedPost, setSelectedPost] = useState<PostType>();

    const onPostSelect = (post: PostType) => {
        setSelectedPost(post);
    };

    return (
        <>
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
                        . Where I build accessible, performant and scalable web applications using
                        JavaScript and TypeScript.
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
                        <Post key={i} post={post.frontmatter} onClick={onPostSelect} />
                    ))}
                </div>
            </Layout>
            {!isSSR && (
                <React.Suspense fallback={<Loader />}>
                    <Backdrop
                        show={selectedPost?.url ? true : false}
                        onClose={() => setSelectedPost(undefined)}
                        className="bg-gray-900 opacity-30"
                    >
                        <LazyPDFViewer pdfUrl={selectedPost?.url} />
                    </Backdrop>
                </React.Suspense>
            )}
        </>
    );
};

export default Home;

export const pageQuery = graphql`
    query {
        posts: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "posts" } } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 3
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
            limit: 3
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
