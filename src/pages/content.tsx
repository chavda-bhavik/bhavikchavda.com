import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { ArticleType, PostType } from '@/interfaces';
import { Heading, Post, Article, SEO, Layout, Button } from '@/components';

interface WritingsProps {
    posts: {
        nodes: {
            frontmatter: PostType;
        }[];
    };
    articles: {
        nodes: {
            frontmatter: ArticleType;
        }[];
    };
}

const Writings = ({ data }: PageProps<WritingsProps>) => {
    return (
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
            <section className="text-gray-600">
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {data.posts.nodes.map((post, i) => (
                            <Post post={post.frontmatter} key={i} onClick={() => {}} />
                        ))}
                    </div>
                </div>
                {/* {postsData.has_more && (
                    <Button
                        variant="primary"
                        onClick={fetchMorePosts}
                        loading={loading}
                        className="mx-auto font-medium"
                    >
                        Load More Posts
                    </Button>
                )}
                {error && <p className="text-red-500 font-medium">{error}</p>} */}
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
                {data.articles.nodes.map((article, i) => (
                    <Article article={article.frontmatter} key={i} />
                ))}
            </div>
        </Layout>
    );
};

export default Writings;

export const pageQuery = graphql`
    {
        posts: allMarkdownRemark(
            filter: { frontmatter: { type: { eq: "posts" } } }
            sort: { order: DESC, fields: frontmatter___date }
            limit: 6
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
