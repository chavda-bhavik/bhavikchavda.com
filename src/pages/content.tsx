import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Heading } from '@/components/Heading';
import { getArticles, getPosts } from '@/lib/notion';
import { ArticleType, PostsReturnType, PostType } from '@/interfaces';
import { Post } from '@/components/Post';
import { Article } from '@/components/Article';
import { SEO } from '@/components/seo';
import { Backdrop } from '@/components/Backdrop';
import { Button } from '@/components/Button';

interface WritingsProps {
    fetchedPostsData: PostsReturnType;
    articles: ArticleType[];
    posts: ArticleType[];
}

const DynamicPDFViewer = dynamic<any>(
    () => import('@/components/PDFViewer').then((mod) => mod.PDFViewer),
    {
        ssr: false,
    }
);

const Writings = ({ fetchedPostsData, articles, posts }: WritingsProps) => {
    const [selectedPost, setSelectedPost] = useState<PostType>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>();
    const [postsData, setPostsData] = useState<PostsReturnType>({
        has_more: false,
        posts: [],
        next_cursor: null,
    });
    const [showPDF, setShowPDF] = useState(false);

    useEffect(() => {
        setPostsData(fetchedPostsData);
    }, [fetchedPostsData]);

    const onPostSelect = (post: PostType) => {
        if (post.fileUrl) {
            setShowPDF(true);
            setSelectedPost(post);
        }
    };
    const onPDFClose = () => {
        setShowPDF(false);
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
        <>
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
                    <Article article={article} key={article.id} type="external" />
                ))}
                {posts.map((post) => (
                    <Article article={post} key={post.id} type="internal" />
                ))}
            </div>

            <Backdrop show={showPDF} onClose={onPDFClose} className="bg-gray-400 opacity-80">
                {selectedPost?.fileUrl && <DynamicPDFViewer pdfUrl={selectedPost?.fileUrl} />}
            </Backdrop>
        </>
    );
};

export const getServerSideProps: GetServerSideProps<Partial<WritingsProps>> = async () => {
    const files = fs.readdirSync(path.join('content/blog'));

    const posts: ArticleType[] = files.map((filename, i) => {
        const markdownWithMeta = fs.readFileSync(path.join('content/blog', filename), 'utf-8');
        const { data: frontMatter } = matter(markdownWithMeta);

        return {
            id: i + 1,
            date: frontMatter.publishedAt,
            tags: frontMatter.tags,
            imageURL: frontMatter.thumbnailUrl,
            heading: frontMatter.title,
            description: frontMatter.description,
            blogURL: `blog/${filename.split('.')[0]}`,
        };
    });

    const postsData = await getPosts(6);
    const articles = await getArticles(4);
    return {
        props: {
            fetchedPostsData: postsData,
            articles,
            posts,
        },
    };
};

export default Writings;
