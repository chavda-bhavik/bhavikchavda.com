import React, { useState } from 'react';
import { Fragment } from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';

import { getPosts, getProjects } from '@/lib/notion';
import { Heading } from '@/components/Heading';
import { PostType, ProjectType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Project } from '@/components/Project';
import { Highlight } from '@/components/Highlight';
import { SEO } from '@/components/seo';
import { links } from '@/config/constants';
import { NavLink } from '@/components/NavLink';
import { Backdrop } from '@/components/Backdrop';

interface IndexPageProps {
    posts: PostType[];
    projects: ProjectType[];
}

// dynamically (lazy) loading PDFViewer component
const DynamicPDFViewer = dynamic(() =>
    import('@/components/PDFViewer').then((mod) => mod.PDFViewer)
);

const IndexPage = ({ posts, projects }: IndexPageProps) => {
    const [selectedPost, setSelectedPost] = useState<PostType>();
    const [showPDF, setShowPDF] = useState(false);

    const onPostSelect = (post: PostType) => {
        setShowPDF(true);
        setSelectedPost(post);
    };
    const onPDFClose = () => {
        setShowPDF(false);
        setSelectedPost(null);
    };

    return (
        <Fragment>
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
            <div className="space-y-1 mt-3 mb-10">
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </div>

            {/* Writings */}
            <Heading icon="linkedIn" title="LinkedIn Posts" />
            <div className="space-y-1 mt-3 mb-10 flex flex-wrap">
                {posts.map((post) => (
                    <Post key={post.id} post={post} onClick={onPostSelect} />
                ))}
            </div>

            <Backdrop show={showPDF} onClose={onPDFClose} className="bg-gray-400 opacity-80">
                <DynamicPDFViewer pdfUrl={selectedPost?.fileUrl} />
            </Backdrop>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const postsData = await getPosts(3);
    const projects = await getProjects(3);
    return {
        props: {
            posts: postsData.posts,
            projects,
        },
    };
};

export default IndexPage;
