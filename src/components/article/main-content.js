import React from "react";
import Col from "react-bootstrap/Col";

const ArticleMainContent = ({ markup }) => (
    <Col className="col-main-content">
        <article dangerouslySetInnerHTML={{ __html: markup }} />
    </Col>
);

export default ArticleMainContent;