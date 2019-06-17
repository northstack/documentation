import React from "react";
import { graphql } from "gatsby";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Layout from "../components/layout";
import MainMenu from "../components/main-menu";
import ArchiveChildren from "../components/archive-children";

const Template = ({data}) => (
    <Layout>
            <Row className="no-gutters">
                <Col xs={3} lg="auto" style={{backgroundColor: "rgba(0,0,0,.03)"}}>
                    <Container className="sticky-top article-left">
                        <MainMenu currentPage={data.currentArticle.fields.slug} />
                    </Container>
                </Col>
                <Col xs={9} lg className="col-main-content">
                    <article dangerouslySetInnerHTML={{ __html: data.currentArticle.html }} />
                    <ArchiveChildren archiveChildren={data.archiveChildren} />
                </Col>
            </Row>
    </Layout>
)

export const pageQuery = graphql`
    query($path: String!, $archiveRegex: String) {
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
                }
            }
        archiveChildren:
            allMarkdownRemark( filter: { fields: { slug: { regex: $archiveRegex } } } ) {
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