import React, { ReactNode } from 'react';

import { Heading } from '@/components/Heading';
import { getArticles, getPosts } from '@/lib/notion';
import { ArticleType, PostType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Article } from '@/components/Article';
import { SEO } from '@/components/seo';

interface WritingsProps {
    posts: PostType[];
    articles: ArticleType[];
}

const Writings = ({ posts, articles }: WritingsProps): ReactNode => {
    return (
        <>
            <SEO title="Writings" description="Articles and Content written by bhavik chavda" />
            <Heading
                icon="linkedIn"
                title="LinkedIn Posts"
                variant="description"
                className="mt-7 mb-5"
                description="Recent Posts on LinkedIn"
            />
            <section className="text-gray-600">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {posts.map((post) => (
                            <Post post={post} key={post.id} />
                        ))}
                    </div>
                </div>
            </section>

            <Heading
                icon="writings"
                title="Recent Articles"
                variant="description"
                className="mt-10"
                description="Recent written articles"
            />
            <div className="mx-auto space-y-2 mt-3 mb-10">
                {articles.map((article) => (
                    <Article article={article} key={article.id} />
                ))}
            </div>
        </>
    );
};

export const getStaticProps = async () => {
    const posts = await getPosts(6);
    const articles = await getArticles(4);
    return {
        props: {
            posts,
            articles,
        },
    };
};

export default Writings;
