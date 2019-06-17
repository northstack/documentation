import React from "react";
import { graphql } from "gatsby";

import Row from "react-bootstrap/Row";

import Layout from "../components/layout";
import LeftColumn from "../components/columns/left";
import MainColumn from "../components/columns/main";
import RightColumn from "../components/columns/right";

import SEO from "../components/seo";

const Template = ({data}) => (
    <Layout>
        <SEO title={data.currentArticle.frontmatter.title} description={data.currentArticle.frontmatter.description} />
        <Row className="no-gutters">
            <LeftColumn currentSlug={data.currentArticle.fields.slug} />
            <MainColumn markup={data.currentArticle.html} template="article" />
            <RightColumn tableOfContentsMarkup={data.currentArticle.tableOfContents} relatedArticles={data.relatedArticles} currentArticleHeadings={data.currentArticle.headings} />
        </Row>
    </Layout>
)

export const pageQuery = graphql`
    query($path: String!, $related: [String]) {
        currentArticle:
            markdownRemark( fields: { slug: { eq: $path } } ) {
                html
                tableOfContents
                frontmatter {
                    title
                    related
                    description
                },
                fields {
                    slug
                },
                headings {
                    value
                    depth
                }
            }
        relatedArticles:
            allMarkdownRemark( filter: { fields: { slug: { in: $related } } } ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            description
                        }
                    }
                }
            }
    }
`

export default Template;