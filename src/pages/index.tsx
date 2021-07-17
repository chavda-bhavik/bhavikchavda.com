import Image from 'next/image';
import { GetStaticProps } from 'next';

import Layout from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { getPosts, getProjects } from '@/lib/notion';
import { PostType, ProjectType } from '@/interfaces';

interface IndexPageProps {
    posts: PostType[];
    projects: ProjectType[];
}

const IndexPage = ({ posts, projects }: IndexPageProps) => {
    console.log(posts, projects);
    return (
        <Layout title="Bhavik Chavda | Full Stack Web Developer">
            <div className="flex flex-row h-full items-center my-40">
                <h1 className="font-serif text-3xl w-9/12">
                    Hey, I'm Bhavik. Full Stack Web Developer with keen focus on Web Performance and
                    User Experience.
                </h1>
                <Image src="/the-avatar.jpeg" className="rounded-full" height={150} width={150} />
            </div>

            {/* About */}
            <Heading icon="user" title="About" />
            <ul className="list-inside list-disc">
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
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts();
    const projects = await getProjects();
    return {
        props: {
            posts,
            projects,
        },
    };
};

export default IndexPage;
