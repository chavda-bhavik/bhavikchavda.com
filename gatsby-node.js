const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;

    // fetch data from a collection which contains list of urls mapping for redirection
    let response = await graphql(`
        query redirects {
            links: allMarkdownRemark(filter: { frontmatter: { type: { eq: "links" } } }) {
                nodes {
                    frontmatter {
                        redirects {
                            from
                            to
                            isPermanent
                        }
                    }
                }
            }
        }
    `);
    if (Array.isArray(response.data.links.nodes[0].frontmatter.redirects)) {
        response.data.links.nodes[0].frontmatter.redirects.forEach((path) => {
            createRedirect({ fromPath: path.from, toPath: path.to, isPermanent: path.isPermanent });
        });
    }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onCreateWebpackConfig = function ({ actions, stage, loaders }) {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        module: {
            rules: [
                {
                    test: /canvas/,
                    use: loaders.null(),
                },
            ],
        },
    });
};