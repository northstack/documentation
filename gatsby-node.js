const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({node, getNode, actions}) => {
    const { createNodeField } = actions;

    if ( node.internal.type === "MarkdownRemark" ) {
        const relativeFilePath = createFilePath({
            node,
            getNode
        });

        createNodeField({
            node,
            name: "slug",
            value: `${relativeFilePath}`
        });

        if ( ! Array.isArray( node.frontmatter.related ) ) {
            node.frontmatter.related = [];
        }
    }
}

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;

    const articleTemplate = path.resolve(`src/templates/article.js`);
    const archiveTemplate = path.resolve(`src/templates/archive.js`);

    return graphql(`
        {
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___title] }
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            related
                            description
                            type
                        },
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            if ( node.frontmatter.type === 'archive' ) {
                createPage({
                    path: node.fields.slug,
                    component: archiveTemplate,
                    context: {
                        archiveRegex: '/' + node.fields.slug.replace('/', '\/') + '.*\/$/gm'
                    }
                });
            } else {
                createPage({
                    path: node.fields.slug,
                    component: articleTemplate,
                    context: {
                        related: node.frontmatter.related
                    }
                });
            }
            
        });
    });
}