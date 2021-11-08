import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Fragment } from 'react';
import { SEO } from '@/components/seo';
import { Frontmatter } from '@/interfaces';
import { PostList } from '@/components/postList';

export default function Blog({ posts }: { posts: Frontmatter[] }) {
    return (
        <Fragment>
            <SEO title="Blog" />
            <span className="inline-flex p-3 rounded-full bg-back-subtle">{/* <Blog24 /> */}</span>
            <h1 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-accent">Blog</h1>

            <p className="max-w-md mb-12 text-fore-subtle">
                I <em className="italic">sometimes</em> write about things I learn in web
                development and also stuff that I find interesting
            </p>
            <PostList posts={posts} />
            {/* <Contact /> */}
        </Fragment>
    );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('content', 'blog'));

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(path.join('content', 'blog', filename), 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            ...frontMatter,
            slug: filename.split('.')[0],
        };
    });

    return {
        props: {
            posts,
        },
    };
};
