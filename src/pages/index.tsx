import { Fragment } from 'react';
import { GetStaticProps } from 'next';

import { Heading } from '@/components/Heading';
import { getPosts, getProjects } from '@/lib/notion';
import { PostType, ProjectType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Project } from '@/components/Project';
import { Highlight } from '@/components/Highlight';
import { SEO } from '@/components/seo';
import { links } from '@/config/constants';
import { NavLink } from '@/components/NavLink';

interface IndexPageProps {
    posts: PostType[];
    projects: ProjectType[];
}

const IndexPage = ({ posts, projects }: IndexPageProps) => {
    return (
        <Fragment>
            <SEO title="Home" />
            <Highlight />

            {/* About */}
            <Heading icon="user" title="About" />
            <ul className="list-disc list-inside mt-3 mb-10">
                <li>
                    Currently working as web developer at{' '}
                    <NavLink className="link" link={links.lanetTeam} type="external">
                        LaNet Team Software Solutions
                    </NavLink>
                    . Making web better with NodeJS and ReactJS.
                </li>
                <li>
                    Pursuded degree of Master of Science in Information Technology from{' '}
                    <NavLink className="link" link={links.jpdawer} type="external">
                        J.P.Dawer Insitute of Communication Technology
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
            <div className="space-y-1 mt-3 mb-10">
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts(3);
    const projects = await getProjects(3);
    return {
        props: {
            posts,
            projects,
        },
    };
};

export default IndexPage;
