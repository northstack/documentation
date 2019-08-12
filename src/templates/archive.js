import React from 'react';
import { graphql } from 'gatsby';

import Row from 'react-bootstrap/Row';

import Layout from '../components/layout';
import LeftColumn from '../components/columns/left';
import MainColumn from '../components/columns/main';

import SEO from '../components/seo';

const Template = ({ data }) => (
	<Layout>
		<SEO title={data.currentArticle.frontmatter.title} description={data.currentArticle.frontmatter.description} />
		<Row>
			<LeftColumn currentSlug={data.currentArticle.fields.slug} />
			<MainColumn markup={data.currentArticle.html} template="archive" archiveChildren={data.archiveChildren} />
		</Row>
	</Layout>
);

export const pageQuery = graphql`
	query($path: String!) {
		currentArticle: markdownRemark(fields: { slug: { eq: $path } }) {
			html
			tableOfContents
			frontmatter {
				title
				related
				description
			}
			fields {
				slug
			}
		}
		archiveChildren: allMarkdownRemark(
			filter: { fields: { archivePath: { eq: $path } } }
			sort: { fields: frontmatter___title }
			limit: 100
		) {
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
`;

export default Template;
