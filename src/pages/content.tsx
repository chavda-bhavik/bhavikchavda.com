import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';

import { ArticleType, PostType } from '@/interfaces';
import { Loader } from '@/components/Loader';
import { SEO } from '@/components/SEO';
import { Layout } from '@/components/Layout';
import { Heading } from '@/components/Heading';
import { Post } from '@/components/Post';
import { Article } from '@/components/Article';
import { Button } from '@/components/Button';
import { Backdrop } from '@/components/Backdrop';

interface WritingsProps {
    posts: {
        nodes: {
            frontmatter: PostType;
        }[];
        totalCount: number;
    };
    articles: {
        nodes: {
            frontmatter: ArticleType;
        }[];
    };
}

const LazyPDFViewer = React.lazy(() => import('@/components/PDFViewer'));

const Writings = ({
    data: {
        posts: { nodes: posts },
        articles: { nodes: articles },
    },
}: PageProps<WritingsProps>) => {
    const postsLength = 6;
    const isSSR = typeof window === 'undefined';
    const [postsPointer, setPostsPointer] = useState(posts.slice(0, postsLength).length);
    const [postsList, setPostsList] = useState(posts.slice(0, postsLength));
    const [hasMore, setHasMore] = useState(posts.length > postsLength);
    const [selectedPost, setSelectedPost] = useState<PostType>();

    const loadNextPosts = () => {
        if (hasMore) {
            let newPostsPointer = postsPointer + postsLength;
            let newPosts = posts.slice(postsPointer, newPostsPointer);
            setPostsList(newPosts);
            setHasMore(newPostsPointer < posts.length);
            setPostsPointer(newPostsPointer);
            document.querySelector('#posts').scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    const onPostSelect = (post: PostType) => {
        setSelectedPost(post);
    };

    return (
        <>
            <Layout path="/content">
                <SEO title="Writings" description="Articles and Content written by bhavik chavda" />

                {/* Posts */}
                <Heading
                    icon="linkedIn"
                    title="LinkedIn Posts"
                    variant="description"
                    className="mt-7 mb-5"
                    description="Recent Posts on LinkedIn"
                />
                <section className="text-gray-600" id="posts">
                    <div className="container mx-auto ">
                        <div className="flex flex-wrap">
                            {postsList.map((post, i) => (
                                <Post post={post.frontmatter} key={i} onClick={onPostSelect} />
                            ))}
                        </div>
                    </div>
                    {hasMore && (
                        <Button
                            ariaLabel="Next Posts"
                            variant="primary"
                            className="mx-auto font-medium"
                            onClick={loadNextPosts}
                        >
                            Next Posts
                        </Button>
                    )}
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
                    {articles.map((article, i) => (
                        <Article article={article.frontmatter} key={i} />
                    ))}
                </div>
            </Layout>
            {!isSSR && (
                <React.Suspense fallback={<Loader />}>
                    <Backdrop
                        show={!!selectedPost}
                        onClose={() => setSelectedPost(undefined)}
                        className="bg-gray-900 opacity-30"
                    >
                        <LazyPDFViewer pdfUrl={selectedPost?.url} />
                    </Backdrop>
                </React.Suspense>
            )}
        </>
    );
};

export default Writings;

export const pageQuery = graphql`
    {
        posts: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "posts" } } }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            nodes {
                frontmatter {
                    category
                    description
                    date(fromNow: true)
                    heading
                    tags
                    title
                    url
                }
            }
            totalCount
        }
        articles: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "articles" } } }
            sort: { order: DESC, fields: frontmatter___date }
        ) {
            nodes {
                frontmatter {
                    description
                    date(fromNow: true)
                    heading
                    tags
                    title
                    url
                }
            }
        }
    }
`;
