import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { Button } from '@/components/Button';
import { serialize } from 'next-mdx-remote/serialize';
import ReactSyntaxHighlighter from 'react-syntax-highlighter';

const SyntaxHighlighter = (props) => (
    <ReactSyntaxHighlighter
        {...props}
        style={{
            'hljs-comment': {
                color: '#7e7887',
            },
            'hljs-quote': {
                color: '#7e7887',
            },
            'hljs-variable': {
                color: '#be4678',
            },
            'hljs-template-variable': {
                color: '#be4678',
            },
            'hljs-attribute': {
                color: '#be4678',
            },
            'hljs-regexp': {
                color: '#be4678',
            },
            'hljs-link': {
                color: '#be4678',
            },
            'hljs-tag': {
                color: '#be4678',
            },
            'hljs-name': {
                color: '#be4678',
            },
            'hljs-selector-id': {
                color: '#be4678',
            },
            'hljs-selector-class': {
                color: '#be4678',
            },
            'hljs-number': {
                color: '#aa573c',
            },
            'hljs-meta': {
                color: '#aa573c',
            },
            'hljs-built_in': {
                color: '#aa573c',
            },
            'hljs-builtin-name': {
                color: '#aa573c',
            },
            'hljs-literal': {
                color: '#aa573c',
            },
            'hljs-type': {
                color: '#aa573c',
            },
            'hljs-params': {
                color: '#aa573c',
            },
            'hljs-string': {
                color: '#2a9292',
            },
            'hljs-symbol': {
                color: '#2a9292',
            },
            'hljs-bullet': {
                color: '#2a9292',
            },
            'hljs-title': {
                color: '#576ddb',
            },
            'hljs-section': {
                color: '#576ddb',
            },
            'hljs-keyword': {
                color: '#955ae7',
            },
            'hljs-selector-tag': {
                color: '#955ae7',
            },
            'hljs-deletion': {
                color: '#19171c',
                display: 'inline-block',
                width: '100%',
                backgroundColor: '#be4678',
            },
            'hljs-addition': {
                color: '#19171c',
                display: 'inline-block',
                width: '100%',
                backgroundColor: '#2a9292',
            },
            hljs: {
                display: 'block',
                overflowX: 'auto',
                background: '#19171c',
                color: '#8b8792',
                padding: '0.5em',
            },
            'hljs-emphasis': {
                fontStyle: 'italic',
            },
            'hljs-strong': {
                fontWeight: 'bold',
            },
        }}
        showLineNumbers
    />
);

const components = { Button, SyntaxHighlighter };

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
    return (
        <div className="mt-4">
            <h1>{title}</h1>
            <div className="blog">
                <article>
                    <MDXRemote {...mdxSource} components={components} lazy />
                </article>
            </div>
        </div>
    );
};

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('content/blog'));

    const paths = files.map((filename) => ({
        params: {
            slug: filename.replace('.mdx', ''),
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('content/blog', slug + '.mdx'), 'utf-8');

    const { data: frontMatter, content } = matter(markdownWithMeta);
    const mdxSource = await serialize(content);

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        },
    };
};

export { getStaticProps, getStaticPaths };

export default PostPage;