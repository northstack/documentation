import React from "react"

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Related = ({ relatedArticles }) => (
    <>
        {relatedArticles.edges.length > 0 &&
            <div className="related-articles">
            <Card>
                <Card.Header>Related Articles</Card.Header>
                <ListGroup variant="flush">
                    {relatedArticles.edges.map((relatedArticle) => (
                        <ListGroup.Item className="related-article" action href={relatedArticle.node.fields.slug}>
                            <p className="related-title list-group-item-title">{relatedArticle.node.frontmatter.title}</p>
                            <p className="related-description list-group-item-description">{relatedArticle.node.frontmatter.description}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            
            </div>
        }
    </>
);

export default Related;