import React from "react"

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ArchiveChildren = ({ archiveChildren }) => (
    <>
        {archiveChildren.edges.length > 0 &&
            <div className="archive-children">
                <Card>
                    <ListGroup variant="flush">
                        {archiveChildren.edges.map((archiveChild) => (
                            <ListGroup.Item action href={archiveChild.node.fields.slug}>
                                <p className="related-title list-group-item-title">{archiveChild.node.frontmatter.title}</p>
                                <p className="related-description list-group-item-description">{archiveChild.node.frontmatter.description}</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Card>
            </div>
        }
    </>
);

export default ArchiveChildren;