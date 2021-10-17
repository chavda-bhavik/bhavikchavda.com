import React from 'react';
import Head from 'next/head';
import { defaultSeo } from '@/config/constants';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        image: defaultImage,
        siteUrl,
        twitterUserName,
    } = defaultSeo;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        titleTemplate: title
            ? `${title} | ${defaultTitle}`
            : `${defaultTitle} | Full Stack Web Developer`,
        image: `${siteUrl}${image || defaultImage}`,
        url: siteUrl,
    };

    return (
        <Head>
            <title>{seo.titleTemplate}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={seo.title} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:site_name" content={seo.title} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:image" content={seo.image} />
            <meta property="twitter:creator" content={twitterUserName} />
            <meta property="twitter:description" content={seo.description} />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Website',
                    url: seo.url,
                    name: seo.title,
                })}
            </script>
        </Head>
    );
};
