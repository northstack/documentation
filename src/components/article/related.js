import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Related = ({ relatedArticles }) => (
	<>
	<h5>Related Articles</h5>

		{relatedArticles.edges.length > 0 && (
			<Card className="related-articles">
					<ListGroup variant="flush">
						{relatedArticles.edges.map((relatedArticle) => (
							<ListGroup.Item
								key={'related-' + relatedArticle.node.fields.slug}
								className="related-article"
								action
								href={relatedArticle.node.fields.slug}
							>
								<p className="related-title list-group-item-title">
									{relatedArticle.node.frontmatter.title}
								</p>
								<p className="related-description list-group-item-description">
									{relatedArticle.node.frontmatter.description}
								</p>
							</ListGroup.Item>
						))}
					</ListGroup>
			</Card>
		)}
	</>
);

export default Related;
