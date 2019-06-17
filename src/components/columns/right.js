import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import ArticleTableOfContents from "../article/table-of-contents";
import Related from "../article/related";

const RightColumn = ({ tableOfContentsMarkup, relatedArticles, currentArticleHeadings }) => (
    <Col xl={3} className="col-right-sidebar d-none d-xl-flex">
        <Container className="sticky-top article-right">
            <ArticleTableOfContents headings={currentArticleHeadings} markup={tableOfContentsMarkup} />
            <Related relatedArticles={relatedArticles}/>
        </Container>
    </Col>
);

export default RightColumn;