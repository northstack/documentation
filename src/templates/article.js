import React from "react";
import { graphql } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layout";
import MainMenu from "../components/main-menu";
import Related from "../components/related";

const Template = ({data}) => (
    <Layout>
        <Row className="no-gutters">
            <Col xs={3} lg="auto" className="col-main-menu" style={{backgroundColor: "rgba(0,0,0,.03)"}}>
                <MainMenu className="sticky-top article-left" currentPage={data.currentArticle.fields.slug} />
            </Col>
            <Col className="col-main-content">
                <article dangerouslySetInnerHTML={{ __html: data.currentArticle.html }} />
            </Col>
            <Col xl={3} className="col-right-sidebar d-none d-xl-flex">
                <Container className="sticky-top article-right">
                    {data.currentArticle.headings.length > 3 &&
                        <nav id="article-toc" className="article-toc" dangerouslySetInnerHTML={{ __html: data.currentArticle.tableOfContents }} />
                    }
                    <Related relatedArticles={data.relatedArticles}/>
                </Container>
            </Col>
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