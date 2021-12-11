import React, { useEffect, useState } from 'react';

import { Heading } from '@/components/Heading';
import { ArticleType, PostsReturnType, PostType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Article } from '@/components/Article';
import SEO from '@/components/SEO';
import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';

interface WritingsProps {}

const Writings = () => {
    const [selectedPost, setSelectedPost] = useState<PostType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [postsData, setPostsData] = useState<PostsReturnType>({
        has_more: false,
        posts: [],
        next_cursor: null,
    });
    let articles = [];

    const onPostSelect = (post: PostType) => {
        if (post.fileUrl) {
            setSelectedPost(post);
        }
    };
    const onPDFClose = () => {
        setSelectedPost(undefined);
    };
    const fetchMorePosts = async () => {
        if (!postsData.has_more) return;
        setLoading(true);
        try {
            let response = await fetch(`/api/posts?start_cursor=${postsData.next_cursor}`);
            if (!response.ok) throw new Error();
            // everything gone well
            let newPostsData = (await response.json()) as PostsReturnType;
            setPostsData(newPostsData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError('Some error occurred! Please try again later.');
        }
    };

    return (
        <Layout>
            <SEO title="Writings" description="Articles and Content written by bhavik chavda" />

            {/* Posts */}
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
                        {postsData.posts?.map((post) => (
                            <Post post={post} key={post.id} onClick={onPostSelect} />
                        ))}
                    </div>
                </div>
                {postsData.has_more && (
                    <Button
                        variant="primary"
                        onClick={fetchMorePosts}
                        loading={loading}
                        className="mx-auto font-medium"
                    >
                        Load More Posts
                    </Button>
                )}
                {error && <p className="text-red-500 font-medium">{error}</p>}
            </section>

            {/* Articles */}
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
        </Layout>
    );
};

export default Writings;
