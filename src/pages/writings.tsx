import React from 'react';

import Layout from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { getArticles, getPosts } from '@/lib/notion';
import { ArticleType, PostType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Article } from '@/components/Article';

interface WritingsProps {
    posts: PostType[];
    articles: ArticleType[];
}

const Writings = ({ posts, articles }: WritingsProps) => {
    return (
        <Layout title="Bhavik Chavda | Writings">
            <Heading
                icon="linkedIn"
                title="LinkedIn Posts"
                variant="description"
                className="mt-7 mb-5"
                description="I share usefull posts on LinkedIn"
            />
            <div className="space-y-2 mt-3 mb-10">
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>

            <Heading
                icon="writings"
                title="Recent Articles"
                variant="description"
                className="mt-10"
                description="I sometimes writes blogs too"
            />
            <div className="mx-auto space-y-2 mt-3 mb-10">
                {articles.map((article) => (
                    <Article article={article} key={article.id} />
                ))}
            </div>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const posts = await getPosts(4);
    const articles = await getArticles(4);
    return {
        props: {
            posts,
            articles,
        },
    };
};

export default Writings;
