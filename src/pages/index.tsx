import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { getPosts, getProjects } from '@/lib/notion';
import { PostType, ProjectType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Project } from '@/components/Project';
import { Highlight } from '@/components/Highlight';
import { SEO } from '@/components/seo';

interface IndexPageProps {
    posts: PostType[];
    projects: ProjectType[];
}

const IndexPage = ({ posts, projects }: IndexPageProps) => {
    return (
        <Layout>
            <SEO title="Home" />
            <Highlight />

            {/* About */}
            <Heading icon="user" title="About" />
            <ul className="list-disc list-inside mt-3 mb-10">
                <li>
                    Currently working as web developer at{' '}
                    <a href="#">La Net Team Software Solution</a>. Making web better with NodeJS and
                    ReactJS.
                </li>
                <li>
                    Pursuded degree of Master of Science in Information Technology from J.P.Dawer
                    Institute of Technology.
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
        </Layout>
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
