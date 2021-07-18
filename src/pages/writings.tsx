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
            <Heading icon="highlighter" title="Recent Posts" />
            <div className="divide-y-2 divide-solid mb-10">
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>

            <Heading icon="writings" title="Recent Articles" />
            <div className="container w-100 mx-auto space-y-2">
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
