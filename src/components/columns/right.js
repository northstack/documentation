import React from 'react';
//import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ArticleTableOfContents from '../article/table-of-contents';
import Related from '../article/related';

const RightColumn = ({ tableOfContentsMarkup, relatedArticles, currentArticleHeadings }) => (
	<Col className="col-right-sidebar">
		<div id="ArticleRight" className="sticky-top">
			<h5>TOC</h5>
			<ArticleTableOfContents headings={currentArticleHeadings} markup={tableOfContentsMarkup} />
			<Related relatedArticles={relatedArticles} />
		</div>
	</Col>
);
export default RightColumn;
