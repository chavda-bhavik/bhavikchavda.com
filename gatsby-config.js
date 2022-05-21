module.exports = {
    siteMetadata: {
        title: `Bhavik Chavda`,
        author: {
            name: `Bhavik Chavda`,
            summary: `Lives and works in India building full stack web applications using JavaScript.`,
        },
        description: `Bhavik Chavda is a Full Stack Web Developer from India who specializes in building web applications using JavaScript, TypeScrpt, React, Node.js, Express, and GraphQL.`,
        siteUrl: `https://www.bhavikchavda.com`,
        metaImage: '/og/default.png',
        social: {
            twitter: `chavdabhavik7`,
            linkedin: `chavdabhavik7`,
            instagram: `chavdabhavik7`,
            github: `chavda-bhavik`,
        },
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `blog`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Bhavik Chavda`,
                short_name: `Bhavik Chavda`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#344B47`,
                display: `standalone`,
                icon: `src/images/header-avatar.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-csp`,
            options: {
                disableOnDev: true,
                reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
                mergeScriptHashes: false, // you can disable scripts sha256 hashes
                mergeStyleHashes: false, // you can disable styles sha256 hashes
                mergeDefaultDirectives: true,
                directives: {
                    'default-src': "'self'",
                    'script-src': "'self' 'unsafe-inline' 'unsafe-eval'", // 'unsafe-eval' needed for react-pdf
                    'style-src': "'self' 'unsafe-inline'",
                    'img-src': "* 'self' data: blob:",
                    'manifest-src': "'self'",
                    'worker-src': "'self' blob:",
                    'font-src': "'self'",
                    'base-uri': "'self'",
                    'prefetch-src': "'self'",
                    'connect-src':
                        "'self' https://res.cloudinary.com https://vitals.vercel-insights.com", // posts pdf are hosted on cloudinary
                },
            },
        },
        `gatsby-plugin-webpack-bundle-analyser-v2`,
        `gatsby-plugin-client-side-redirect`,
    ],
};
